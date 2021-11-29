import React from 'react';
import { Link } from 'react-router-dom';
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table";
import { getAccounts } from '../../repositories/accountRepository'

//Sets the header of the table. accessor matches the key of the object elements from the source ( user objects in the accounts array in the localStorage) //

let linkTemplate = '/accounts/manage-account/';

const columns = [
   {
      Header: "Account Number",
      accessor: "accountNumber",
   },
   {
      Header: "Account Name",
      accessor: "accountName",
   },
   {
      Header: "Balance Amount",
      accessor: "balanceAmount",
   },
   {
      Header: "View Account",
      accessor: "id",
      Cell: e => <button> <a href={linkTemplate + e.value}> View </a> </button>
   }
];

//retrieves the accounts value from the localStorage//
const data = getAccounts();


//
const GlobalFilter = ({filter, setFilter}) => {
   return (
      <div>
         Global Search: {' '}
         <input
            placeholder = 'Search by Number or Name' 
            value={filter || ''}
            onChange={e => setFilter(e.target.value)}  />
      </div>
   )
}


//generates the actual table//
const AccountsTable = () => {

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
   } = useTable (
      {
         columns,
         data,
         initialState: { pageIndex: 0 },
      },
      useGlobalFilter,
      useSortBy,
      usePagination,
      
   )

   const { globalFilter } = state

   // Render the UI for your table //
   return (
   <>

      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      <table {...getTableProps()}>
         <thead>
            {headerGroups.map(headerGroup => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                     <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        {/* Adds a sort direction indicator */}
                        <span>
                           {column.isSorted
                              ? column.isSortedDesc
                                 ? ' 🔽'
                                 : ' 🔼'
                              : ''}
                        </span>
                     </th>
                  ))}
               </tr>
            ))}
         </thead>

         <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
               prepareRow(row)
               return (
                  <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                     return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                  </tr>
               )
            })}
         </tbody>

      </table>

      {/* Pagination buttons below. {' '} adds the space between. Remove {' '} during styling */}
      <div className="pagination">
         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
         {'<<'}
         </button>{' '}
         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
         {'<'}
         </button>{' '}
         <button onClick={() => nextPage()} disabled={!canNextPage}>
         {'>'}
         </button>{' '}
         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
         {'>>'}
         </button>{' '}
         <span>
         Page{' '}
         <strong>
            {pageIndex + 1} of {pageOptions.length}
         </strong>{' '}
         </span>
         <span>
         | Go to page:{' '}
         <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
               const page = e.target.value ? Number(e.target.value) - 1 : 0
               gotoPage(page)
            }}
            style={{ width: '100px' }}
         />
         </span>{' '}
         <select
         value={pageSize}
         onChange={e => {
            setPageSize(Number(e.target.value))
         }}
         >
         {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
               Show {pageSize}
            </option>
         ))}
         </select>
      </div>
   </>
   )
}

export default AccountsTable
