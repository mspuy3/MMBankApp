import React from "react";
import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";

function BudgetAppContent(props) {
  return (
    <>
      <div>Account Balance: {props.budgetBalance}</div>
      <form onSubmit={props.handleSubmit}>
        <TextInput
          id='name'
          label='Expense'
          name='name'
          value={props.expense.name || ""}
          onChange={props.handleChange}
          // error={props.errors.accountNumber}
        />
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
        <input type='submit' value='Add Expense' />
      </form>
      <table>
        <thead>
          <tr>
            <td>Expense</td>
            <td>Amount</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {props.expenses._expenses.map((expense, index) => {
            return (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>
                  <button id={index} onClick={props.handleDelete}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BudgetAppContent;
