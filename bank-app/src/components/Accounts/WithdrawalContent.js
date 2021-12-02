import React from "react";
import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";

function WithdrawalContent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <NumberInput
        id='amount'
        label='Withdrawal Amount'
        min='500'
        max={props.account.balanceAmount}
        name='amount'
        value={props.withdrawal.amount || ""}
        onChange={props.handleChange}
        // error={props.errors.accountNumber}
      />

      <TextInput
        id='note'
        label='Notes'
        name='note'
        value={props.withdrawal.note || ""}
        onChange={props.handleChange}
        // error={props.errors.accountNumber}
      />
      <input type='submit' value='Withdraw' />
    </form>
  );
}

export default WithdrawalContent;
