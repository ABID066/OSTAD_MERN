const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    purchaseID: {type:mongoose.Schema.Types.ObjectId, require: true},
    productID: {type:mongoose.Schema.Types.ObjectId, required: true},
    qty:{type:Number},
    unitCost:{type:Number},
    total:{type:Number}
},{timestamps: true, versionKey: false});

const PurchaseProductsModel = mongoose.model('purchaseProducts', DataSchema);

module.exports = PurchaseProductsModel;