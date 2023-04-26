// Importing User Model
const { User } = require("../models/userModel");

// Register Controller
const registerController = async (req, res) => {
    try {
        const { firstName, lastName, email, password, location } = req.body;

        // Input Fields Verification
        if (!firstName) return res.status(400).json("First Name Is Required!");
        if (!lastName) return res.status(400).json("Last Name Is Required!");
        if (!email) return res.status(400).json("Email Is Required!");
        if (!password) return res.status(400).json("Password Is Required!");

        // Check If User Already Exists
        const userExist = await User.findOne({ email: email });
        if (userExist)
            return res.status(200).json({
                success: false,
                message: "Email ALready Exists Please Login!",
            });

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
    } catch (error) {
        console.log(error.message.red);
        res.status(400).json({ message: error.message });
    }
};

const loginController = async (req, res) => {};

module.exports = { registerController, loginController };
