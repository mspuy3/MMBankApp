import React from "react";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className='row mb-2'>
        <div className='col'>
          <TextInput
            id='username'
            label='Username'
            name='username'
            value={props.user.username || ""}
            onChange={props.onChange}
            error={props.errors.username}
          />
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col'>
          <PasswordInput
            id='password'
            label='Password'
            name='password'
            value={props.user.password || ""}
            onChange={props.onChange}
            error={props.errors.password}
          />
        </div>
      </div>

      <div className='row mb-3 '>
        <div className='col text-center'>
          <input
            type='submit'
            value='Login'
            className='btn btn-primary w-100'
          />
        </div>
      </div>

      <div className='row text-center'>
        <div className='col'>
          <Link to='../users/manage-user'>Register</Link>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
