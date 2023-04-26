// Importing Packages
const express = require("express");
const { testController } = require("../controllers/testController");

// Initialising Router Object
const testRoute = express.Router();

// Test-Post Route
testRoute.post("/test-post", testController);

// Exporting Route
module.exports = { testRoute };
