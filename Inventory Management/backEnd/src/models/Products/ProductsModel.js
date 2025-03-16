const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    categoryID: {type:mongoose.Schema.Types.ObjectId},
    brandID: {type:mongoose.Schema.Types.ObjectId},
    product_name: {type: String, required: true},
    product_details: {type: String},
    unit: {type: String, required: true},
},{timestamps: true, versionKey: false});

const ProductsModel = mongoose.model('products', DataSchema);

module.exports = ProductsModel;