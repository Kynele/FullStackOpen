import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [value, setValue] = useState(10);
  const setToValue = (newValue) => () => {
    console.log("The new value is", newValue);
    setValue(newValue);
  };
  return (
    <div>
      {value}
      <Button handleClick={setToValue(1000)} text="Thousand"></Button>
      <Button handleClick={setToValue(value + 1)} text="Increment"></Button>
      <Button handleClick={setToValue(0)} text="Reset"></Button>
    </div>
  );
};

export default App;
