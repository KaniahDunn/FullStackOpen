const AddPersonForm = ({
  newName,
  newPhone,
  handleNameChange,
  handlePhoneChange,
  addPerson,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} required />
      </div>
      <div>
        number: <input value={newPhone} onChange={handlePhoneChange} required />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default AddPersonForm;
