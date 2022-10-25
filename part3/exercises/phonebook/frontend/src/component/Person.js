const Person = (props) => {
  return (
    <li>
      {props.name} {props.number}
      <button onClick={props.buttonAction}>Delete</button>
    </li>
  );
};

export default Person;
