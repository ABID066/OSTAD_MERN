const jwt = require("jsonwebtoken");

exports.TokenVerifyMiddleware=(req,res,next)=>{
    let token = req.headers["token-key"];

    jwt.verify(token, process.env.JWT_SECRET, (err,decoded) => {
        if(err){
            res.status(401).json({status:"Invalid Token",message:err.toString()});
        }
        else {
            next();
        }
    })
}