const {DecodeToken} = require("../utility/TokenHelper");
module.exports = (req, res, next)=>{

    let token= req.headers["token"]
    if(!token){
        token = req.cookies["token"]
    }

    let decoded = DecodeToken(token)

    if(decoded===null){
        console.error("No token provided 2");
        return res.status(401).json({status:"fail",message:"Unauthorized2"});
    } else {
        let email= decoded.email;
        let user_id=decoded.user_id;
        req.headers.email = email;
        req.headers.user_id = user_id;

        next();
    }

}