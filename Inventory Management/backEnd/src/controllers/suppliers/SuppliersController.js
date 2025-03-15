const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const DataModel = require("../../models/Suppliers/SuppliersModel");


exports.CreateSupplier = async (req, res) => {
    let result = await CreateService(req, DataModel)
    res.status(200).send(result);
}
exports.UpdateSupplier = async (req, res) => {
    let result = await UpdateService(req,DataModel)
    res.status(200).send(result);
}

exports.SupplierList = async (req, res) => {
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options":"i"};
    let SearchArray = [{supplier_name: SearchRgx},{supplier_phone: SearchRgx},{supplier_email: SearchRgx},{supplier_address: SearchRgx}];
    let result = await ListService(req,DataModel,SearchArray);
    res.status(200).send(result);
}

exports.SupplierDropDown = async (req, res) => {
    let result = await DropDownService(req,DataModel,{_id:1, supplier_name: 1, supplier_phone: 1, supplier_email: 1, supplier_address: 1});
    res.status(200).send(result);
}

