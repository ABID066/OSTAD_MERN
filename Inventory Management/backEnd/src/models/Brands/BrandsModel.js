const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    brand_name: {type: String, required: true, unique: true},
},{timestamps: true, versionKey: false});

const BrandsModel = mongoose.model('brands', DataSchema);

module.exports = BrandsModel;