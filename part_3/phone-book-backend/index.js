const http = require("http");
const express = require("express");
const app = express();

let contacts = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/contacts", (request, response) => {
  response.json(contacts);
});

app.get("/api/info", (request, response) => {
  const contactsCount = contacts.length;
  const requestTime = new Date().toString();
  response.send(
    `The request was made at ${requestTime} and the total number of contacts is ${contactsCount}`
  );
});

app.get("/api/contacts/:id", (request, response) => {
  const id = request.params.id;
  const contact = contacts.find((contact) => (contact.id = id));
  response.json(contact);
});

app.delete("/api/contacts/:id", (request, response) => {
  const id = request.params.id;
  const contactToDelete = contacts.find((contact) => contact.id === id);

  if (!contactToDelete) {
    return response.status(404).json({ error: "Contact not found" });
  }

  contacts = contacts.filter((contact) => contact.id !== id);

  response.json({
    message: `The contact was deleted from the phone book`,
    deletedContact: contactToDelete,
  });
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
