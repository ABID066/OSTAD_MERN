const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    saleID: {type:mongoose.Schema.Types.ObjectId, require: true},
    productID: {type:mongoose.Schema.Types.ObjectId, required: true},
    qty:{type:Number},
    unitCost:{type:Number},
    total:{type:Number}
},{timestamps: true, versionKey: false});

const SaleProductsModel = mongoose.model('saleProducts', DataSchema);

module.exports = SaleProductsModel;