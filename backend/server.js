const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notesRouter = require("./routes/notes.route");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/notesDB")
  .then(() => console.log("MongoDB connected"))
  .catch(console.error());

app.use(cors());
app.use(express.json());
app.use("/notes", notesRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
