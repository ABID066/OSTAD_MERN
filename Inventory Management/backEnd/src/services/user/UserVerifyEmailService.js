const SendEmailUtility = require("../../utilities/SendEmailUtility");

const UserVerifyEmailService = async (req, DataModel, OTPModel) => {
    try {
        let email = req.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000);// Generate 6-digit OTP

        let user = await DataModel.findOne({ email: email });

        if (user) {
            await OTPModel.create({email :email, otp: OTPCode});

            let emailResult = await SendEmailUtility(email, OTPCode);
            return { status: "success", result: emailResult };
        } else {
            return { status: "fail", message: "No User Found" };
        }
    } catch (e) {
        return { status: "fail", message: e.toString() };
    }
};

module.exports  = UserVerifyEmailService;