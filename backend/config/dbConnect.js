const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const MONGO_URL = process.env.MONGO_URL;
        const dbconn = await mongoose.connect(MONGO_URL);
        console.log(`MONGODB Connected: ${dbconn.connection.host}`.green);
    } catch (error) {
        console.log(error.message.red);
    }
};

module.exports = { dbConnect };
