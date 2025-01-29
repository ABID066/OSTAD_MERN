const StudentsModel =require("../models/StudentsModel");

//Create Data
exports.InsertStudent =async (req, res) => {
    try {
        let reqBody = req.body;
        await StudentsModel.create(reqBody);
        return res.status(201).json({status: "success", message: "Student inserted"});
    }catch(err) {
        res.status(500).json({status: "error", message: err.toString()});
    }
}

//Read All Data
exports.ReadStudents=async (req,res)=>{
    try {

        let data = await StudentsModel.find();
        res.json({status:"success",message:data});
    }catch(err){
        res.json({status:"fail",message:err.toString()});
    }
}

//Read All Data with Projection
exports.ReadStudentsWithProjection = async (req, res) => {
    try {
        // Get projection fields from query parameters, or default to some fields
        const projection = req.query.fields ;

        // Use projection to query the database
        const data = await StudentsModel.find({}, projection.split(" ").join(" "));

        res.json({ status: "success", message: data });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

//Read One Student also with projection
exports.ReadOneStudent=async (req,res)=>{
    try {
        let {id} = req.params
        const projection = "name roll class";
        let data = await StudentsModel.findOne({_id:id}, projection.split(" ").join(" "));
        res.json({status:"success",message:data});
    }catch(err){
        res.json({status:"fail",message:err.toString()});
    }
}

//Update student info
exports.UpdateStudent=async (req,res)=>{
    try {
        let { id } = req.params;
        await StudentsModel.updateOne({_id:id},req.body);
        res.json({status:"success",message:"Product updated"});
    }catch(err){
        res.json({status:"fail",message:err.toString()});
    }
}

//Delete student info
exports.DeleteStudent=async (req,res)=>{
    try {
        let { id } = req.params;
        await StudentsModel.deleteOne({_id:id});
        res.json({status:"success",message:"Product deleted"});
    }catch(err){
        res.json({status:"fail",message:err.toString()});
    }
}