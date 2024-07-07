const mongoose = require('mongoose');

const DatabaseSchema = mongoose.Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    img: {type: String, required: true},
    category: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true}
},{timestamps: true, versionKey: false});

const productModel = mongoose.model('Products', DatabaseSchema);

module.exports = productModel;