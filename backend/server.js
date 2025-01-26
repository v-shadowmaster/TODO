const express = require("express");
const cors = require("cors");

// mongodb connect file
const connectDB = require("./mongodb");
const todoRoute = require("./routes/todoRoute");

const app = express();
app.use(express.json());
app.use(cors());

// intializing the connection
connectDB();

app.use("/api", todoRoute);

app.listen("3000", () => console.log(`server started`));
