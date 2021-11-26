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
    transactionHistory: [
      {
        transactionID: "1",
        transactionType: "DEPOSIT",
        transactionAmount: 1000.0,
        transactionDate: "",
        transactionNotes: "",
        transactionPartner: {
          accountNumber: null,
          firstName: null,
          middleName: null,
          lastName: null,
        },
      },
    ],
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
    transactionHistory: [
      {
        transactionID: "",
        transactionType: "DEPOSIT/WITHDRAW/SEND/RECEIVE",
        transactionAmount: 0.0,
        transactionDate: "",
        transactionNotes: "",
        transactionPartner: {
          accountNumber: "00003",
          firstName: "Jack",
          middleName: "Twofour",
          lastName: "Bauer",
        },
      },
    ],
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
    transactionHistory: [
      {
        transactionID: "",
        transactionType: "DEPOSIT/WITHDRAW/SEND/RECEIVE",
        transactionAmount: 0.0,
        transactionDate: "",
        transactionNotes: "",
        transactionPartner: {
          accountNumber: "00003",
          firstName: "Jack",
          middleName: "Twofour",
          lastName: "Bauer",
        },
      },
    ],
  },
];

export function accounts() {
  if (localStorage.getItem("accounts") === null) {
    localStorage.setItem("accounts", JSON.stringify(testAccounts));
  }
}
