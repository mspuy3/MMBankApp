/* JS file containing services that initializes value on keys saved in local storage */

// Service that initialize accounts array into empty array in local storage
// Service that initialize accounts array with dummy accounts in local storage

import testAccounts from './testAccounts.json';


export default function initLocalStorage() {
  initAccounts();
  initTransactions();
}

function initAccounts() {
  if (localStorage.getItem("accounts") === null) {
    localStorage.setItem("accounts", JSON.stringify(testAccounts));
  }
}

function initTransactions() {
  if (localStorage.getItem("transactions") === null) {
    localStorage.setItem("transactions", JSON.stringify([]));
  }
}
