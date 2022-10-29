// const mongoose = require("mongoose");

// All this stuff is for the exercise 3.12, decided to comment it because we now access the database using the MONGO_URI and get and post requests are now handled in index.js

// Checkout ./models/person.js and index.js for all the other exercises

// let newName;
// let newNumber;

// const length = process.argv.length;

// if (length < 3) {
//   console.log(
//     "Please provide the password as an argument: node mongo.js <password>"
//   );
//   process.exit(1);
// } else if (length === 4) {
//   newName = process.argv[3];
// } else if (length === 5) {
//   newName = process.argv[3];
//   newNumber = process.argv[4];
// }

// const password = process.argv[2];

// const url = `mongodb+srv://Kynele:${password}@phonebook.0zi1ky1.mongodb.net/?retryWrites=true&w=majority`;

// const personSchema = new mongoose.Schema({
//   name: String,
//   number: String,
// });

// const Person = mongoose.model("Person", personSchema);

// const connect = async () => {
//   await mongoose
//     .connect(url)
//     .then(console.log("connected"))
//     .catch((e) => console.log(e));
// };

// const findPeople = async () => {
//   await Person.find({}).then((result) =>
//     result.forEach((person) => console.log(`${person.name} ${person.number}`))
//   );
// };

// const createPerson = (personName, personNumber) => {
//   return new Person({
//     name: personName,
//     number: personNumber,
//   });
// };

// const doOperations = () => {
//   connect()
//     .then(() => {
//       if (length === 3) {
//         console.log("phonebook:");
//         return findPeople();
//       } else {
//         const person = createPerson(newName, newNumber);
//         return person.save();
//       }
//     })
//     .then(() => {
//       if (length > 3) {
//         console.log(
//           `${newName} ${newNumber} was successfully added to the phonebook`
//         );
//       }
//       mongoose.connection.close();
//     });
// };

// doOperations();
