const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const DataModel = require("../../models/Suppliers/SuppliersModel");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const mongoose = require("mongoose");

const DeleteService = require("../../services/common/DeleteService");
const PurchasesModel = require("../../models/Purchases/PurchasesModel");
const DetailsByIDService = require("../../services/common/DetailsByIDService");


exports.CreateSupplier = async (req, res) => {
    let result = await CreateService(req, DataModel)
    res.status(200).send(result);
}

exports.UpdateSupplier = async (req, res) => {
    let result = await UpdateService(req,DataModel)
    res.status(200).send(result);
}

exports.SupplierDetailsByID = async (req, res) => {
    let result = await DetailsByIDService(req,DataModel);
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

exports.DeleteSupply = async (req, res) => {
    try {
        let DeleteID = req.params.id;

        let CheckAssociated = await CheckAssociateService({ supplierID: new mongoose.Types.ObjectId(DeleteID) }, PurchasesModel);

        if (CheckAssociated) {
            return res.status(200).send({ status: "associated", data: "Associated with Purchases" });
        }

        let result = await DeleteService(req, DataModel);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send({ status: "fail", error: e.message });
    }
};