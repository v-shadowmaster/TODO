const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notesRoute = require("./routes/notes.route");

mongoose
  .connect("mongodb://localhost:27017/notes", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const app = express();

app.use(express.json());

app.use("/notes", notesRoute);

app.listen(8000, () => console.log("server started"));
