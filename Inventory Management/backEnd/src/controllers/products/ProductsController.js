const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const DataModel = require("../../models/Products/ProductsModel");
const ListTwoJoinService = require("../../services/common/ListTwoJoinService");

exports.CreateProduct = async (req, res) => {
    let result = await CreateService(req, DataModel)
    res.status(200).send(result);
}
exports.UpdateProduct = async (req, res) => {
    let result = await UpdateService(req,DataModel)
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
