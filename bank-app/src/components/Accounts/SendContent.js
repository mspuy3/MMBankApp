import React from "react";
import AccountNumberInput from "../common/AccountNumberInput";
import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";

function SendContent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className='row mb-2'>
        <div className='col'>
          <AccountNumberInput
            id='partner'
            label='Receiver'
            min='10000000'
            max='999999999'
            name='partner'
            value={props.send.partner || ""}
            onChange={props.handleChange}
            // error={props.errors.accountNumber}
          />
        </div>
      </div>

      <div className='row mb-2'>
        <div className='col'>
          <NumberInput
            id='amount'
            label='Send Amount'
            min='500'
            max={props.account.balanceAmount}
            name='amount'
            value={props.send.amount || ""}
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
            value={props.send.note || ""}
            onChange={props.handleChange}
            // error={props.errors.accountNumber}
          />
        </div>
      </div>

      <div className='row text-center mt-3'>
        <div className='col'>
          <input type='submit' value='Send' className='btn btn-primary w-100' />
        </div>
      </div>
    </form>
  );
}

export default SendContent;
