const mongoose = require('mongoose')
const DataSchema= new mongoose.Schema({
    email:{type:String,required:true},
    title:{ type:String, required:true},
    description:{ type:String,required:true},
    img:{ type:String,required:true},
    codeLink:{ type:String,required:true},
    liveLink:{ type:String,required:true},

},{timestamps: true, versionKey:false});

const PortfolioModel = mongoose.model("portfolios",DataSchema);
module.exports = PortfolioModel;