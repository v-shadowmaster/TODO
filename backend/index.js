const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");
const user = require("./models/user.model");
const Note = require("./models/note.module");

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3YTRlODVlOTZhMjI1YmNmYTQ5YTUwMCIsIm5hbWUiOiJ2aW5heSBrdW1hciIsImVtYWlsIjoidmluaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiY3JlYXRlZE9uIjoiMjAyNS0wMi0wNlQxNjo1MDozMC42NzlaIiwiX192IjowfSwiaWF0IjoxNzM5MDgyMjY4LCJleHAiOjE3MzkyOTgyNjh9.9QKzyOBoE4gOuuG3AAltd1XLTPUMKU-52QXk49oq04M

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

  if (userInfo.email == email && userInfo.password == password) {
    const user = { user: userInfo };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "3600m",
    });

    return res.json({
      error: false,
      message: "Login Successful",
      email,
      accessToken,
    });
  } else {
    return res.status(400).json({
      error: true,
      message: "Invalid Crendentials",
    });
  }
});

app.post("/add-note", authenticateToken, async (req, res) => {
  const { title, content, tags } = req.body;
  const { user } = req.user;

  if (!title) {
    return res.status(400).json({ error: true, message: "Title is required" });
  }

  if (!content) {
    return res
      .status(400)
      .json({ error: true, message: "COntent is required" });
  }

  try {
    const note = new Note({
      title,
      content,
      tags: tags || [],
      userId: user._id,
    });

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note added successfully",
    });
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: "NOte not added",
    });
  }
});

app.listen(8000, () => console.log("server started"));
