const DataModel = require('../../models/UserModel');
const OTPModel = require('../../models/OTPModel');
const UserCreateService = require("../../services/user/UserCreateService");
const UserLoginService = require("../../services/user/UserLoginService");
const UserResetPassService = require("../../services/user/UserResetPassService");
const UserVerifyOtpService = require("../../services/user/UserVerifyOtpService");
const UserVerifyEmailService = require("../../services/user/UserVerifyEmailService");
const UserDetailsService = require("../../services/user/UserDetailsService");
const UserUpdateService = require("../../services/user/UserUpdateService");

exports.Registration = async (req, res) => {
    let result = await UserCreateService(req, DataModel);
    res.status(200).json(result);
}

exports.Login = async (req, res) => {
    let result = await UserLoginService(req, DataModel);
    res.status(200).json(result);
}

exports.ProfileUpdate=async (req, res) => {
    let Result=await UserUpdateService(req,DataModel);
    res.status(200).json(Result);
}

exports.ProfileDetails=async (req, res) => {
    let Result=await UserDetailsService(req,DataModel);
    res.status(200).json(Result);
}


exports.RecoverVerifyEmail=async (req,res)=>{
    let Result=await UserVerifyEmailService(req,DataModel,OTPModel);
    res.status(200).json(Result);
}


exports.RecoverVerifyOTP=async (req,res)=>{
    let Result=await UserVerifyOtpService(req,OTPModel);
    res.status(200).json(Result);
}

exports.RecoverResetPass=async (req,res)=>{
    let Result=await UserResetPassService(req,DataModel,OTPModel);
    res.status(200).json(Result);
}
