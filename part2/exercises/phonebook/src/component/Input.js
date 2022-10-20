import React from "react";

const Input = (props) => {
  return (
    <div>
      {props.text}
      <input value={props.inputValue} onChange={props.inputOnChange} />
    </div>
  );
};

export default Input;
