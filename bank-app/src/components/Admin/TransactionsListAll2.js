import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import { getTransactions } from '../../repositories/transactionRepository'
import {getAccountByAccountNo, getAccounts} from '../../repositories/accountRepository'

//Sets the header of the table. accessor matches the key of the object elements from the source ( user objects in the accounts array in the localStorage) //


const columns = [
  {
    Header: "Transaction",
    accessor: "type",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
   Header: "Notes",
   accessor: "notes",
  },
];

//search function //
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div>
      Find Transaction:{" "}
      <input
        placeholder='Any'
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="rounded border-1"
      />
    </div>
  );
};

//generates the actual table//

const TransactionsListAll2 = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(getTransactions().reverse());
  }, []);

  // Use the state and functions returned from useTable to build your UI//
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // Instead of using 'rows', we'll use page, which has only the rows for the active page //
    page,
    // The rest of these things are super handy, too //
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: transactions,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { globalFilter } = state;

  // Render the UI for the search bar, table, and pagination //
  return (
    <div className="container-fluid col-md-10 offset-md-1 shadow p-3 mb-5 bg-white rounded">
      
      <div className="d-flex justify-content-between">
      <h2 className="text-secondary">List of All Transactions</h2>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} className="rounded"/>
      {/* 
      <Link to='../accounts/manage-account/'>
        <button className="btn btn-primary">Create Account</button>
      </Link> */}

      </div>

      <table {...getTableProps()} className="table table-hover">
        <thead className="text-center">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Adds a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()} className="">
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="text-center">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination buttons below. {' '} adds the space between. Remove {' '} during styling */}
      <div className='pagination d-flex justify-content-between'>
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="btn btn-secondary btn-sm">
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage} className="btn btn-secondary btn-sm">
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage} className="btn btn-secondary btn-sm">
            {">"}
          </button>{" "}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="btn btn-secondary btn-sm">
            {">>"}
          </button>{" "}
        </div>

        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>

        <div className="">
          <span>
            Go to page:{" "}
            <input
              type='number'
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              className="rounded border-1 text-center"
              
              style={{width: "3em"}}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="rounded border-1"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TransactionsListAll2;
