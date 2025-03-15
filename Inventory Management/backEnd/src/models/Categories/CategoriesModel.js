const mongoose = require('mongoose');

const DataSchema =new mongoose.Schema({
    email: {type: String, required: true},
    category_name: {type: String, required: true},
},{timestamps: true, versionKey: false});

const CategoriesModel = mongoose.model('categories', DataSchema);

module.exports = CategoriesModel;