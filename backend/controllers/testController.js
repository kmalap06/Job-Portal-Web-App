// Test-Controller
const testController = (req, res) => {
    const { name } = req.body;
    // console.log(req.user);
    // console.log(req);
    res.status(200).send("Test Controller Working Properly.");
};

module.exports = { testController };
