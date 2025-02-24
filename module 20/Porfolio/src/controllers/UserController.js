const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//registration
exports.UserRegistration = async (req, res) => {
    try {
        let { firstName, lastName, email, mobile, password, photo } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({
            firstName,
            lastName,
            email,
            mobile,
            password: hashedPassword,
            photo
        });

        res.status(200).json({ status: "success", message: "User registration successful" });
    } catch (err) {
        res.status(400).json({status: "fail", message: err.toString()});
    }
}

//login
exports.UserLogin = async (req, res) => {
    try {
        let { email, password } = req.body;

        let user = await UserModel.findOne({ email }).select("email firstName lastName mobile photo password");


        if (!user) {
            return res.status(401).json({ status: "unauthorized", message: "Invalid email" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ status: "unauthorized", message: "Invalid password" });
        }

        // Generate JWT token
        let payload = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // Expires in 1 day
            email: user.email
        };
        let token = jwt.sign(payload, process.env.JWT_SECRET);

        // Remove password before sending response
        const { password: _, ...userData } = user.toObject();

        res.status(200).json({ status: "success", token: token, data: userData });

    } catch (err) {
        res.status(400).json({status: "fail", message: err.message});
    }
}