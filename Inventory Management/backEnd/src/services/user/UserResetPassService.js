const bcrypt = require("bcrypt");

const UserResetPassService = async (req, DataModel, OTPModel) => {

    try {
        let { email, otp, password } = req.body;

        let otpRecord = await OTPModel.findOne({email, otp, status: 1})

        if (!otpRecord) {
            return { status: "fail", message: "Invalid or expired OTP" };
        }

        // Hash new password
        const saltRounds = 14;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Update user password
        await DataModel.updateOne({ email }, { password: hashedPassword });

        // Delete OTP after successful password reset
        await OTPModel.deleteOne({ email });

        return { status: "success", message: "Password changed successfully" };
    } catch (err) {
        return { status: "fail", message: err.toString() };
    }
};

module.exports = UserResetPassService;