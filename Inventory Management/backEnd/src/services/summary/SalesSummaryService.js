const SalesModel = require("../../models/Sales/SalesModel");

const SalesSummaryService = async (req) => {
    try {
        let email = req.headers["email"];

        let data = await SalesModel.aggregate([
            {$match: {email: email}},
            {
                $facet: {
                    Total: [{
                        $group:{
                            _id: null,
                            TotalAmount:{$sum:"$grandTotal"}
                        }
                    },{
                        $project: {
                            _id: 0,
                            TotalAmount: { $ifNull: ["$TotalAmount", 0] } // ✅ Ensures a result even if empty
                        }
                    }],
                    Last30Days: [
                        {$group:{
                                _id:{$dateToString: {format: "%Y-%m-%d", date: "$createdAt"}},
                                TotalAmount:{$sum:"$grandTotal"}
                            }},
                        {$sort: {_id:-1}},
                        {$limit: 30}
                    ]
                }
            }
        ])
        return {status: "success", data: data};
    } catch (e) {
        return {status: "error", error: e.toString()};
    }
}

module.exports = SalesSummaryService