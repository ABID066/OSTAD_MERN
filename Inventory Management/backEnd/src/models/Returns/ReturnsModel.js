const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    customerID: {type:mongoose.Schema.Types.ObjectId, require: true},
    vatTax:{type:Number},
    discount:{type:Number},
    otherCost:{type:Number},
    shippingCost:{type:Number},
    grandTotal:{type:Number},
    note: {type: String},
},{timestamps: true, versionKey: false});

const ReturnsModel = mongoose.model('returns', DataSchema);

module.exports = ReturnsModel;