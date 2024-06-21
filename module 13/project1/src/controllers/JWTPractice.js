import jwt from 'jsonwebtoken';

export const createToken = (req, res) => {
    const payload = {
        exp: Math.floor(Date.now()/1000)+(60*60),
        data: {
            Name: "MD Abid",
            City: "Khulna",
            admin: true
        }
    }
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret)

    res.send(token);
}

export const decodeToken = (req, res) =>{
    let token = req.headers['token-key']

    jwt.verify(token, "yourSuperSecretKey", function (err, decoded) {
        if (err){
            res.status(401).json({status:"Invalid Token", data: err})
        } else{
            res.status(200).json({status: "success", data: decoded})
        }
    })
}