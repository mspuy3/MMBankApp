import React from "react";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";

function LoginForm(props) {
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

      <input type='submit' value='Login' />
    </form>
  );
}

export default LoginForm;
