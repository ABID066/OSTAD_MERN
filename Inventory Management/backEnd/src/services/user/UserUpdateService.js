const bcrypt = require("bcrypt");

const UserUpdateService= async (req, DataModel) => {
    try {
        let email = req.headers["email"];
        let updateData = { ...req.body };

        // If the user is updating their password, hash the new password
        if (updateData.password) {
            const saltRounds = 10;
            updateData.password = await bcrypt.hash(updateData.password, saltRounds);
        }

        let data = await DataModel.updateOne({ email: email }, updateData);
        return { status: "success", message: "Profile updated" , data: data};
    } catch (err) {
        return { status: "fail", message: err.toString() };
    }
};

module.exports = UserUpdateService;