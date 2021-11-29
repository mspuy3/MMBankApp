/* JS file containing services that initializes value on keys saved in local storage */

// Service that initialize accounts array into empty array in local storage
// Service that initialize accounts array with dummy accounts in local storage

var testAccounts = [
  {
    id: 1,
    accountNumber: "00001",
    accountName: "ALEX CROSS",
    accountHolder: {
      firstName: "Alex",
      middleName: "Bourne",
      lastName: "Cross",
    },
    balanceAmount: 1000.0,
    transactionHistory: [],
  },
  {
    id: 2,
    accountNumber: "00002",
    accountName: "JASON BOURNE",
    accountHolder: {
      firstName: "Jason",
      middleName: "Cross",
      lastName: "Bourne",
    },
    balanceAmount: 1000.0,
    transactionHistory: [],
  },
  {
    id: 3,
    accountNumber: "00003",
    accountName: "JACK BAUER",
    accountHolder: {
      firstName: "Jack",
      middleName: "Twofour",
      lastName: "Bauer",
    },
    balanceAmount: 1000.0,
    transactionHistory: [],
  },
];

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
