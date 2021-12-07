import React from "react";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import { USER_TYPES } from "../constants";

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

      {props.loggedInUser.userType === USER_TYPES.ADMIN ||
      props.loggedInUser.userType === USER_TYPES.SUPER_ADMIN ? (
        <>
          <TextInput
            id='firstName'
            label='First Name'
            name='firstName'
            value={props.user.firstName || ""}
            onChange={props.onChange}
            error={props.errors.firstName}
          />

          <TextInput
            id='middleName'
            label='Middle Name'
            name='middleName'
            value={props.user.middleName || ""}
            onChange={props.onChange}
            error={props.errors.middleName}
          />

          <TextInput
            id='lastName'
            label='Last Name'
            name='lastName'
            value={props.user.lastName || ""}
            onChange={props.onChange}
            error={props.errors.lastName}
          />
        </>
      ) : (
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
