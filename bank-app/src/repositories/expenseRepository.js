// JS file containing services that interact with data within the local storage

/* 
  Summary: 
   - Retrieves all expenses by account number
  Params:
    accountNumber - account number of the user
*/
export function getExpensesByAccountNumber(accountNumber) {
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  return expenses.find((expense) => expense.accountNumber === accountNumber);
}

/* 
  Summary: 
    1. retrieves accounts array in local storage
    2. sets account id by incrementing current accounts array length by one
    3. pushes passed account into the the accounts array
    4. saves new accounts array into the local storage overriding the previous value
  Params:
    account - account object that will be added/created
*/
export function saveExpenses(expenses) {
  let allExpenses = JSON.parse(localStorage.getItem("expenses"));

  const _expenses = allExpenses.find(
    (expensesObj) => expensesObj.accountNumber === expenses.accountNumber
  );

  if (!_expenses) {
    const id = allExpenses.length + 1;
    expenses.id = id;

    allExpenses.push(expenses);
  } else {
    const expensesInDb =
      allExpenses[
        allExpenses.findIndex((expenses) => expenses.id === _expenses.id)
      ]._expenses;
    expensesInDb.length = 0;
    expensesInDb.push(...expenses._expenses);
  }

  localStorage.setItem("expenses", JSON.stringify(allExpenses));
}

/* 
  Summary: 
   - Service that removes an account
  Params:
    id - account id of the account to be removed
*/
export function deleteExpense(accountNumber, index) {
  let allExpenses = JSON.parse(localStorage.getItem("expenses"));

  const expenses = allExpenses.find(
    (expensesObj) => expensesObj.accountNumber === accountNumber
  );

  expenses._expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(allExpenses));

  return expenses;
}
