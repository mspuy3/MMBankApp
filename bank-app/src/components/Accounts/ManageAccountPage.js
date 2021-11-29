import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import AccountForm from "./AccountForm";
import * as accountRepo from "../../repositories/accountRepository";
import * as transactionRepo from "../../repositories/transactionRepository";
import { getCurrentDate } from "../../helpers";

const CREATE_ACTION = "Create";
const UPDATE_ACTION = "Update";
const INITAL_DEPOSIT_MIN = 2000.0;

function ManageAccountPage() {
  const [errors, setErrors] = useState([]);
  const [action, setAction] = useState(CREATE_ACTION);
  const [account, setAccount] = useState({
    id: null,
    accountNumber: "",
    accountName: "",
    accountHolder: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    balanceAmount: 0.0,
    transactionHistory: [],
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setAction(UPDATE_ACTION);
      setAccount(accountRepo.getAccountById(id));
    }
  }, [id]);

  // Handles change event for not nested inputs
  function handleChange(event) {
    const updatedAccount = {
      ...account,
      [event.target.name]: event.target.value,
    };
    setAccount(updatedAccount);
  }

  // Handles change event for changes in the account holder property
  function handleAccountHolderChange(event) {
    const updatedAccountHolder = {
      ...account.accountHolder,
      [event.target.name]: event.target.value,
    };

    const updatedAccount = {
      ...account,
      accountHolder: { ...updatedAccountHolder },
    };
    setAccount(updatedAccount);
  }

  /* 
    Summary: 
     - Checks if action is create or update
     - if update, updates current account
     - if create, adds transaction id to transaction history before saving the account
    Params:
  */
  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    if (action === UPDATE_ACTION) {
      accountRepo.updateAccount(account);
      return;
    }

    const transactionId = saveTransaction();
    const updatedAccount = addTransactionIdToAccount(transactionId);
    const accountId = accountRepo.saveAccount(updatedAccount);
    debugger;
    // props.history.push(`/manage-account/${accountId}`);
    toast.success("Account created.");
    // navigate(`./${accountId}`, { replace: true });
  }

  /* 
    Summary: 
     - Saves transaction (initial deposit)
     - Returns transaction Id
    Params:
  */
  function saveTransaction() {
    const transaction = {
      id: null,
      type: "DEPOSIT",
      amount: account.balanceAmount,
      date: getCurrentDate(),
      notes: "Initial Deposit",
      partner: null,
    };

    return transactionRepo.saveTransaction(transaction);
  }

  /* 
    Summary: 
     - Saves transaction (initial deposit) then add transaction Id to to account's transaction history
     - Returns updated account with transaction id in transaction history
    Params:
  */
  function addTransactionIdToAccount(transactionId) {
    const updatedTransactionHistory = [...account.transactionHistory];
    updatedTransactionHistory.push(transactionId);

    const updatedAccount = {
      ...account,
      transactionHistory: [...updatedTransactionHistory],
    };

    return updatedAccount;
  }

  /* 
    Summary: 
     - Validates the account form
     - Returns true if there are no errors, otherwise false if there is
    Params:
  */
  function formIsValid() {
    const _errors = {};

    if (!account.accountNumber) {
      _errors.accountNumber = "Account number is required";
    } else {
      const _account = accountRepo.getAccountByAccountNo(account.accountNumber);
      if (_account) _errors.accountNumber = "Account number already used";
    }

    if (!account.accountName) {
      _errors.accountName = "Account name is required";
    }

    if (!account.accountHolder.firstName) {
      _errors.firstName = "Holder first name is required";
    }

    if (!account.accountHolder.middleName) {
      _errors.middleName = "Holder middle name is required";
    }

    if (!account.accountHolder.lastName) {
      _errors.lastName = "Holder last name is required";
    }

    if (action === CREATE_ACTION) {
      if (parseFloat(account.balanceAmount) === 0) {
        _errors.balanceAmount = "Initial deposit is required";
      }
      if (parseFloat(account.balanceAmount) < INITAL_DEPOSIT_MIN) {
        _errors.balanceAmount = `Initial Deposit should be more than ${INITAL_DEPOSIT_MIN}`;
      }
    }

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      <h1>{action} Account</h1>
      <AccountForm
        action={action}
        account={account}
        handleChange={handleChange}
        handleAccountHolderChange={handleAccountHolderChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
}

export default ManageAccountPage;
