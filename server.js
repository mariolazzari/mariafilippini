const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// load enviroment variables
require("dotenv").config();
const { EXPRESS_PORT, EXPRESS_HOST, MONGO_URI, NODE_ENV } = process.env;

// mongoDB connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB connected on ${MONGO_URI}`))
  .catch(err => console.log("Error while connectiong to MongoDB", err));

// create express server
const app = express();

// express middleware
app.use(express.json());

// express routes
app.use("/", require("./routes/test"));

// serve static file assets if in production
if (NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// start express server
app.listen(EXPRESS_PORT, () =>
  console.log(`Express server started on ${EXPRESS_HOST}:${EXPRESS_PORT}`)
);
