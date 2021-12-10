import React from "react";
import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";

const CREATE_ACTION = "Create";

function AccountForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className='row mb-2'>
        <div className='col'>
          <TextInput
            id='accountNumber'
            label='Account Number'
            name='accountNumber'
            value={props.account.accountNumber || ""}
            onChange={props.handleChange}
            error={props.errors.accountNumber}
          />
        </div>
      </div>

      <div className='row mb-2'>
        <div className='col'>
          <TextInput
            id='accountName'
            label='Account Name'
            name='accountName'
            value={props.account.accountName || ""}
            onChange={props.handleChange}
            error={props.errors.accountName}
          />
        </div>
      </div>

      <hr />
      <div className='row mb-2'>
        <div className='col'>
          <p>Account Holder</p>
        </div>
      </div>

      <div className='row mb-2'>
        <div className='col'>
          <TextInput
            id='firstName'
            label='First Name'
            name='firstName'
            value={props.account.accountHolder.firstName || ""}
            onChange={props.handleAccountHolderChange}
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
            value={props.account.accountHolder.middleName || ""}
            onChange={props.handleAccountHolderChange}
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
            value={props.account.accountHolder.lastName || ""}
            onChange={props.handleAccountHolderChange}
            error={props.errors.lastName}
          />
        </div>
      </div>

      <hr />
      {props.action === CREATE_ACTION ? (
        <div className='row mb-2'>
          <div className='col'>
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
          </div>
        </div>
      ) : (
        ""
      )}

      <div className='row text-center mt-3'>
        <div className='col'>
          <input type='submit' value='Save' className='btn btn-primary w-100' />
        </div>
      </div>
    </form>
  );
}

export default AccountForm;
