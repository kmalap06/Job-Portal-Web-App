// Importing Packages
require("dotenv").config();
require("colors");
const express = require("express");

// Initializing Variables
const PORT = process.env.PORT;

// REST Object
const app = express();

// Routes
app.get("/", (req, res) => {
    res.send("Welcome To My Job Portal!");
});

// Intializing Server
app.listen(PORT, (req, res) =>
    console.log(
        `Server Running In ${process.env.DEV_MODE} At Port ${PORT}`.white
    )
);
