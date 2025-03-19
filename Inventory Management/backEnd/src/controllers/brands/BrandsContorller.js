const CreateService = require("../../services/common/CreateService");
const DataModel = require("../../models/Brands/BrandsModel");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const mongoose = require("mongoose");
const DeleteService = require("../../services/common/DeleteService");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const ProductsModel = require("../../models/Products/ProductsModel");
const DetailsByIDService = require("../../services/common/DetailsByIDService");


exports.CreateBrand = async (req, res) => {
    let result = await CreateService(req, DataModel)
    res.status(200).send(result);
}
exports.UpdateBrand = async (req, res) => {
    let result = await UpdateService(req,DataModel)
    res.status(200).send(result);
}

exports.BrandDetailsByID = async (req, res) => {
    let result = await DetailsByIDService(req,DataModel);
    res.status(200).send(result);
}

exports.BrandList = async (req, res) => {
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options":"i"};
    let SearchArray = [{brand_name: SearchRgx}]
    let result = await ListService(req,DataModel,SearchArray);
    res.status(200).send(result);
}

exports.BrandDropDown = async (req, res) => {
    let result = await DropDownService(req,DataModel,{_id:1, brand_name: 1})
    res.status(200).send(result);
}

exports.BrandDelete = async (req, res) => {
    try {
        let DeleteID = req.params.id;

        let CheckAssociated = await CheckAssociateService({ brandID: new mongoose.Types.ObjectId(DeleteID) }, ProductsModel);

        if (CheckAssociated) {
            return res.status(200).send({ status: "associated", data: "Associated with Products" });
        } else {
            let result = await DeleteService(req, DataModel);
            res.status(200).send(result);
        }

    } catch (e) {
        res.status(500).send({ status: "fail", error: e.message });
    }
};



