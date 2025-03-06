

const UserVerifyOtpService = async (req, OTPModel) => {
    try {
        let email = req.params.email;
        let otp = req.params.otp;

        let otpRecord = await OTPModel.findOne({email, otp, status: 0})

        if (otpRecord) {
            await OTPModel.updateOne({ email, otp, status: 0 }, { status: 1 }); // Mark OTP as used
            return { status: "success", message: "OTP Verified" };
        } else {
            return { status: "fail", message: "Invalid OTP Code" };
        }
    } catch (e) {
        return { status: "fail", message: e.toString() };
    }
};

module.exports  = UserVerifyOtpService;