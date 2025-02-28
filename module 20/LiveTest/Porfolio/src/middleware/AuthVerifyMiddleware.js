const jwt = require("jsonwebtoken");

exports.AuthVerify = (req, res, next) => {
    let token = req.cookies["token"];

    if (!token) {
        return res.status(401).json({ status: "unauthorized", message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: "unauthorized",
                message: err.name === "TokenExpiredError" ? "Token has expired" : "Invalid token"
            });
        }

        req.headers.email = decoded.email;
        next();
    });
};
