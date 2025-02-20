import React from "react";

const DirectoryList = ({ persons, searchQuery }) => {
  return (
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
  );
};

export default DirectoryList;
