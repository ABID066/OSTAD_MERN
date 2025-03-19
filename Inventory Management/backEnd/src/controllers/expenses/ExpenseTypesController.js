const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const DataModel = require("../../models/Expenses/ExpenseTypesModel");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const mongoose = require("mongoose");
const DeleteService = require("../../services/common/DeleteService");
const ExpensesModel = require("../../models/Expenses/ExpensesModel");
const DetailsByIDService = require("../../services/common/DetailsByIDService");


exports.CreateExpenseTypes = async (req, res) => {
    let result = await CreateService(req, DataModel)
    res.status(200).send(result);
}

exports.UpdateExpenseTypes = async (req, res) => {
    let result = await UpdateService(req,DataModel)
    res.status(200).send(result);
}

exports.ExpenseTypesDetailsByID = async (req, res) => {
    let result = await DetailsByIDService(req,DataModel);
    res.status(200).send(result);
}

exports.ExpenseTypesList = async (req, res) => {
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options":"i"};
    let SearchArray = [{expense_name: SearchRgx}];
    let result = await ListService(req,DataModel,SearchArray);
    res.status(200).send(result);
}

exports.ExpenseTypesDropDown = async (req, res) => {
    let result = await DropDownService(req,DataModel,{_id:1, expense_name: 1});
    res.status(200).send(result);
}

exports.DeleteExpenseTypes = async (req, res) => {
    try {
        let DeleteID = req.params.id;

        let CheckAssociated = await CheckAssociateService({ typeID: new mongoose.Types.ObjectId(DeleteID) }, ExpensesModel);

        if (CheckAssociated) {
            return res.status(200).send({ status: "associated", data: "Associated with Expenses" });
        }

        let result = await DeleteService(req, DataModel);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send({ status: "fail", error: e.message });
    }
};


