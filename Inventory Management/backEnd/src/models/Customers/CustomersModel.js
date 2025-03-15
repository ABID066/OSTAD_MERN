const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    customer_name: {type: String, required: true},
    customer_address: {type: String},
    customer_phone: {type: String, required: true},
    customer_email: {type: String},
},{timestamps: true, versionKey: false});

const CustomersModel = mongoose.model('customers', DataSchema);

module.exports = CustomersModel;