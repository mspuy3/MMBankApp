import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import AccountModalContent from "./AccountModalContent";

function AccountDashboard(props) {
  const manageAccountLink = `../accounts/manage-account/${props.account.id}`;

  return (
    <>
      <div>
        <p>Account Number: {props.account.accountNumber}</p>
        <p>Account Name: {props.account.accountName}</p>
        <p>
          Account Holder: {props.account.accountHolder.firstName}{" "}
          {props.account.accountHolder.middleName}{" "}
          {props.account.accountHolder.lastName}
        </p>
        <p>Balance: {props.account.balanceAmount}</p>
      </div>
      <div>
        <Link to={manageAccountLink}>
          <button>Update Account</button>
        </Link>
        <button onClick={props.depositHandlers.click}>Deposit</button>
        <button onClick={props.withdrawalHandlers.click}>Withdraw</button>
        <button onClick={props.sendHandlers.click}>Send</button>
        <button onClick={props.transactionsHandlers.click}>Transactions</button>

        <Modal isOpen={props.showModal}>
          <AccountModalContent
            handleCloseModal={props.handleCloseModal}
            action={props.action}
            account={props.account}
            deposit={props.deposit}
            withdrawal={props.withdrawal}
            partner={props.partner}
            send={props.send}
            depositHandlers={props.depositHandlers}
            withdrawalHandlers={props.withdrawalHandlers}
            sendHandlers={props.sendHandlers}
            transactionsHandlers={props.transactionsHandlers}
            modalHandlers={props.modalHandlers}
          />
        </Modal>
      </div>
    </>
  );
}

export default AccountDashboard;
