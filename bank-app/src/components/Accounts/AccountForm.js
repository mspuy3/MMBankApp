import React from "react";
import TextInput from "../common/TextInput";

function AccountForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        id='accountNumber'
        label='Account Number'
        name='accountNumber'
        value={props.account.accountNumber || ""}
        onChange={props.handleChange}
      />

      <TextInput
        id='accountName'
        label='Account Name'
        name='accountName'
        value={props.account.accountName || ""}
        onChange={props.handleChange}
      />

      <hr />
      <p>Account Holder</p>

      <TextInput
        id='firstName'
        label='First Name'
        name='firstName'
        value={props.account.accountHolder.firstName || ""}
        onChange={props.handleAccountHolderChange}
      />

      <TextInput
        id='middleName'
        label='Middle Name'
        name='middleName'
        value={props.account.accountHolder.middleName || ""}
        onChange={props.handleAccountHolderChange}
      />

      <TextInput
        id='lastName'
        label='Last Name'
        name='lastName'
        value={props.account.accountHolder.lastName || ""}
        onChange={props.handleAccountHolderChange}
      />

      <input type='submit' value='Save' />
    </form>
  );
}

export default AccountForm;
