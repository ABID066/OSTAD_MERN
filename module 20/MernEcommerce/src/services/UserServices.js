const EmailSend = require("../utility/EmailHelper");
const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");
const {EncodeToken} = require("../utility/TokenHelper");


const UserRegistrationAsOTPService = async (req) => {
    try {
        let email = req.params.email;
        let OTP = Math.floor(10000+Math.random()*900000);
        await EmailSend(email, OTP);

        await UserModel.updateOne({email: email},{$set:{otp: OTP}}, {upsert:true})
        return {status:"success",message:"6 digit OTP has been sent successfully"};
    } catch (err) {
        return {status:"fail",message:err.message};
    }
}


const UserLoginVerifyService = async (req) => {
    try {
        let email = req.params.email;
        let otp = req.params.otp;

        //user count
        let total = await UserModel.countDocuments({ email: email, otp: otp });
        if(total===1) {

            //user id read
            let user_id = await UserModel.findOne({email: email, otp: otp}).select("_id")

            //user token create
            let token = EncodeToken(email,user_id["_id"].toString())

            //OTP Code Update to 0
            await UserModel.updateOne({email: email}, {$set:{otp:"0"}})
            return {status:"success",message:"valid OTP", token:token};
        } else {
            return {status:"fail",message:"Invalid OTP"};
        }
    } catch (err) {
        return {status:"fail",message:err.message};
    }
}



const ReadUserProfileService = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let data = await ProfileModel.findOne({userID: user_id})
        return {status:"success",data:data};
    } catch (err) {
        return {status:"fail",message:err.message};
    }
}

const CreateUpdateUserProfileService = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let email = req.headers.email;

        let reqBody = req.body;
        reqBody["email"] = email;
        reqBody["user_id"] = user_id;

        await ProfileModel.updateOne({ userID: user_id}, {$set:reqBody}, {upsert:true} )

        return {status:"success",message:"Profile save successfully"};
    } catch (err) {
        return {status:"fail",message:err.message};
    }

}


module.exports = {
    UserRegistrationAsOTPService,
    UserLoginVerifyService,
    ReadUserProfileService,
    CreateUpdateUserProfileService
}
