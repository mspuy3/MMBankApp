import React from "react";
import actions from "./actions";
import DepositContent from "./DepositContent";

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
