const { UserRegistrationAsOTPService, UserLoginVerifyService,
    CreateUpdateUserProfileService, ReadUserProfileService
} = require("../services/UserServices");

exports.UserRegistrationAsOTP = async (req, res) => {
    let result = await UserRegistrationAsOTPService(req);
    return res.status(200).json(result);
};


//as Verify&Login
exports.UserLoginVerify = async (req, res) => {
    let result = await UserLoginVerifyService(req);
    if(result["status"] === "success") {

        //cookies option
        let cookieOption = {
            expires: new Date(Date.now() + 3600 * 60 * 1000 * 24),
            httpOnly: true,  // Prevents client-side JavaScript access
            secure: true,  // Ensures cookie is sent only over HTTPS
            sameSite: "Strict" // Prevents CSRF attacks
        };


        //set cookies with option
        res.cookie("token", result["token"], cookieOption);

        return res.status(200).json(result);
    } else {
        return res.status(200).json(result);
    }
}

//as ReadProfile
exports.ReadUserProfile = async (req, res) => {
    let result = await ReadUserProfileService(req);
    return res.status(200).json(result);
}

//as Update & Create Profile
exports.UpdateUserProfile = async (req, res) => {
    let result = await CreateUpdateUserProfileService(req);
    return res.status(200).json(result);
}
exports.CreateUserProfile = async (req, res) => {
    let result = await CreateUpdateUserProfileService(req);
    return res.status(200).json(result);
}

//as UserLogout
exports.UserLogout = async (req, res) => {
    let cookieOption = {
        expires: new Date(Date.now() - 3600 * 60 * 1000 * 24),
    }
    res.cookie("token","", cookieOption);
    return res.status(200).json({status:"success"});
}
