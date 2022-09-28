const Header = (props) => {
  console.log(props);
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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header courseName={course} />
      <Content
        partName1={part1["name"]}
        partName2={part2["name"]}
        partName3={part3["name"]}
        nbOfExercises1={part1["exercises"]}
        nbOfExercises2={part1["exercises"]}
        nbOfExercises3={part1["exercises"]}
      />
      <Total
        text="Number of exercises "
        total={part1["exercises"] + part2["exercises"] + part3["exercises"]}
      />
    </div>
  );
};

export default App;
