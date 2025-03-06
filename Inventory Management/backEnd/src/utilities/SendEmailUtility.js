const nodemailer = require("nodemailer");

const SendEmailUtility = async (email, OTPCode) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Use environment variable
                pass: process.env.EMAIL_PASS  // Use App Password or SMTP password
            },
        });

        let mailHTML = `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
                <h2 style="color: #333;">Inventory OTP Verification</h2>
                <p>Hello,</p>
                <p>Use the following OTP to verify your email address:</p>
                <p style="font-size: 22px; font-weight: bold; color: #d32f2f; background: #f8d7da; padding: 10px; display: inline-block; border-radius: 5px;">
                    ${OTPCode}
                </p>
                <p>This OTP is valid for 10 minutes. Do not share it with anyone.</p>
                <p>If you did not request this, please ignore this email.</p>
                <p style="margin-top: 20px; font-size: 12px; color: #777;">© 2025 Inventory. All Rights Reserved.</p>
            </div>
        `;

        let mailOptions = {
            from: `Inventory <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Inventory OTP Verification",
            html: mailHTML
        };

        let info = await transporter.sendMail(mailOptions);
        return { success: true, message: `Email sent: ${info.response}` };

    } catch (error) {
        console.error("Email Sending Error:", error);
        return { success: false, message: "Email could not be sent." };
    }
};

module.exports = SendEmailUtility;
