const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    supplierID: {type:mongoose.Schema.Types.ObjectId},
    vatTax:{type:Number},
    discount:{type:Number},
    otherCost:{type:Number},
    shippingCost:{type:Number},
    grandTotal:{type:Number},
    note: {type: String},
},{timestamps: true, versionKey: false});

const PurchasesModel = mongoose.model('purchases', DataSchema);

module.exports = PurchasesModel;