const bcrypt = require("bcrypt");

const UserCreateService = async (req, DataModel) => {
    try {
        let { firstName, lastName, email, mobile, password, photo } = req.body;

        // Hash the password
        const saltRounds = 14;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await DataModel.create({
            firstName,
            lastName,
            email,
            mobile,
            password: hashedPassword, // Store hashed password
            photo
        });

        return { status: "success", message: "User registration successful" };
    } catch (err) {
        return { status: "fail", message: err.toString() };
    }
};

module.exports = UserCreateService;