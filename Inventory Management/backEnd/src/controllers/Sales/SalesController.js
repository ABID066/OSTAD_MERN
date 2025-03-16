const CreateParentChildService = require("../../services/common/CreateParentChildService");
const ParentModel1 = require("../../models/Sales/SalesModel");
const ChildrenModel = require("../../models/Sales/SaleProductsModel");
const ListOneJoinService = require("../../services/common/ListOneJoinService");


exports.CreateSales = async (req, res) => {
    let result= await CreateParentChildService(req, ParentModel1, ChildrenModel, "saleID");
    res.status(200).send(result);
}

exports.SalesList = async (req, res) => {
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options":"i"};
    let JoinStage = {$lookup: {from:"customers", localField: "customerID", foreignField:"_id", as: "customers"}}

    let SearchArray = [{note: SearchRgx},{"customers.customer_name": SearchRgx},{"customers.customer_address": SearchRgx},{"customers.customer_phone": SearchRgx},{"customers.customer_email": SearchRgx}];

    let result = await ListOneJoinService(req,ParentModel1,SearchArray,JoinStage);
    res.status(200).send(result);
}