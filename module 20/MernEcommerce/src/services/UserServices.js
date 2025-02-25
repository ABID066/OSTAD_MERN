const EmailSend = require("../utility/EmailHelper");


const UserRegistrationAsOTPService = async (req) => {
    let email = req.params.email;
    let OTP = Math.floor(10000+Math.random()*900000);
    let EmailText = `YOUR VERIFICATION CODE: ${OTP}`
    let EmailSubject = "Email Verification Code"
    await EmailSend(email, EmailText, EmailSubject);

    U

}

const UserLoginService = async (req) => {

}

const UserLoginVerifyService = async (req) => {

}

const UserLogoutService = async (req) => {

}

const ReadUserProfileService = async (req) => {

}

const UpdateUserProfileService = async (req) => {

}


module.exports = {
    UserRegistrationAsOTPService,
    UserLoginService,
    UserLoginVerifyService,
    ReadUserProfileService,
    UpdateUserProfileService,
    UserLogoutService
}
