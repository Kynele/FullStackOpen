import React from "react";
import Input from "./Input";

const Filter = (props) => {
  return (
    <div>
      <Input
        inputValue={props.inputValue}
        inputOnChange={props.inputOnChange}
        text="Filtering using the name (case insensitive)"
      ></Input>
    </div>
  );
};

export default Filter;
