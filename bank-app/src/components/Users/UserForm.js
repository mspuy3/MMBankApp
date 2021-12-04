import React from "react";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";

const USER_TYPES = [
  { label: "Admin", value: "admin" },
  { label: "Account Holder", value: "accountHolder" },
];

function UserForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
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

      <SelectInput
        id='userType'
        label='User Type'
        name='userType'
        value={props.user.userType || ""}
        onChange={props.onChange}
        options={USER_TYPES}
        error={props.errors.userType}
      />

      <input type='submit' value='Save' />
    </form>
  );
}

export default UserForm;
