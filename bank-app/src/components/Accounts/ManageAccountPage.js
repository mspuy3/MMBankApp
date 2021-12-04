import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import AccountForm from "./AccountForm";
import * as accountRepo from "../../repositories/accountRepository";
import * as transactionRepo from "../../repositories/transactionRepository";
import actions from "./actions";
import * as accountSvc from "../../services/accountService";
import * as transactionSvc from "../../services/transactionService";

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
      userId: null,
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
    const val =
      event.target.name === "balanceAmount"
        ? parseFloat(event.target.value)
        : event.target.value;

    const updatedAccount = {
      ...account,
      [event.target.name]: val,
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
    if (!formIsValid()) {
      toast.error("Some fields are not valid");
      return;
    }

    switch (action) {
      case CREATE_ACTION:
        const transaction = transactionSvc.createTransaction(
          actions.DEPOSIT,
          parseFloat(account.balanceAmount),
          "Initial Deposit"
        );

        const transactionId = transactionRepo.saveTransaction(transaction);
        const updatedAccount = accountSvc.addTransactionIdToAccount(
          account,
          transactionId
        );

        const accountId = accountRepo.saveAccount(updatedAccount);
        toast.success("Account created.");
        navigate(`../accounts/account-dashboard/${accountId}`, {
          replace: true,
        });
        break;
      case UPDATE_ACTION:
        const originalAccount = accountRepo.getAccountById(id);

        if (JSON.stringify(originalAccount) === JSON.stringify(account)) {
          toast.warning("No changes made");
          return;
        }

        accountRepo.updateAccount(account);
        toast.success("Account Updated.");
        break;
      default:
    }
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
      if (!id) {
        const _account = accountRepo.getAccountByAccountNo(
          account.accountNumber
        );
        if (_account) _errors.accountNumber = "Account number already used";
      }
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
