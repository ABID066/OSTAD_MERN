const CreateService = require("../../services/common/CreateService");
const CategoriesModel = require("../../models/Categories/CategoriesModel");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const mongoose = require("mongoose");
const ProductsModel = require("../../models/Products/ProductsModel");
const DeleteService = require("../../services/common/DeleteService");
const DetailsByIDService = require("../../services/common/DetailsByIDService");




exports.CreateCategory = async (req, res) => {
    let result = await CreateService(req,CategoriesModel)
    res.status(200).send(result);
}

exports.UpdateCategory = async (req, res) => {
    let result = await UpdateService(req, CategoriesModel);
    res.status(200).send(result);
}

exports.CategoryDetailsByID = async (req, res) => {
    let result = await DetailsByIDService(req,CategoriesModel);
    res.status(200).send(result);
}

exports.CategoryList = async (req, res) => {
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options":"i"};
    let SearchArray = [{category_name: SearchRgx}]
    let result = await ListService(req,CategoriesModel,SearchArray);
    res.status(200).send(result);
}

exports.CategoryDropDown = async (req, res) => {
    let result = await DropDownService(req,CategoriesModel,{_id:1, category_name: 1})
    res.status(200).send(result);
}

exports.DeleteCategory = async (req, res) => {
    try {
        let DeleteID = req.params.id;

        let CheckAssociated = await CheckAssociateService({ categoryID: new mongoose.Types.ObjectId(DeleteID) }, ProductsModel);

        if (CheckAssociated) {
            return res.status(200).send({ status: "associated", data: "Associated with Products" });
        } else {
            let result = await DeleteService(req, CategoriesModel);
            res.status(200).send(result);
        }

    } catch (e) {
        res.status(500).send({ status: "fail", error: e.message });
    }
};