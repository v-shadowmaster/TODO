const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const notesRoutes = require("./routes/notes.route");

app.use("/notes", notesRoutes);

mongoose
  .connect(`mongodb://localhost:27017/notesApp`)
  .then(() =>
    app.listen(8000, () => console.log(`Server started on port 8000`))
  )
  .catch((err) => console.log(err));
