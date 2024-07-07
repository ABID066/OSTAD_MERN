const productModel = require("../models/productModel");


exports.createProduct=async (req,res)=>{
    try {
        let reqBody = req.body;
        await productModel.create(reqBody);
        res.json({status:"success",message:"Product created"});
    }catch(err){
        res.json({status:"fail",message:err.toString()});
    }
}

exports.readProduct=async (req,res)=>{
    try {

        let data = await productModel.find();
        res.json({status:"success",message:data});
    }catch(err){
        res.json({status:"fail",message:err.toString()});
    }
}

exports.updateProduct=async (req,res)=>{
    try {
        let { id } = req.params;
        await productModel.updateOne({_id:id},req.body);
        res.json({status:"success",message:"Product updated"});
    }catch(err){
        res.json({status:"fail",message:err.toString()});
    }
}

exports.deleteProduct=async (req,res)=>{
    try {
        let { id } = req.params;
        await productModel.deleteOne({_id:id});
        res.json({status:"success",message:"Product deleted"});
    }catch(err){
        res.json({status:"fail",message:err.toString()});
    }
}