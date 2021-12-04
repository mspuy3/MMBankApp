import React from "react";

function PasswordInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type='password'
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <div>{props.error}</div>}
    </div>
  );
}

export default PasswordInput;
