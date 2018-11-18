const { port, url, mongoURI, mongoOptions } = require("./config");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// mongoDB connection
mongoose
  .connect(
    mongoURI,
    mongoOptions
  )
  .then(() => console.log(`MongoDB connected on ${mongoURI}`))
  .catch(err => console.log("Error while connectiong to MongoDB", err));

// create express server
const app = express();

// express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// express routes
app.use("/", require("./routes/test"));

// start express server
app.listen(port, () => console.log(`Server started on ${url}`));
