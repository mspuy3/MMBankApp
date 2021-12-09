export function saveTransaction(transaction) {
  let transactions = JSON.parse(localStorage.getItem("transactions"));

  const id = transactions.length + 1;
  transaction.id = id;

  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  return id;
}

export function getTransactions() {
  return JSON.parse(localStorage.getItem("transactions"));
}