import { useEffect, useState } from "react";
import Person from "./component/Person";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import personService from "./services/person";
import Notification from "./component/Notification";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newtextFilter, setNewTextFilter] = useState("");
  const [failureMessage, setFailureMessage] = useState(null);
  const [sucessMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

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
      let duplicatePerson = persons.find((person) => person.name === newName);
      const updatedPerson = {
        name: newName,
        number: newNumber,
      };
      personService
        .update(duplicatePerson.id, updatedPerson)
        .then((updatedPerson) => {
          setPersons(
            persons.map((person) =>
              person.name !== updatedPerson.name ? person : updatedPerson
            )
          );
          setSuccessMessage(
            `${updatedPerson.name}'s number was successfully updtaed`
          );
          setTimeout(() => setSuccessMessage(null), 5000);
        })
        .catch((err) => {
          setFailureMessage(
            `${updatedPerson.name} was already removed from server`
          );
          console.log(err);
          setTimeout(setFailureMessage(null), 5000);
        });
    } else if (numberIncluded(persons, newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      personService.create(newPerson).then((personCreated) => {
        setPersons(persons.concat(personCreated));
        setSuccessMessage(
          `${newPerson.name}'s number was successfully added to the phonebook`
        );
        setTimeout(() => setSuccessMessage(null), 5000);
      });

      setNewName("");
      setNewNumber("");
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
  const remove = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .remove(id)
        .then(() =>
          setPersons(persons.filter((person) => person.name !== name))
        )
        .catch((err) => {
          setFailureMessage(`${name} was already removed from server`);
          console.log(err);
          setTimeout(setFailureMessage(null), 5000);
        });
    }
  };

  return (
    <div>
      <Filter inputValue={newtextFilter} inputOnChange={setTextFilter}></Filter>
      <h2>Phonebook</h2>
      <Notification
        successMessage={sucessMessage}
        failureMessage={failureMessage}
      ></Notification>
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
            id={person.id}
            buttonAction={() => remove(person.id, person.name)}
          ></Person>
        ))}
      </ul>
    </div>
  );
};

export default App;
