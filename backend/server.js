const express = require("express");
const cors = require("cors");

// mongodb connect file
const connectDB = require("./mongodb");

const app = express();
app.use(cors());

// intializing the connection
connectDB();

app.get("/", (request, response) =>
  response.send(`<h1> Welcome to the Home Page </h1>`)
);

app.listen("3000", () => console.log(`server started`));
