

module.exports = (req, res, next) => {
    console.log("AuthMiddleware executed");
    next();
};
