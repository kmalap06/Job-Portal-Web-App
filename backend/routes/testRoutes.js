// Importing Packages
const express = require("express");
const { testController } = require("../controllers/testController");
const { userAuthentication } = require("../middlewares/authMiddleware");

// Initialising Router Object
const testRoute = express.Router();

// Test-Post Route
testRoute.post("/test-post/", userAuthentication, testController);

// Exporting Route
module.exports = { testRoute };
