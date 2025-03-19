const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const DataModel = require("../../models/Products/ProductsModel");
const ListTwoJoinService = require("../../services/common/ListTwoJoinService");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const mongoose = require("mongoose");
const DeleteService = require("../../services/common/DeleteService");
const SaleProductsModel = require("../../models/Sales/SaleProductsModel");
const PurchaseProductsModel = require("../../models/Purchases/PurchaseProductsModel");
const ReturnProductsModel = require("../../models/Returns/ReturnProductsModel");
const DetailsByIDService = require("../../services/common/DetailsByIDService");

exports.CreateProduct = async (req, res) => {
    let result = await CreateService(req, DataModel)
    res.status(200).send(result);
}
exports.UpdateProduct = async (req, res) => {
    let result = await UpdateService(req,DataModel)
    res.status(200).send(result);
}

exports.ProductDetailsByID = async (req, res) => {
    let result = await DetailsByIDService(req,DataModel);
    res.status(200).send(result);
}

exports.ProductList = async (req, res) => {
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options":"i"};

    let JoinStage1 = {$lookup: {from:"brands", localField: "brandID", foreignField:"_id", as: "brands"}}
    let JoinStage2 = {$lookup: {from:"categories", localField: "categoryID", foreignField:"_id", as: "categories"}}

    let SearchArray = [{product_name: SearchRgx},{product_details: SearchRgx},{"brands.brand_name": SearchRgx},{"categories.category_name": SearchRgx}];
    let result = await ListTwoJoinService(req,DataModel,SearchArray,JoinStage1,JoinStage2);
    res.status(200).send(result);
}

exports.DeleteProduct = async (req, res) => {
    try {
        let DeleteID = req.params.id;

        let CheckReturnAssociated = await CheckAssociateService({ productID: new mongoose.Types.ObjectId(DeleteID) }, ReturnProductsModel);
        let CheckPurchaseAssociated = await CheckAssociateService({ productID: new mongoose.Types.ObjectId(DeleteID) }, PurchaseProductsModel);
        let CheckSaleAssociated = await CheckAssociateService({ productID: new mongoose.Types.ObjectId(DeleteID) }, SaleProductsModel);

        if (CheckReturnAssociated) {
            return res.status(200).send({ status: "associated", data: "Associated with Return" });
        } else if (CheckPurchaseAssociated){
            return res.status(200).send({ status: "associated", data: "Associated with Purchase" });
        } else if (CheckSaleAssociated) {
            return res.status(200).send({ status: "associated", data: "Associated with Sale" });
        }

        let result = await DeleteService(req, DataModel);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send({ status: "fail", error: e.message });
    }
};
