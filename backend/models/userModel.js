// Importing Packages
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
            select: false,
        },
        location: {
            type: String,
            default: "Not Provided!",
        },
    },
    { timestamps: true }
);

// Hashing Password
userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Comparing Password
userSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
};

// Generating JWT Token
userSchema.methods.createAuthToken = async function () {
    const secretKey = process.env.JWT_SECRET_KEY;
    return await jwt.sign({ userId: this._id }, secretKey, {
        expiresIn: "30d",
    });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
