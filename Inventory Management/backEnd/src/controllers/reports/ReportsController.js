const ExpenseReportService = require("../../services/report/ExpenseReportService")
const PurchaseReportService = require("../../services/report/PurchaseReportService");
const ReturnReportService = require("../../services/report/ReturnReportService");
const SalesReportService = require("../../services/report/SalesReportService");

exports.ExpensesByDate = async (req, res) => {
    let result = await ExpenseReportService(req);
    res.status(200).send(result);
}

exports.PurchaseByDate = async (req, res) => {
    let result = await PurchaseReportService(req);
    res.status(200).send(result);
}

exports.ReturnByDate = async (req, res) => {
    let result = await ReturnReportService(req);
    res.status(200).send(result);
}

exports.SalesByDate = async (req, res) => {
    let result = await SalesReportService(req);
    res.status(200).send(result);
}