// Importing Packages
require("dotenv").config();
require("colors");
const express = require("express");
const { dbConnect } = require("./config/db");
const { testRouter } = require("./routes/testRoutes");

// Database Connection
dbConnect();

// Initializing Variables
const PORT = process.env.PORT;

// REST Object
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/test", testRouter);

// Intializing Server
app.listen(PORT, (req, res) =>
    console.log(
        `Server Running In ${process.env.DEV_MODE} At Port ${PORT}`.white
    )
);
