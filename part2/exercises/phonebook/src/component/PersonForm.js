import React from "react";
import Input from "./Input";

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <Input
        inputValue={props.newName}
        inputOnChange={props.setName}
        text={props.text1}
      />
      <Input
        inputValue={props.newNumber}
        inputOnChange={props.setNumber}
        text={props.text2}
      />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
