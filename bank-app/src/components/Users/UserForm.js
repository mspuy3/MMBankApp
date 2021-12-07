import React from "react";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import { USER_TYPES } from "./constants";

const OPTIONS_USER_TYPES = [
  { label: "Admin", value: "admin" },
  { label: "Account Holder", value: "accountHolder" },
];

function UserForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <SelectInput
        id='userType'
        label='User Type'
        name='userType'
        value={props.user.userType || ""}
        onChange={props.onChange}
        options={OPTIONS_USER_TYPES}
        error={props.errors.userType}
      />

      <TextInput
        id='username'
        label='Username'
        name='username'
        value={props.user.username || ""}
        onChange={props.onChange}
        error={props.errors.username}
      />

      <PasswordInput
        id='password'
        label='Password'
        name='password'
        value={props.user.password || ""}
        onChange={props.onChange}
        error={props.errors.password}
      />

      {props.user.userType === USER_TYPES.ACCOUNT_HOLDER && (
        <TextInput
          id='accountNumber'
          label='Account Number'
          name='accountNumber'
          value={props.user.accountNumber || ""}
          onChange={props.onChange}
          error={props.errors.accountNumber}
        />
      )}

      <input type='submit' value='Save' />
    </form>
  );
}

export default UserForm;
