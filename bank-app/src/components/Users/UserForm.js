import React from "react";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import { USER_TYPES } from "../constants";

function UserForm(props) {
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

      <div className='row mb-2'>
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

      {props.loggedInUser.userType === USER_TYPES.ADMIN ||
      props.loggedInUser.userType === USER_TYPES.SUPER_ADMIN ? (
        <>
          <div className='row mb-2'>
            <div className='col'>
              <TextInput
                id='firstName'
                label='First Name'
                name='firstName'
                value={props.user.firstName || ""}
                onChange={props.onChange}
                error={props.errors.firstName}
              />
            </div>
          </div>

          <div className='row mb-2'>
            <div className='col'>
              <TextInput
                id='middleName'
                label='Middle Name'
                name='middleName'
                value={props.user.middleName || ""}
                onChange={props.onChange}
                error={props.errors.middleName}
              />
            </div>
          </div>

          <div className='row mb-2'>
            <div className='col'>
              <TextInput
                id='lastName'
                label='Last Name'
                name='lastName'
                value={props.user.lastName || ""}
                onChange={props.onChange}
                error={props.errors.lastName}
              />
            </div>
          </div>
        </>
      ) : (
        <div className='row mb-2'>
          <div className='col'>
            <TextInput
              id='accountNumber'
              label='Account Number'
              name='accountNumber'
              value={props.user.accountNumber || ""}
              onChange={props.onChange}
              error={props.errors.accountNumber}
            />
          </div>
        </div>
      )}

      <div className='row text-center mt-3'>
        <div className='col'>
          <input type='submit' value='Save' className='btn btn-primary w-100' />
        </div>
      </div>
    </form>
  );
}

export default UserForm;
