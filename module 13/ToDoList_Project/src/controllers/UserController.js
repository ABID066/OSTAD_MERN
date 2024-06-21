const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const SendEmailUtility = require("../utility/EmailSend");
const otpModel = require("../models/otpModel");

exports.registration = async (req, res) => {
    try {
        let reqBody = req.body;
        await UserModel.create(reqBody);
        res.json({ status: "success", message: "Registration Complete" });
    } catch (err) {
        console.error(err);
        res.json({ status: "fail", message: err.toString() });
    }
};

exports.login = async (req, res) => {
    try {
        let reqBody = req.body;
        let user = await UserModel.find(reqBody);
        if (user.length > 0) {
            // JWT Token
            let Payload = { exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                data: reqBody['email'] };
            let token = jwt.sign(Payload, "123-xyz");
            res.json({ status: "success", message: "User Found", token: token });
        } else {
            res.json({ status: "fail", message: "No User Found" });
        }
    } catch (err) {
        console.error(err);
        res.json({ status: "fail", message: err.toString() });
    }
};

exports.profileUpdate = async (req, res) => {
    try {
        let email = req.headers['email'];
        let reqBody = req.body;
        await UserModel.updateOne({ email: email }, reqBody);
        res.json({ status: "success", message: "Updated" });
    } catch (err) {
        console.error(err);
        res.json({ status: "fail", message: err.toString() });
    }
};

exports.profileDetails = async (req, res) => {
    try {
        let email = req.headers['email'];
        let result = await UserModel.find({ email: email });
        if (!result || result.length === 0) {
            return res.json({ status: "fail", message: "No user found with the provided email" });
        }
        res.json({ status: "success", data: result });
    } catch (err) {
        console.error(err);
        res.json({ status: "fail", message: err.toString() });
    }
};

exports.verifyEmail = async (req, res) => {
    try {
        const { email } = req.params;
        let user = await UserModel.findOne({ email: email });
        if (user) {
            // Send Email
            let otp = Math.floor(100000 + Math.random() * 900000);
            await SendEmailUtility(email, `Your Pin = ${otp}`, "MERN 5 Task Manager Code");
            await otpModel.create({ email: email, otp: otp, status: 'active' });
            res.json({ status: "success", message: "Verification code has been sent" });
        } else {
            res.json({ status: "fail in if", message: "No User Found" });
        }
    } catch (err) {
        console.error(err);
        res.json({ status: "fail in over all try", message: err.toString() });
    }
};

exports.verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.params;
        let user = await UserModel.find({ email: email, otp: otp, status: 'active'});
        if (user) {
            await otpModel.updateOne({ email: email, otp: otp},{status: 'verified' });
            res.json({ status: "success", message: "Code Verification success" });
        } else {
            res.json({ status: "fail in if", message: "Invalid Code" });
        }
    } catch (err) {
        console.error(err);
        res.json({ status: "fail in over all try", message: err.toString() });
    }
};

exports.passwordReset = async (req, res) => {
    try {
        const { email, password } = req.params;
        let otpRecord = await otpModel.findOne({ email: email, status: 'verified' });

        if (otpRecord) {
            await otpModel.deleteOne({ email: email});
            await UserModel.updateOne({ email: email }, { password: password });

            res.json({ status: "success", message: "Password changed successfully" });
        } else {
            res.json({ status: "fail", message: "Invalid OTP or email" });
        }
    } catch (err) {
        console.error(err);
        res.json({ status: "fail", message: err.toString() });
    }
};
