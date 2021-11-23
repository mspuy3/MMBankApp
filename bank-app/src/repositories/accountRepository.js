// JS file containing services that interact with data within the local storage

/* 
  Summary: 
   - Retrieves all accounts saved in local storage
*/
export function getAccounts() {
  return JSON.parse(localStorage.getItem("accounts"));
}

/* 
  Summary: 
   1. retrieves accounts array in local storage
   2. returns an account which has the same account id as the passed id 
  Params:
    id - Account id of the account that will be retrieved
*/
export function getAccountById(id) {
  let accounts = JSON.parse(localStorage.getItem("accounts"));

  return accounts.find((account) => account.id === id);
}

/* 
  Summary: 
    1. retrieves accounts array in local storage
    2. pushes passed account into the the accounts array
    3. saves new accounts array into the local storage overriding the previous value
  Params:
    account - account object that will be added/created
*/
export function saveAccount(account) {
  let accounts = JSON.parse(localStorage.getItem("accounts"));

  accounts.push(account);
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

/* 
  Summary: 
   1. retrieves accounts array in local storage
   2. iterates to accounts array finding the same account by id then modifying it based on the passed account object
   3. saves new accounts array into the local storage overriding the previous value
  Params:
    account - account object that will be updated
*/
export function updateAccount(account) {
  let accounts = JSON.parse(localStorage.getItem("accounts"));

  accounts.forEach((_account) => {
    if (_account.id === account.id) {
      _account.name = account.name;
    }
  });

  localStorage.setItem("accounts", JSON.stringify(accounts));
}

/* 
  Summary: 
   - Service that removes an account
  Params:
    id - account id of the account to be removed
*/
export function deleteAccount(id) {
  let accounts = JSON.parse(localStorage.getItem("accounts"));

  accounts.forEach((account, index) => {
    if (account.id === id) {
      accounts.splice(index, 1);
    }
  });

  localStorage.setItem("accounts", JSON.stringify(accounts));
}
