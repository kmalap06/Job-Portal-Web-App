// Importing Packages
const mongoose = require("mongoose");
const validator = require("validator");

// User Schema
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First Name Is Required!"],
        },
        lastName: {
            type: String,
            required: [true, "Last Name Is Required!"],
        },
        email: {
            type: String,
            required: [true, "Email Is Required!"],
            unique: true,
            validate: validator.isEmail,
        },
        password: {
            type: String,
            required: [true, "Password Is Required!"],
            validate: validator.isStrongPassword,
        },
        location: {
            type: String,
            default: "Not Provided!",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
