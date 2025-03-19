const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");

const DataModel = require("../../models/Expenses/ExpensesModel");
const DeleteService = require("../../services/common/DeleteService");
const DetailsByIDService = require("../../services/common/DetailsByIDService");


exports.CreateExpenses = async (req, res) => {
    let result = await CreateService(req, DataModel)
    res.status(200).send(result);
}

exports.UpdateExpenses = async (req, res) => {
    let result = await UpdateService(req,DataModel)
    res.status(200).send(result);
}

exports.ExpenseDetailsByID = async (req, res) => {
    let result = await DetailsByIDService(req,DataModel);
    res.status(200).send(result);
}

exports.ExpenseList = async (req, res) => {
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options":"i"};
    let SearchArray = [{note: SearchRgx},{amount: SearchRgx},{"type.expense_name": SearchRgx}];
    let JoinStage = {$lookup: {from:"expensetypes", localField: "typeID", foreignField:"_id", as: "type"}}
    let result = await ListOneJoinService(req,DataModel,SearchArray,JoinStage);
    res.status(200).send(result);
}


exports.DeleteExpense = async (req, res) => {
    let result = await DeleteService(req,DataModel);
    res.status(200).send(result);
}



