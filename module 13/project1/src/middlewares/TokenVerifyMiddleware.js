import jwt from "jsonwebtoken";

export const verify = (req, res, next) =>{

        let token = req.headers['token-key']

        jwt.verify(token, "yourSuperSecretKey", function (err, decoded) {
            if (err){
                res.status(401).json({status:"Invalid Token", data: err})
            } else{
                next()
            }
        })

}