const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://Kynele:${password}@fullstackopen.dozcelb.mongodb.net/noteApp?retryWrites=true&w=majority`;

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

mongoose.connect(url).then((result) => {
  console.log("connected");
  Note.find({ important: true }).then((result) => {
    result.forEach((note) => {
      console.log(note);
    });
    mongoose.connection.close();
  });
});
//     const note = new Note({
//       content: "Callback functions suck",
//       date: new Date(),
//       important: true,
//     });
//     return note.save();
//   })
//   .then(() => {
//     console.log("Note saved");
//     return mongoose.connection.close();
//   })
//   .catch((err) => console.log(err));
