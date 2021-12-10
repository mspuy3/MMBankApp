/* JS file containing services that initializes value on keys saved in local storage */

// Service that initialize accounts array into empty array in local storage
// Service that initialize accounts array with dummy accounts in local storage

import testAccounts from "./testAccounts.json";

export default function initLocalStorage() {
  initUsers();
  initLoggedInUser();
  initAccounts();
  initTransactions();
  initExpenses();
}

function initUsers() {
  const masterAdmin = {
    username: "superAdmin",
    password: "12345",
    userType: "superAdmin",
  };

  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify([masterAdmin]));
  }
}

function initLoggedInUser() {
  if (localStorage.getItem("loggedInUser") === null) {
    localStorage.setItem("loggedInUser", JSON.stringify({}));
  }
}

function initAccounts() {
  if (localStorage.getItem("accounts") === null) {
    localStorage.setItem("accounts", JSON.stringify([]));
  }
}

function initTransactions() {
  if (localStorage.getItem("transactions") === null) {
    localStorage.setItem("transactions", JSON.stringify([]));
  }
}

function initExpenses() {
  if (localStorage.getItem("expenses") === null) {
    localStorage.setItem("expenses", JSON.stringify([]));
  }
}
