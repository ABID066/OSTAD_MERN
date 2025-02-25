const {UserRegistrationAsOTP} = require("../services/UserServices")


//as UserOTP
exports.UserRegistrationAsOTP = async (req, res) => {
    let result =await UserRegistrationAsOTP(req);
    return res.status(200).json(result);
}

//as UserLogin
exports.UserLogin = async (req, res) => {

}

//as VerifyLogin
exports.UserLoginVerify = async (req, res) => {

}

//as ReadProfile
exports.ReadUserProfile = async (req, res) => {

}

//as UpdateProfile
exports.UpdateUserProfile = async (req, res) => {

}

//as UserLogout
exports.UserLogout = async (req, res) => {

}
