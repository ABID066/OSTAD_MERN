
exports.HelloGet=(req,res)=>{
    res.status(200).json({status:"success",message:"Hello as get method"});
}

exports.HelloPost=(req,res)=>{
    res.status(203).json({status:"success",message:"Hello as post method"});
}