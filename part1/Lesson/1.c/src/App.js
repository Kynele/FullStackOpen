import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);
  const increseByOne = () => {
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    setCounter(counter - 1);
  };
  const resetToZero = () => {
    setCounter(0);
  };
  return (
    <div>
      <Display counter={counter}></Display>
      <Button onClick={decreaseByOne} text={"Decrease"}></Button>
      <Button onClick={increseByOne} text={"Plus"}></Button>
      <Button onClick={resetToZero} text={"Reset"}></Button>
    </div>
  );
};

export default App;
