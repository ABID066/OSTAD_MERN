const mongoose = require('mongoose')
const DataSchema= new mongoose.Schema({
    title:{ type:String,unique:true,required:true },
    description:{ type:String,required:true},
    img:{ type:String,required:true},
    codeLink:{ type:String,required:true},
    liveLink:{ type:String,required:true},

},{timestamps: true, versionKey:false});

const PortfolioModel = mongoose.model("portfolios",DataSchema);
module.exports = PortfolioModel;