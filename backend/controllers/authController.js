// Importing User Model
const { User } = require("../models/userModel");

// Register Controller
const registerController = async (req, res, next) => {
    const { firstName, lastName, email, password, location } = req.body;

    // Check If User Already Exists
    await User.findOne({ email: email });

    // If User Does Not Exist
    const newUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        location: location,
    });
    return res.status(200).json({
        success: true,
        message: "User Created Successfully!",
        newUser,
    });
};

const loginController = async (req, res) => {};

module.exports = { registerController, loginController };
