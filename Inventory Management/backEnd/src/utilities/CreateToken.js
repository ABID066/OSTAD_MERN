const jwt = require("jsonwebtoken");
const CreateToken = async (data) => {
    let Payload = {exp: Math.floor(Date.now() / 1000)+(24*60*60), data: data};
    return await jwt.sign(Payload, process.env.JWT_SECRET);
}
module.exports = CreateToken;