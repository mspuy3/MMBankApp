import React from "react";
import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";

function WithdrawalContent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className='row mb-2'>
        <div className='col'>
          <NumberInput
            id='amount'
            label='Withdrawal Amount'
            min='500'
            max={props.account.balanceAmount}
            name='amount'
            value={props.withdrawal.amount || ""}
            onChange={props.handleChange}
            // error={props.errors.accountNumber}
          />
        </div>
      </div>

      <div className='row mb-2'>
        <div className='col'>
          <TextInput
            id='note'
            label='Notes'
            name='note'
            value={props.withdrawal.note || ""}
            onChange={props.handleChange}
            // error={props.errors.accountNumber}
          />
        </div>
      </div>

      <div className='row text-center mt-3'>
        <div className='col'>
          <input
            type='submit'
            value='Withdraw'
            className='btn btn-primary w-100'
          />
        </div>
      </div>
    </form>
  );
}

export default WithdrawalContent;
