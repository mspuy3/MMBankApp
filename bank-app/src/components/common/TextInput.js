import React from "react";

function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type='text'
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <div>{props.error}</div>}
    </div>
  );
}

export default TextInput;
