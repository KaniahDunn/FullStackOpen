import { useState, useCallback, useEffect } from "react";
import Filter from "./components/Filter";
import DirectoryList from "./components/DirectoryList";
import AddPersonForm from "./components/AddPersonForm";
import axios from "axios";
import contactsService from "./services/contactsService";

const App = () => {
  const [persons, setPersons] = useState([]);
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

  

  useEffect(() => {
    contactsService.getAll().then(persons => {
      setPersons(persons)
    })
  }, []);

 

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
        setErrorMessage("");
      }
    },
    [newName, newPhone, persons] // Dependencies of the callback
  );

  return (
    <div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <h2>Phonebook</h2>
      <Filter searchQuery={searchQuery} onChange={handleSearchQuery} />
      <AddPersonForm
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <DirectoryList persons={persons} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
