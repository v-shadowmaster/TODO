const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");
const user = require("./models/user.model");

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mzg4NjA2MzgsImV4cCI6MTczODg2MjQzOH0.R6IS3nvt7OBzyHbsEMu7XBOGjbN8Yy4_EH_SiEJ_Vvs

dotenv.config();

app.use(express.json());
app.use(cors({ origin: "*" }));

connectDB();

app.get("/", (req, res) => {
  res.send("hi there");
});

app.post("/create-account", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ error: true, message: "Name is required" });
  }

  if (!email) {
    return res.status(400).json({ error: true, message: "Email is required" });
  }
  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });
  }

  const isUser = await user.findOne({
    email: email,
  });

  if (isUser) {
    return res.json({
      error: true,
      message: "user already exists",
    });
  }
  const newUser = new user({
    name,
    email,
    password,
  });

  await newUser.save();

  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });

  return res.json({
    error: false,
    newUser,
    accessToken,
    message: "Account created successfully",
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  const userInfo = await user.findOne({ email: email });

  if (!userInfo) {
    return res.status(400).json({ message: "user not found" });
  }


  if (userInfo.email == email && userInfo.password == password)
  {
    
  }
});

app.listen(8000, () => console.log("server started"));
