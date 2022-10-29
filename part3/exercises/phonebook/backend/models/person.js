const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI;
console.log("connecting to db");
mongoose
  .connect(url)
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

const personSchema = new mongoose.Schema({
  name: { type: String, minLength: 5, required: true },
  number: { type: String, minLength: 8, required: true },
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = new mongoose.model("Person", personSchema);
