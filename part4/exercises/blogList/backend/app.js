const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const blogRouter = require("./controllers/blog");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(console.log("Connected to MONGODB"))
  .catch((e) => console.log("couldn't connect to the dabatase"));

app.use(cors());
app.use(express.json());
// app.use(express.static('build'))
app.use(middleware.requestLogger);

app.use("/api/blogs", blogRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
