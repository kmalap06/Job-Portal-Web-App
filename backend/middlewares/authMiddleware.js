// Importing Package
const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");

// Authentication Middleware
const userAuthentication = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer"))
        return next({ message: "Authentication Failed!" });

    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        userDetails = await User.findById({ _id: payload.userId });
        req.user = userDetails;
        next();
    } catch (error) {
        next({ message: "Authentication Failed!" });
    }
};

module.exports = { userAuthentication };
