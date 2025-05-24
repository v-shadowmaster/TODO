const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */

router.post("/register", register);

/**
 * @desc    Log in an existing user
 * @route   POST /api/auth/login
 * @access  Public
 */

router.post('/login', login);

module.exports = router;