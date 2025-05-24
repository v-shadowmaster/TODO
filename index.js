require('dotenv').config();
const jwt = require('jsonwebtoken');

// The token you want to decode
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODMxNWVlZTU5YTEwZTA2NWM0OTRiNzkiLCJpYXQiOjE3NDgwNzM0OTMsImV4cCI6MTc0ODA3NzA5M30.LHgonqzgV7bBpUhBMFTHLj7YxIoLTZ_hbvzWKlBafbA";

try {
    // Decode the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decodedToken);

    // Print expiration date in human readable format
    console.log('Token expires:', new Date(decodedToken.exp * 1000).toLocaleString());
} catch (error) {
    console.error('Error decoding token:', error.message);
}