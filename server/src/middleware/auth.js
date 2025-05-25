const jwt = require("jsonwebtoken");
const User = require("../models/User");

/**
 * @desc    Protect routes - verify JWT and attach user to request
 * @route   Protected (middleware)
 * @access  Private
 */

const auth = async (request, response, next) => {
    let token;

    // Check for Authorization header
    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
        // Get token from header

        token = request.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return response.status(401).json({
            success: false,
            error: 'Not authorized, token missing'
        });
    }

    try {

        // Verify token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Find user by ID and attach to request (exclude password)
        const user = await User.findById(decodedToken.userId).select("-password");

        if (!user) {
            return response.status(401).json({
                success: false,
                error: 'Not authorized, user not found'
            });
        }

        request.user = user;
        next();

    } catch (err) {
        console.error('Auth middleware error:', err);
        return response.status(401).json({
            success: false,
            error: 'Not authorized, token invalid or expired'
        });
    }
}

module.exports = auth;