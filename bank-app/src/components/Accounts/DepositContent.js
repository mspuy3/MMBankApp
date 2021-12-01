import React from "react";
import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";

function DepositContent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <NumberInput
        id='amount'
        label='Deposit Amount'
        min='500'
        max='99999'
        name='amount'
        value={props.deposit.amount || ""}
        onChange={props.handleChange}
        // error={props.errors.accountNumber}
      />

      <TextInput
        id='note'
        label='Notes'
        name='note'
        value={props.deposit.note || ""}
        onChange={props.handleChange}
        // error={props.errors.accountNumber}
      />
      <input type='submit' value='Deposit' />
    </form>
  );
}

export default DepositContent;
