const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserLoginService = async (req, DataModel) => {
    try {
        let { email, password } = req.body;

        let user = await DataModel.findOne({ email }).select("email firstName lastName mobile photo password");

        if (!user) {
            return { status: "unauthorized", message: "Invalid email" };
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return { status: "unauthorized", message: "Invalid password" };
        }

        // Generate JWT token
        let payload = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // Expires in 1 day
            email: user.email
        };
        let token = jwt.sign(payload, process.env.JWT_SECRET);

        /*// Set token in cookies
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000 // Cookie expiry (1 day)
        });*/

        // Remove password before sending response
        const { password: _, ...userData } = user.toObject();

        return { status: "success", token: token, data: userData };

    } catch (err) {
        return { status: "fail", message: err.message };
    }
};

module.exports = UserLoginService;