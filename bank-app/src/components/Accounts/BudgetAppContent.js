import React from "react";
import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";

function BudgetAppContent(props) {
  return (
    <div className='row w-75 abs-center'>
      <div className='col-3'>
        <div className='row mb-5'>
          <div className='col'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Account Balance:</h5>
                <p class='card-text fw-bold fs-1 text-end'>
                  {props.budgetBalance}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <form onSubmit={props.handleSubmit}>
              <div className='row mb-2'>
                <div className='col'>
                  <TextInput
                    id='name'
                    label='Expense'
                    name='name'
                    value={props.expense.name || ""}
                    onChange={props.handleChange}
                    // error={props.errors.accountNumber}
                  />
                </div>
              </div>

              <div className='row mb-2'>
                <div className='col'>
                  <NumberInput
                    id='amount'
                    label='Amount'
                    min='100'
                    max='99999'
                    name='amount'
                    value={props.expense.amount || ""}
                    onChange={props.handleChange}
                    // error={props.errors.accountNumber}
                  />
                </div>
              </div>

              <div className='row text-center mt-3'>
                <div className='col'>
                  <input
                    type='submit'
                    value='Add Expense'
                    className='btn btn-primary w-100'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='col'>
        <div class='card'>
          <div class='card-body'>
            <table className='table table-striped'>
              <thead className='text-center'>
                <tr>
                  <th>Expense</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {props.expenses._expenses.map((expense, index) => {
                  return (
                    <tr key={index}>
                      <td>{expense.name}</td>
                      <td>{expense.amount}</td>
                      <td>
                        <button
                          id={index}
                          onClick={props.handleDelete}
                          className='btn btn-danger'
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetAppContent;
