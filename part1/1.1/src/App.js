const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Content = (props) => {
  return (
    <p>
      {props.partName} {props.nbOfExercises}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      {props.text} {props.total}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseName={course} />
      <Content partName={part1} nbOfExercises={exercises1} />
      <Content partName={part2} nbOfExercises={exercises2} />
      <Content partName={part3} nbOfExercises={exercises3} />
      <Total
        text="Number of exercises "
        total={exercises1 + exercises2 + exercises3}
      />
    </div>
  );
};

export default App;
