const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    supplier_name: {type: String, required: true},
    supplier_address: {type: String},
    supplier_phone: {type: String, required: true},
    supplier_email: {type: String},
},{timestamps: true, versionKey: false});

const SuppliersModel = mongoose.model('suppliers', DataSchema);

module.exports = SuppliersModel;