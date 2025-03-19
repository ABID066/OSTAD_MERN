const CreateParentChildService = require("../../services/common/CreateParentChildService");
const ParentModel = require("../../models/Purchases/PurchasesModel");
const ChildrenModel = require("../../models/Purchases/PurchaseProductsModel");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const DeleteParentChildService = require("../../services/common/DeleteParentChildService");

exports.CreatePurchases = async (req, res) => {
    let result= await CreateParentChildService(req, ParentModel, ChildrenModel, "purchaseID");
    res.status(200).send(result);
}

exports.PurchasesList = async (req, res) => {
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options":"i"};
    let JoinStage = {$lookup: {from:"suppliers", localField: "supplierID", foreignField:"_id", as: "suppliers"}}

    let SearchArray = [{note: SearchRgx},{"supplier.supplier_name": SearchRgx},{"supplier.supplier_address": SearchRgx},{"supplier.supplier_phone": SearchRgx},{"supplier.supplier_email": SearchRgx}];

    let result = await ListOneJoinService(req,ParentModel,SearchArray,JoinStage);
    res.status(200).send(result);
}

exports.PurchasesDelete = async (req, res) => {
    let result = await DeleteParentChildService(req, ParentModel, ChildrenModel, "purchaseID");
    res.status(200).send(result);
}