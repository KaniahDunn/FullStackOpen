import { useState, useCallback } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "617-999-9999", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  // Memoize addPerson using useCallback to avoid unnecessary re-renders
  const addPerson = useCallback(
    (event) => {
      event.preventDefault();
      // Check if the name already exists in the directory
      if (persons.some((e) => e.name === newName)) {
        setErrorMessage(`The name ${newName} is already in the directory`);
        setNewName("");
        setNewPhone("");
        return;
      }

      // Add new name and phone number to array if not already in directory
      if (newName && newPhone) {
        setPersons((prevPersons) => [
          ...prevPersons,
          { name: newName, number: newPhone, id: prevPersons.length + 1 },
        ]);
        setNewName("");
        setNewPhone("");
        setErrorMessage(""); // Reset error message after adding person
      }
    },
    [newName, newPhone, persons] // Dependencies of the callback
  );

  return (
    <div>
      {/* Show error message on the UI */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Search: <input value={searchQuery} onChange={handleSearchQuery} />
        </div>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((person) => (
            <li key={person.id}>
              {person.name}: {person.number}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
