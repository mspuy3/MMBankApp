import React from "react";

function NumberInput(props) {
  return (
    <div>
      <label className='form-label' htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className='form-control'
        id={props.id}
        type='number'
        name={props.name}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.onChange}
        required
      />
      {props.error && <div>{props.error}</div>}
    </div>
  );
}

export default NumberInput;
