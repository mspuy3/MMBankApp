import React from "react";
import AccountNumberInput from "../common/AccountNumberInput";
import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";

function SendContent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      
      <AccountNumberInput
        id='partner'
        label='Receiver Account Number'
        min='10000000'
        max='999999999'
        name='partner'
        value={props.send.partner || ""}
        onChange={props.handleChange}
        // error={props.errors.accountNumber}
      />

      
      <NumberInput
        id='amount'
        label='Send Amount'
        min='500'
        max={props.account.balanceAmount}
        name='amount'
        value={props.send.amount || ""}
        onChange={props.handleChange}
        // error={props.errors.accountNumber}
      />

      <TextInput
        id='note'
        label='Notes'
        name='note'
        value={props.send.note || ""}
        onChange={props.handleChange}
        // error={props.errors.accountNumber}
      />
      <input type='submit' value='Send' />
    </form>
  );
}

export default SendContent;
