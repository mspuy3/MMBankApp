import React from "react";

function AccountNumberInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type='number'
        name={props.name}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.onChange}
        placeholder='Enter 8-digit Account Number'
        required
      />
      {props.error && <div>{props.error}</div>}
    </div>
  );
}

export default AccountNumberInput;
