// Importing Packages
require("dotenv").config();
require("colors");
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Importing Files
const { dbConnect } = require("./config/db");
const { testRoute } = require("./routes/testRoutes");
const { authRoute } = require("./routes/authRoutes");
const { errorMiddleware } = require("./middlewares/errorMiddleware");

// Database Connection
dbConnect();

// Initializing Variables
const PORT = process.env.PORT;

// REST Object
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/test", testRoute);
app.use("/api/v1/auth", authRoute);

// Validation Middleware
app.use(errorMiddleware);

// Intializing Server
app.listen(PORT, (req, res) =>
    console.log(
        `Server Running In ${process.env.DEV_MODE} At Port ${PORT}`.white
    )
);
