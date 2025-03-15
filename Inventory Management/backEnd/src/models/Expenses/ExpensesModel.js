const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    typeID: {type:mongoose.Schema.Types.ObjectId , required:true},
    amount: {type: Number, required: true},
    note: {type: String}
},{timestamps: true, versionKey: false});

const ExpensesModel = mongoose.model('expenses', DataSchema);

module.exports = ExpensesModel;