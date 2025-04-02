import mongoose from "mongoose";

if (process.argv.length < 3) {
  console.log("Usage:");
  console.log("To list all contacts: node mongo.js <password>");
  console.log("To add a contact: node mongo.js <password> <name> <number>");
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://kaniahresilientdunn:${password}@cluster0.vp8qh.mongodb.net/phoneBook?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Contact = mongoose.model("Contact", contactSchema);

if (process.argv.length === 3) {
  // List all contacts
  Contact.find({}).then((contacts) => {
    console.log("Phonebook:");
    contacts.forEach((contact) => {
      console.log(`${contact.name} ${contact.number}`);
    });
    mongoose.connection.close();
  });
} else if (process.argv.length === 5) {
  // Add a new contact
  const name = process.argv[3];
  const number = process.argv[4];

  const contact = new Contact({ name, number });

  contact.save().then(() => {
    console.log(`Added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
} else {
  console.log("Invalid number of arguments.");
  console.log("Usage:");
  console.log("To list all contacts: node mongo.js <password>");
  console.log("To add a contact: node mongo.js <password> <name> <number>");
  mongoose.connection.close();
}
