import React, { useEffect, useState } from "react";
import AccountForm from "./AccountForm";
import * as repo from "../../repositories/accountRepository";
import { useParams } from "react-router";

const CREATE_ACTION = "Create";
const UPDATE_ACTION = "Update";

function ManageAccountPage() {
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
    transactionHistory: [
      {
        transactionID: "",
        transactionType: "",
        transactionAmount: 0.0,
        transactionDate: "",
        transactionNotes: "",
        transactionPartner: {
          accountNumber: "",
          firstName: "",
          middleName: "",
          lastName: "",
        },
      },
    ],
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setAction(UPDATE_ACTION);
      setAccount(repo.getAccountById(id));
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

  function handleSubmit(event) {
    event.preventDefault();

    if (action === UPDATE_ACTION) {
      repo.updateAccount(account);
      return;
    }

    repo.saveAccount(account);
  }

  return (
    <>
      <h1>{action} Account</h1>
      <AccountForm
        account={account}
        handleChange={handleChange}
        handleAccountHolderChange={handleAccountHolderChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default ManageAccountPage;
