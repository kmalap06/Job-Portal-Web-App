// Error Middleware
const errorMiddleware = (error, req, res, next) => {
    const defaultError = {
        statusCode: 500,
        message: error.message,
    };

    // Handling ValidationError
    if (error.name == "ValidationError") {
        defaultError.statusCode = 400;
        defaultError.message = Object.values(error.errors)
            .map((item) => item.message)
            .join(",");
    }

    // Handling Duplicate Key Error
    if (error.code === 11000) {
        defaultError.statusCode = 400;
        defaultError.message = `${Object.keys(
            error.keyValue
        )} Has To Be Unique!`;
    }

    return res
        .status(defaultError.statusCode)
        .json({ message: defaultError.message });
};

module.exports = { errorMiddleware };
