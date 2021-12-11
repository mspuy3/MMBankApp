import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import AccountModalContent from "./AccountModalContent";

function AccountDashboard(props) {
  const manageAccountLink = `../accounts/manage-account/${props.account.id}`;

  return (
    <div className='row abs-center w-75'>
      <div className='col'>
        <div className='row mb-5'>
          <div className='col'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Account Number:</h5>
                <p class='card-text fw-bold fs-1 text-end'>
                  {props.account.accountNumber}
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Account Name:</h5>
                <p class='card-text fw-bold fs-1 text-end'>
                  {props.account.accountName}
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Account Holder:</h5>
                <p class='card-text fw-bold fs-1 text-end'>
                  {props.account.accountHolder.firstName}{" "}
                  {props.account.accountHolder.middleName}{" "}
                  {props.account.accountHolder.lastName}
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Balance:</h5>
                <p class='card-text fw-bold fs-1 text-end'>
                  {props.account.balanceAmount}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row h-75'>
          <div className='col'>
            <Link to={manageAccountLink}>
              <button className='btn btn-primary w-100 h-50'>
                Update Account
              </button>
            </Link>
          </div>
          <div className='col'>
            <button
              className='btn btn-primary w-100 h-50'
              onClick={props.depositHandlers.click}
            >
              Deposit
            </button>
          </div>
          <div className='col'>
            <button
              className='btn btn-primary w-100 h-50'
              onClick={props.withdrawalHandlers.click}
            >
              Withdraw
            </button>
          </div>
          <div className='col'>
            <button
              className='btn btn-primary w-100 h-50'
              onClick={props.sendHandlers.click}
            >
              Send
            </button>
          </div>
          <div className='col'>
            <button
              className='btn btn-primary w-100 h-50'
              onClick={props.transactionsHandlers.click}
            >
              Transactions
            </button>
          </div>
        </div>

        <div className='row w-100 h-50'>
          <div className='col text-center'>
            <button
              className='btn btn-success w-50 h-50'
              onClick={props.budgetAppHandlers.click}
            >
              Budget App
            </button>
          </div>
        </div>

        <div>
          <Modal isOpen={props.showModal}>
            <AccountModalContent
              handleCloseModal={props.handleCloseModal}
              action={props.action}
              account={props.account}
              deposit={props.deposit}
              withdrawal={props.withdrawal}
              partner={props.partner}
              send={props.send}
              expense={props.expense}
              expenses={props.expenses}
              depositHandlers={props.depositHandlers}
              withdrawalHandlers={props.withdrawalHandlers}
              sendHandlers={props.sendHandlers}
              transactionsHandlers={props.transactionsHandlers}
              budgetAppHandlers={props.budgetAppHandlers}
              budgetBalance={props.budgetBalance}
              modalHandlers={props.modalHandlers}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default AccountDashboard;
