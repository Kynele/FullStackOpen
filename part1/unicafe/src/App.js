import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.nb} {props.additionalText}
      </td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" nb={props.good}></StatisticLine>
        <StatisticLine text="neutral" nb={props.neutral}></StatisticLine>
        <StatisticLine text="bad" nb={props.bad}></StatisticLine>
        <StatisticLine text="all" nb={props.all}></StatisticLine>
        <StatisticLine text="average" nb={props.average}></StatisticLine>
        <StatisticLine text="positive" nb={props.positive}></StatisticLine>
        <StatisticLine
          text="positive"
          nb={props.positive}
          additionalText="%"
        ></StatisticLine>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  const all = good + neutral + bad;
  const average = ((good - bad) * 100) / all;
  const positive = good / all;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"></Button>
      <Button handleClick={handleNeutralClick} text="neutral"></Button>
      <Button handleClick={handleBadClick} text="bad"></Button>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      ></Statistics>
    </div>
  );
};

export default App;
