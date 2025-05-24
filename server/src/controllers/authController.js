const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (request, response) => {
    try {
        const { name, email, password } = request.body;

        // validate required fields
        if (!name || !email || !password) {
            return response.status(400).json({
                success: false,
                error: "please provide name , email and password"
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return response.status(409).json({
                success: false,
                error: 'Email is already registered'
            })
        }

        // Create new user (password hashing handled in User model pre-save hook)
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password,

        })

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );

        // send response
        response.status(201).json({
            success: true,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                token
            }
        })
    } catch (error) {
        console.error('Registration error:', error);
        next(error);
    }
}


const login = async (request, response, next) => {
    try {
        const { email, password } = request.body;

        // Validate required fields
        if (!email || !password) {
            return response.status(400).json({
                success: false,
                error: 'Please provide email and password'
            });
        }

        // Find user by email
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return response.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return response.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );

        // Send response
        response.status(200).json({
            success: true,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                token
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        // Use correct response object
        return response.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
};



module.exports = { register, login };