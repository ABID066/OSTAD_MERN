const jwt = require("jsonwebtoken");

exports.AuthTokenIssue=(req,res)=>{

    let Payload ={
        exp: Math.floor(Date.now() / 1000)+(60*60),
        data: {Name:"Sayad Bin Kamrul", City: "Khulna", admin: true}
    }

    let token = jwt.sign(Payload,process.env.JWT_SECRET);

    res.status(200).json({status:"success",token:token});
}