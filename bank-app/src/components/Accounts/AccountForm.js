import React from "react";
import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";

const CREATE_ACTION = "Create";

function AccountForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        id='accountNumber'
        label='Account Number'
        name='accountNumber'
        value={props.account.accountNumber || ""}
        onChange={props.handleChange}
        error={props.errors.accountNumber}
      />

      <TextInput
        id='accountName'
        label='Account Name'
        name='accountName'
        value={props.account.accountName || ""}
        onChange={props.handleChange}
        error={props.errors.accountName}
      />

      <hr />
      <p>Account Holder</p>

      <TextInput
        id='firstName'
        label='First Name'
        name='firstName'
        value={props.account.accountHolder.firstName || ""}
        onChange={props.handleAccountHolderChange}
        error={props.errors.firstName}
      />

      <TextInput
        id='middleName'
        label='Middle Name'
        name='middleName'
        value={props.account.accountHolder.middleName || ""}
        onChange={props.handleAccountHolderChange}
        error={props.errors.middleName}
      />

      <TextInput
        id='lastName'
        label='Last Name'
        name='lastName'
        value={props.account.accountHolder.lastName || ""}
        onChange={props.handleAccountHolderChange}
        error={props.errors.lastName}
      />

      <hr />
      {props.action === CREATE_ACTION ? (
        <NumberInput
          id='initialDeposit'
          label='Initial Deposit'
          name='balanceAmount'
          min={props.minDeposit}
          max='99999'
          value={props.account.balanceAmount || ""}
          onChange={props.handleChange}
          error={props.errors.balanceAmount}
        />
      ) : (
        ""
      )}

      <input type='submit' value='Save' />
    </form>
  );
}

export default AccountForm;
