const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const DataModel = require("../../models/Customers/CustomersModel");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const mongoose = require("mongoose");
const DeleteService = require("../../services/common/DeleteService");
const SalesModel = require("../../models/Sales/SalesModel");
const DetailsByIDService = require("../../services/common/DetailsByIDService");



exports.CreateCustomer = async (req, res) => {
    let result = await CreateService(req, DataModel)
    res.status(200).send(result);
}
exports.UpdateCustomer = async (req, res) => {
    let result = await UpdateService(req,DataModel)
    res.status(200).send(result);
}

exports.CustomerList = async (req, res) => {
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options":"i"};
    let SearchArray = [{customer_name: SearchRgx},{customer_phone: SearchRgx},{customer_email: SearchRgx},{customer_address: SearchRgx}];
    let result = await ListService(req,DataModel,SearchArray);
    res.status(200).send(result);
}

exports.CustomerDetailsByID = async (req, res) => {
    let result = await DetailsByIDService(req,DataModel);
    res.status(200).send(result);
}

exports.CustomerDropDown = async (req, res) => {
    let result = await DropDownService(req,DataModel,{_id:1, customer_name: 1, customer_phone: 1, customer_email: 1, customer_address: 1});
    res.status(200).send(result);
}

exports.DeleteCustomer = async (req, res) => {
    try {
        let DeleteID = req.params.id;

        let CheckAssociated = await CheckAssociateService({ customerID: new mongoose.Types.ObjectId(DeleteID) }, SalesModel);

        if (CheckAssociated) {
            return res.status(200).send({ status: "associated", data: "Associated with Sales" });
        }

        let result = await DeleteService(req, DataModel);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send({ status: "fail", error: e.message });
    }
};
