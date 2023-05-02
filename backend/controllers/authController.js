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

    // Generate Token
    const token = await newUser.createAuthToken();

    return res.status(200).json({
        newUser: {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            location: newUser.location,
        },
        token,
    });
};

const loginController = async (req, res, next) => {
    const { email, password } = req.body;

    // Input Fields Verification
    if (!email) return next("Email Is Required!");
    if (!password) return next("Password Is Required!");

    // Verifying If User Exists Or Not
    const userExist = await User.findOne({ email: email }).select("+password");
    console.log(userExist);
    if (!userExist) return next("Invalid Email Or Password!");

    // Verifying Password
    const isMatch = await userExist.comparePassword(password);
    if (!isMatch) return next("Invalid Email Or Password!");

    // Generating Token
    const token = await userExist.createAuthToken();
    userExist.password = undefined;
    return res.status(200).json({
        userExist,
        token,
    });
};

module.exports = { registerController, loginController };
