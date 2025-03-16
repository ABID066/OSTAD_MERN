const CreateParentChildService = require("../../services/common/CreateParentChildService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const ParentModel = require("../../models/Returns/ReturnsModel");
const ChildrenModel = require("../../models/Returns/ReturnProductsModel");

exports.CreateReturns = async (req, res) => {
    let result= await CreateParentChildService(req, ParentModel, ChildrenModel, "returnID");
    res.status(200).send(result);
}

exports.ReturnList = async (req, res) => {
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options":"i"};
    let JoinStage = {$lookup: {from:"customers", localField: "customerID", foreignField:"_id", as: "customers"}}

    let SearchArray = [{note: SearchRgx},{"customers.customer_name": SearchRgx},{"customers.customer_address": SearchRgx},{"customers.customer_phone": SearchRgx},{"customers.customer_email": SearchRgx}];

    let result = await ListOneJoinService(req,ParentModel,SearchArray,JoinStage);
    res.status(200).send(result);
}