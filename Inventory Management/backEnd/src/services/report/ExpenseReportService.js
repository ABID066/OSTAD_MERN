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
                            _id: null,
                            TotalAmount:{$sum:"$amount"}
                        }
                    },{
                        $project: {
                            _id: 0,
                            TotalAmount: { $ifNull: ["$TotalAmount", 0] } // ✅ Ensures a result even if empty
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