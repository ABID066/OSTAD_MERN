const ReturnProductsModel = require("../../models/Returns/ReturnProductsModel");

const ReturnReportService = async (req) => {
    try {
        let email = req.headers["email"];
        let FromDate = req.body["fromDate"];
        let ToDate = req.body["toDate"];

        let data = await ReturnProductsModel.aggregate([
            {$match: {email: email, createdAt:{$gte: new Date(FromDate), $lte: new Date(ToDate)}}},
            {
                $facet: {
                    Total: [{
                        $group:{
                            _id: null,
                            TotalAmount:{$sum:"$total"}
                        }
                    },{
                        $project: {
                            _id: 0,
                            TotalAmount: { $ifNull: ["$TotalAmount", 0] } // ✅ Ensures a result even if empty
                        }
                    }],
                    Rows:[
                        {$lookup: {from: "products", localField: "productID", foreignField: "_id", as: "product"}},
                        {$unwind: "$product"},
                        {$lookup: {from: "brands", localField: "product.brandID", foreignField: "_id", as: "brand"}},
                        {$lookup: {from: "categories", localField: "product.categoryID", foreignField: "_id", as: "category"}},
                        {$unwind: "$brand"},
                        {$unwind: "$category"}
                    ]
                }
            }
        ])
        return {status: "success", data: data};
    } catch (e) {
        return {status: "error", error: e.toString()};
    }
}

module.exports = ReturnReportService;
