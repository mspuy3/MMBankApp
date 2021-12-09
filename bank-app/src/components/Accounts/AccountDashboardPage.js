import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Modal from "react-modal";
import { toast } from "react-toastify";

import * as accountRepo from "../../repositories/accountRepository";
import * as transactionRepo from "../../repositories/transactionRepository";
import * as accountSvc from "../../services/accountService";
import * as transactionSvc from "../../services/transactionService";
import actions from "./actions";
import AccountDashboard from "./AccountDashboard";

Modal.setAppElement("body");

function AccountDashboardPage() {
  const { id } = useParams();

  const [account, setAccount] = useState(accountRepo.getAccountById(id));

  const [deposit, setDeposit] = useState({
    amount: 0.0,
    note: "",
  });
  const [withdrawal, setWithdrawal] = useState({
    amount: 0.0,
    note: "",
  });
  const [send, setSend] = useState({
    partner: "",
    amount: 0.0,
    note: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("");

  useEffect(() => {
    setAccount(accountRepo.getAccountById(id));
  }, [id, account.balanceAmount]);

  const [partner, setPartner] = useState("");

  useEffect(() => {
    setPartner(accountRepo.getAccountByAccountNo(send.partner));
  }, [send.partner]);

  const sendHandlers = {
    click: () => {
      setAction(actions.SEND);
      setShowModal(true);
    },

    submit: (event) => {
      event.preventDefault();

      
          
      switch (partner) {

        case undefined:
          
          toast.error("Account Number does not exist");
          break;
      
        default:

          switch (partner.accountNumber) {

            case account.accountNumber:
              toast.error("Cannot send to self");
              break;
            
            default:
              let balanceSender = account.balanceAmount - parseFloat(send.amount);
              const updatedAccount = {
                ...account,
                balanceAmount: balanceSender,
              };

              let balanceReceiver = partner.balanceAmount + parseFloat(send.amount);
              const updatedPartner = {
                ...partner,
                balanceAmount: balanceReceiver,
              }

              const transactionSender = transactionSvc.createTransaction(
                actions.SEND,
                send.amount,
                send.note,
                send.partner
              );

              const transactionReceiver = transactionSvc.createTransaction(
                actions.RECEIVE,
                send.amount,
                send.note,
                account.accountNumber
              );

              const transactionIdSender = transactionRepo.saveTransaction(transactionSender);
              const transactionIdReceiver = transactionRepo.saveTransaction(transactionReceiver);



              const _updatedAccount = accountSvc.addTransactionIdToAccount(
                updatedAccount,
                transactionIdSender
              );

              const _updatedPartner = accountSvc.addTransactionIdToAccount(
                updatedPartner,
                transactionIdReceiver
              );

              accountRepo.updateAccount(_updatedAccount);
              accountRepo.updateAccount(_updatedPartner);

              setAccount(updatedAccount);
              setPartner(updatedPartner)
              
              
              toast.success("Send to " + partner.accountName + " Successful");


            }
      }
    },
    
    change: (event) => {
      const val =
        event.target.name === "amount"
          ? parseFloat(event.target.value)
          : event.target.value;

      const updatedSend = {
        ...send,
        [event.target.name]: val,
      };
      setSend(updatedSend);
    },
  };
                              

  const depositHandlers = {
    click: () => {
      setAction(actions.DEPOSIT);
      setShowModal(true);
    },
    submit: (event) => {
      event.preventDefault();
      let balance = account.balanceAmount + parseFloat(deposit.amount);
      const updatedAccount = {
        ...account,
        balanceAmount: balance,
      };

      const transaction = transactionSvc.createTransaction(
        actions.DEPOSIT,
        deposit.amount,
        deposit.note
      );
      const transactionId = transactionRepo.saveTransaction(transaction);
      const _updatedAccount = accountSvc.addTransactionIdToAccount(
        updatedAccount,
        transactionId
      );
      accountRepo.updateAccount(_updatedAccount);
      setAccount(updatedAccount);
      toast.success("Deposit Successful");
    },
    change: (event) => {
      const val =
        event.target.name === "amount"
          ? parseFloat(event.target.value)
          : event.target.value;

      const updatedDeposit = {
        ...deposit,
        [event.target.name]: val,
      };
      setDeposit(updatedDeposit);
    },
  };

  const withdrawalHandlers = {
    click: () => {
      setAction(actions.WITHDRAWAL);
      setShowModal(true);
    },
    submit: (event) => {
      event.preventDefault();
      let balance = account.balanceAmount - parseFloat(withdrawal.amount);
      const updatedAccount = {
        ...account,
        balanceAmount: balance,
      };

      const transaction = transactionSvc.createTransaction(
        actions.WITHDRAWAL,
        withdrawal.amount,
        withdrawal.note
      );
      const transactionId = transactionRepo.saveTransaction(transaction);
      const _updatedAccount = accountSvc.addTransactionIdToAccount(
        updatedAccount,
        transactionId
      );
      accountRepo.updateAccount(_updatedAccount);
      setAccount(updatedAccount);
      toast.success("Withdrawal Successful");
    },
    change: (event) => {
      const val =
        event.target.name === "amount"
          ? parseFloat(event.target.value)
          : event.target.value;

      const updatedWithdrawal = {
        ...withdrawal,
        [event.target.name]: val,
      };
      setWithdrawal(updatedWithdrawal);
    },
  };

  const transactionsHandlers = {
    click: () => {
      setAction(actions.TRANSACTIONS);
      setShowModal(true);
    },
  }

  const modalHandlers = {
    close: () => {
      setShowModal(false);
    },
  };

  return (
    <>
      <h1>Account Dashboard</h1>
      <AccountDashboard
        action={action}
        account={account}
        deposit={deposit}
        withdrawal={withdrawal}
        send={send}
        depositHandlers={depositHandlers}
        withdrawalHandlers={withdrawalHandlers}
        sendHandlers={sendHandlers}
        transactionsHandlers={transactionsHandlers}
        modalHandlers={modalHandlers}
        showModal={showModal}
      />
    </>
  );
}

export default AccountDashboardPage;
