// Importing Packages
const express = require("express");
const { testController } = require("../controllers/testController");

// Initialising Router Object
const testRouter = express.Router();

// Test-Post Route
testRouter.post("/test-post", testController);

// Exporting Route
module.exports = { testRouter };
