import React from "react";
import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";

function DepositContent(props) {
  return (
    <form onSubmit={props.handleSubmit} className='abs-center'>
      <div className='row mb-2'>
        <div className='col'>
          <NumberInput
            id='amount'
            label='Deposit Amount'
            min='500'
            max='99999'
            name='amount'
            value={props.deposit.amount || ""}
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
            value={props.deposit.note || ""}
            onChange={props.handleChange}
            // error={props.errors.accountNumber}
          />
        </div>
      </div>

      <div className='row text-center mt-3'>
        <div className='col'>
          <input
            type='submit'
            value='Deposit'
            className='btn btn-primary w-100'
          />
        </div>
      </div>
    </form>
  );
}

export default DepositContent;
