const jwt = require('jsonwebtoken')


exports.EncodeToken = (email, user_id) => {
    let key= "passkey457485";
    let Payload = {email: email, user_id: user_id }
    return jwt.sign(Payload, key, {expiresIn: "1d"});
}

exports.DecodeToken = (token) => {
    try {
        let key= "passkey457485";
        return jwt.verify(token, key);
    } catch(err) {
        return null;
    }
}