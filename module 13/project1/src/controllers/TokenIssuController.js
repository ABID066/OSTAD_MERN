import jwt from "jsonwebtoken";

export const TokenIssue = (req, res) => {
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
