const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");


//registration
exports.UserRegistration = async (req, res) => {
    try {
        let reqBody = req.body;
        await UserModel.create(reqBody);
        res.status(200).json({status: "success", message: "User registration successful"});
    } catch (err) {
        res.status(400).json({status: "fail", message: err.toString()});
    }
}

//login
exports.UserLogin = async (req, res) => {
    try {
        let reqBody = req.body;

        let data = await UserModel.aggregate([
            { $match: reqBody },
            { $project: { _id: 0, email: 1, firstName: 1, lastName: 1, mobile: 1 ,photo: 1} }
        ]);

        if (data.length === 0) {
            return res.status(401).json({ status: "unauthorized" });
        }

        // Generate JWT token
        let payload = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 1-day expiration
            data: data[0]["email"]
        };
        let token = jwt.sign(payload, process.env.JWT_SECRET);

        // Send response
        res.status(200).json({status: "success", token: token, data: data[0]});

    } catch (err) {
        res.status(400).json({status: "fail", message: err.message});
    }
}