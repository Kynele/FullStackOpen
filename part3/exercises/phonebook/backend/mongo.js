const mongoose = require("mongoose");

let name;
let number;

const length = process.argv.length;

if (length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
} else if (length === 4) {
  name = process.argv[3];
} else if (length === 5) {
  name = process.argv[3];
  number = process.argv[4];
}

const password = process.argv[2];

const url = `mongodb+srv://Kynele:${password}@phonebook.0zi1ky1.mongodb.net/?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const promise = new Promise((resolve, reject) => resolve());

// mongoose
//   .connect(url)
//   .then((result) => {
//     console.log("Connected");
//     return new Promise((resolve, reject) => {
//       if (length === 3) {
//         Person.find({}).then((result) =>
//           result.forEach((person) => console.log(person))
//         );
//         resolve();
//       } else {
//         const person = new Person({
//           name: name,
//           number: number,
//         });
//         resolve();
//         return person.save();
//       }
//     });
//   })
//   .then(mongoose.connection.close());

// mongoose
//   .connect(url)
//   .then((result) => console.log("Connected"))
//   .then(
//     length == 3
//       ? Person.find({})
//           .then((result) => result.forEach((person) => console.log(person)))
//           .then(mongoose.connection.close())
//       : () => {
//           console.log(`added ${name} ${number} to phonebook`);
//           return person.save();
//         }
//         .then(mongoose.connection.close())
//   )
//   .catch((err) => console.log(err));
