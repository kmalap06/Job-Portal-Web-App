// Importing Packages
const express = require("express");

// Importing Files
const {
    registerController,
    loginController,
} = require("../controllers/authController");

// Initializing Router Object
const authRoute = express.Router();

// Register API Route
authRoute.post("/register", registerController);

// Login API Route
authRoute.post("/login", loginController);

module.exports = { authRoute };
