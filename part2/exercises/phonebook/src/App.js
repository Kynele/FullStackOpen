import { useEffect, useState } from "react";
import Person from "./component/Person";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newtextFilter, setNewTextFilter] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };
  useEffect(hook, []);

  const nameIncluded = (arr, name) => {
    return arr.some((arrVal) => arrVal.name === name);
  };
  const numberIncluded = (arr, number) => {
    return arr.some((arrVal) => arrVal.number === number);
  };
  const setNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const setTextFilter = (event) => {
    setNewTextFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (nameIncluded(persons, newName)) {
      alert(`${newName} is already added to phonebook`);
    } else if (numberIncluded(persons, newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newPerson));
    }
  };

  const setName = (event) => {
    setNewName(event.target.value);
  };
  const personsFilter = () => {
    return persons.filter((person) => {
      return person.name.toLowerCase().startsWith(newtextFilter.toLowerCase());
    });
  };

  return (
    <div>
      <Filter inputValue={newtextFilter} inputOnChange={setTextFilter}></Filter>
      <h2>Phonebook</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setName={setName}
        newNumber={newNumber}
        setNumber={setNumber}
        text1="Name:"
        text2="Number:"
      ></PersonForm>
      <h2>Numbers</h2>
      <ul>
        {personsFilter().map((person) => (
          <Person
            key={person.name}
            name={person.name}
            number={person.number}
          ></Person>
        ))}
      </ul>
    </div>
  );
};

export default App;
