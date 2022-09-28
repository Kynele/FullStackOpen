import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text} {props.additionalText}
    </button>
  );
};

const Stats = (props) => {
  return (
    <div>
      {props.text} {props.number}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlGoodClick = () => {
    setGood(good + 1);
  };
  const handlNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handlBadClick = () => {
    setBad(bad + 1);
  };
  const all = good + neutral + bad;
  const average = (good - bad) / all;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handlGoodClick} text="Good"></Button>
      <Button handleClick={handlNeutralClick} text="Neutral"></Button>
      <Button handleClick={handlBadClick} text="Bad"></Button>
      <h1>Statistics</h1>
      <Stats text="Good:" number={good}></Stats>
      <Stats text="Neutral:" number={neutral}></Stats>
      <Stats text="Bad:" number={bad}></Stats>
      <Stats text="All:" number={all}></Stats>
      <Stats text="Average:" number={average}></Stats>
      <Stats
        text="Positive:"
        number={(good / all) * 100}
        additionalText="%"
      ></Stats>
    </div>
  );
};

export default App;
