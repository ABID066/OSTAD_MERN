const mongoose = require("mongoose");

const DetailsByIDService = async (req, DataModel) => {
    try {
        let detailsID = req.params.id;
        let email = req.headers["email"];

        if (!mongoose.Types.ObjectId.isValid(detailsID)) {
            return { status: "fail", message: "Invalid ID format" };
        }

        let QueryObj = {
            _id: new mongoose.Types.ObjectId(detailsID),
            email: email
        };

        let data = await DataModel.aggregate([{ $match: QueryObj }]);

        if (data.length === 0) {
            return { status: "fail", message: "No record found" };
        }

        return { status: "success", data: data };
    } catch (e) {
        return { status: "fail", message: e.toString() };
    }
};

module.exports = DetailsByIDService;
