// Importing Packages
const express = require("express");

// REST Object
const app = express();

// Routes
app.get("/", (req, res) => {
    res.send("Welcome To My Job Portal!");
});

// Intializing Server
app.listen(8080, (req, res) => console.log(`Server Connected!`));
