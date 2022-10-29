const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");
const { default: mongoose } = require("mongoose");

app.use(cors());
app.use(express.static("build"));
let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
app.use(express.json());

morgan.token("body", (request, response) =>
  request.method === "POST" ? JSON.stringify(request.body) : ""
);

app.use(
  morgan(function (tokens, request, response) {
    return [
      tokens.method(request, response),
      tokens.url(request, response),
      tokens.status(request, response),
      tokens.res(request, response, "content-length"),
      "-",
      tokens["response-time"](request, response),
      "ms",
    ].join(" ");
  })
);

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});
app.get("/api/persons", (request, response) => {
  Person.find({}).then((peopleFound) => response.json(peopleFound));
});

app.get("/info", (request, response) => {
  const nb = persons.length;
  const date = new Date();
  response.send(`<div>Phonebook has info for ${nb} people<div><div>${date}`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  Person.findById(id).then((peopleFound) => response.json(peopleFound));
});

app.delete("/api/persons/:id", (request, response) => {
  Person.findByIdAndDelete(request.params.id)
    .then((result) => response.status(204).end())
    .catch((err) => next(err));
});

const generateId = () => {
  const maxId = Math.max(...persons.map((p) => p.id));
  return Math.floor(Math.random() * (1000 - maxId) + maxId);
};

const duplicateNumber = async (personNumber) => {
  try {
    const p = await Person.findOne({ number: personNumber });
    if (p) {
      return true;
    }
    return false;
  } catch (e) {
    console.log(e);
    return true;
  }
};

app.post("/api/persons", async (request, response, next) => {
  const body = request.body;
  if (!body) {
    return response.status(404).json({ error: "Empty body" });
  }
  if (!body.name) {
    return response.status(404).json({ error: "No name provided" });
  }
  if (!body.number) {
    return response.status(404).json({ error: "No number provided" });
  }
  const isDuplicateNumber = await duplicateNumber(body.number);
  if (isDuplicateNumber) {
    return response.status(404).json({ error: "Duplicate number" });
  } else {
    const person = new Person({
      name: body.name,
      number: body.number,
    });
    try {
      await person.save();
      response.status(201).json(person);
    } catch (e) {
      next(e);
    }
  }
});

app.put("/api/persons/:id", (request, response) => {
  console.log(request.body);
  const body = request.body;
  if (!body) {
    return response.status(404).json({ error: "Empty body" });
  }
  if (!body.name) {
    return response.status(404).json({ error: "No name provided" });
  }
  if (!body.number) {
    return response.status(404).json({ error: "No number provided" });
  }
  const newPerson = {
    name: body.name,
    number: body.number,
  };
  Person.findByIdAndUpdate(request.params.id, newPerson, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((e) => next(e));
});

const PORT = process.env.PORT || 3001;

// const unknownEndpoint = (request, reponse) => {
//   response.status(404).send({ error: "unknown endpoint" });
// };

// app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
