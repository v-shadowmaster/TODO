const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/notesDB")
  .then(() => console.log("MongoDB connected"))
  .catch(console.error());

app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
