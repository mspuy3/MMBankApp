import React from "react";

function SelectInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        id={props.id}
        name={props.name}
        value={props.value}
        className='form-control'
        onChange={props.onChange}
      >
        <option value=''></option>
        {props.options.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
      {props.error && <div>{props.error}</div>}
    </div>
  );
}

export default SelectInput;
