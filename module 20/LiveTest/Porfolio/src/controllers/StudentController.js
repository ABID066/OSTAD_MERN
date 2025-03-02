const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");


//registration
exports.UserRegistration = async (req, res) => {
    try {
        let { firstName, lastName, email, mobile, password, photo } = req.body;

         await UserModel.create({
            firstName,
            lastName,
            email,
            mobile,
           password,
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

        let user = await UserModel.findOne({ email
        }).select("email firstName lastName mobile photo password");

        if (!user) {
            return res.status(401).json({ status: "unauthorized", message: "Invalid email" });
        }

        // Generate JWT token
        let payload = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // Expires in 1 day
            email: user.email
        };
        let token = jwt.sign(payload, process.env.JWT_SECRET);

        // Set token in cookies
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000 // Cookie expiry (1 day)
        });

        // Remove password before sending response
        const { password: _, ...userData } = user.toObject();

        res.status(200).json({ status: "success", token: token, data: userData });

    } catch (err) {
        res.status(400).json({ status: "fail", message: err.message });
    }
};



//Update Profile
exports.profileUpdate=async (req,res)=>{
    try {
        let email= req.headers["email"]
        await UserModel.updateOne({email: email},req.body);
        res.json({status:"success",message:"Profile updated"});
    } catch(err) {
        res.json({status:"fail",message:err.toString()});
    }
}

//Get Profile Details
exports.profileDetails = async (req,res)=>{
    let email= req.headers["email"];

    try {
        let data = await UserModel.findOne({email:email})

        res.status(200).json({status:"success",result:data});
    } catch (err) {
        res.status(400).json({status:"fail",message:err.toString()});
    }
}
