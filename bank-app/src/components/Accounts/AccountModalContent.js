import React from "react";
import actions from "./actions";
import DepositContent from "./DepositContent";
import WithdrawalContent from "./WithdrawalContent";
import SendContent from "./SendContent";
import TransactionsContent from "./TransactionsContent";
import BudgetAppContent from "./BudgetAppContent";

function AccountModalContent(props) {
  function renderAction() {
    switch (props.action) {
      case actions.DEPOSIT:
        return (
          <DepositContent
            account={props.account}
            handleSubmit={props.depositHandlers.submit}
            handleChange={props.depositHandlers.change}
            deposit={props.deposit}
          />
        );
      case actions.WITHDRAWAL:
        return (
          <WithdrawalContent
            account={props.account}
            handleSubmit={props.withdrawalHandlers.submit}
            handleChange={props.withdrawalHandlers.change}
            withdrawal={props.withdrawal}
          />
        );
      case actions.SEND:
        return (
          <SendContent
            account={props.account}
            partner={props.partner}
            handleSubmit={props.sendHandlers.submit}
            handleChange={props.sendHandlers.change}
            send={props.send}
          />
        );
      case actions.TRANSACTIONS:
        return <TransactionsContent account={props.account} />;
      case actions.BUDGET:
        return (
          <BudgetAppContent
            expense={props.expense}
            expenses={props.expenses}
            budgetBalance={props.budgetBalance}
            handleSubmit={props.budgetAppHandlers.submit}
            handleChange={props.budgetAppHandlers.change}
            handleDelete={props.budgetAppHandlers.delete}
          />
        );
      default:
    }
  }

  return (
    <>
      <button onClick={props.modalHandlers.close}>Close Modal</button>
      <h1>{props.action}</h1>
      {renderAction()}
    </>
  );
}

export default AccountModalContent;
