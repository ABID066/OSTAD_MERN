const UserDetailsService = async (req, DataModel) => {
    let email = req.headers["email"];

    try {
        let data = await DataModel.findOne({ email: email }).select("email firstName lastName mobile photo");
        return { status: "success", result: data };
    } catch (err) {
       return { status: "fail", message: err.toString() };
    }
};

module.exports = UserDetailsService;