const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const DataModel = require("../../models/Customers/CustomersModel");


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

exports.CustomerDropDown = async (req, res) => {
    let result = await DropDownService(req,DataModel,{_id:1, customer_name: 1, customer_phone: 1, customer_email: 1, customer_address: 1});
    res.status(200).send(result);
}

