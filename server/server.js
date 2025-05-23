// File: server.js 
const app = require("./src/app");
const connectDB = require("./src/config/database")

// Use environment variable PORT or default to 3000
const PORT = process.env.PORT || 8000;

// connection to MongoDB
connectDB();

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))