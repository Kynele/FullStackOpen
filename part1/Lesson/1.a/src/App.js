const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name} you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const age = 30;
  const name = "Josephine";
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Frederic" age="120" />
      <Hello name="Joseph" age="113" />
      <Hello name={name} age={age} />
    </>
  );
};

export default App;
