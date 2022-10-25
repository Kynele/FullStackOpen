const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.static("build"));
app.use(cors());
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
  response.json(persons);
});

app.get("/info", (request, response) => {
  const nb = persons.length;
  const date = new Date();
  response.send(`<div>Phonebook has info for ${nb} people<div><div>${date}`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (!person) {
    response
      .status(404)
      .json({ error: `Couldn't find person whose id is ${id}` });
  }
  response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (!person) {
    response
      .status(404)
      .json({ error: `Couldn't find person whose id is ${id}` });
  }
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const generateId = () => {
  const maxId = Math.max(...persons.map((p) => p.id));
  return Math.floor(Math.random() * (1000 - maxId) + maxId);
};

app.post("/api/persons", (request, response) => {
  if (!request.body.name) {
    return response.status(404).json({ error: "Name missing" });
  } else if (!request.body.number) {
    return response.status(404).json({ error: "Number missing" });
  }
  const existingName = persons.find(
    (person) => person.name === request.body.name
  );
  if (existingName) {
    return response.status(404).json({ error: `Name must be unique` });
  }
  const person = {
    id: generateId(),
    name: request.body.name,
    number: request.body.number,
  };
  persons = persons.concat(person);
  response.json(person);
});

const PORT = process.env.PORT || 3001;

const unknownEndpoint = (request, reponse) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
