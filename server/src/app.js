const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();


/*
NOTES : middleware correct order
Typical order:

Security middleware (helmet, cors)
Body parsing (express.json())
Authentication middleware (JWT verification)
Route handlers
Error handling (should be last)

*/

app.use(cors());
app.use(express.json());

// Routers 
const authRoutes = require('./routes/authRoutes');

app.use("/api/auth", authRoutes)


app.get("/api/test", (request, response) => response.json({ message: "api working" }))

module.exports = app;