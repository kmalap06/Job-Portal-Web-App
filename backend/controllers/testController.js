// Test-Controller
const testController = (req, res) => {
    try {
        const { name } = req.body;
        res.status(200).send("Test Controller Working Properly.");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { testController };
