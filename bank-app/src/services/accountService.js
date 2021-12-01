// FIle that contains services related to accounts

/* 
    Summary: 
     - Saves transaction (initial deposit) then add transaction Id to to account's transaction history
     - Returns updated account with transaction id in transaction history
    Params:
  */
export function addTransactionIdToAccount(account, transactionId) {
  const updatedTransactionHistory = [...account.transactionHistory];
  updatedTransactionHistory.push(transactionId);

  const updatedAccount = {
    ...account,
    transactionHistory: [...updatedTransactionHistory],
  };

  return updatedAccount;
}
