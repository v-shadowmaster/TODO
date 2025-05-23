const mongoose = require("mongoose");
require('dotenv').config();

/**
 * Connect to MongoDB using Mongoose.
 * Reads the MONGO_URI environment variable for the connection string.
 * Logs success or error messages.
 */

async function connectDB() {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error(`MONGODB_URI environment variable is not defined`);
        }
        await mongoose.connect(mongoUri)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;