const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.partName} {props.nbOfExercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part partName={props.partName1} nbOfExercises={props.nbOfExercises1} />
      <Part partName={props.partName2} nbOfExercises={props.nbOfExercises2} />
      <Part partName={props.partName3} nbOfExercises={props.nbOfExercises3} />
    </div>
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
      <Content
        partName1={part1}
        partName2={part2}
        partName3={part3}
        nbOfExercises1={exercises1}
        nbOfExercises2={exercises2}
        nbOfExercises3={exercises3}
      />
      <Total
        text="Number of exercises "
        total={exercises1 + exercises2 + exercises3}
      />
    </div>
  );
};

export default App;
