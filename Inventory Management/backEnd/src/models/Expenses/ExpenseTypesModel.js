const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    expense_name: {type: String, required: true},
},{timestamps: true, versionKey: false});

const ExpenseTypesModel = mongoose.model('expensetypes', DataSchema);

module.exports = ExpenseTypesModel;