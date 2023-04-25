// Importing Package
const mongoose = require("mongoose");

// Database Connection Function
const dbConnect = async () => {
    try {
        const MONGO_URL = process.env.MONGO_URL;
        const dbconn = await mongoose.connect(MONGO_URL);
        console.log(`MONGODB Connected: ${dbconn.connection.host}`.green);
    } catch (error) {
        console.log(error.message.red);
    }
};

// Exporting Functions
module.exports = { dbConnect };
