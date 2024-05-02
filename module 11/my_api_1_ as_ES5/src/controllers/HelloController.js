exports.HelloGet=(req,res)=>{
    res.status(200).json({status: "Success", data: "tHE First express REST API for GET method"})
}
exports.HelloPost=(req,res)=>{
    res.status(201).json({status: "Success", data: "tHE First express REST API for POST method"})
}