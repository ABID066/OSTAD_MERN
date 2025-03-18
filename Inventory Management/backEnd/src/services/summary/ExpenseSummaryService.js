const ExpensesModel = require("../../models/Expenses/ExpensesModel");

const ExpenseReportService = async (req) => {
    try {
        let email = req.headers["email"];
        let FromDate = req.body["fromDate"];
        let ToDate = req.body["toDate"];

        let data = await ExpensesModel.aggregate([
            {$match: {email: email, createdAt:{$gte: new Date(FromDate), $lte: new Date(ToDate)}}},
            {
                $facet: {
                    Total: [{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$amount"}
                        }
                    }],
                    Rows:[{
                        $lookup: {from: "expensetypes", localField: "typeID", foreignField: "_id", as: "type"},
                    }]
                }
            }
        ])
        return {status: "success", data: data};
    } catch (e) {
        return {status: "error", error: e.toString()};
    }
}

module.exports = ExpenseReportService;