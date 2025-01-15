var express = require('express');
var multer = require('multer');

var multer = multer()
var app = express();

app.use(multer.array());
app.use(express.static("public"))

/*
//Application middleware
app.use(function(req,res,next){
    console.log("Application Middleware");
    next();
})
 */

//Route Middleware
app.use("/profile", function (req, res, next) {
    console.log("Route middleware")
    next();
})

app.post("/", function (req, res) {
    let JSONData = req.body;
    res.send(JSON.stringify(JSONData));
})

app.post("/home", function (req, res) {
    res.send("Hello World! from Home");
})
app.post("/profile", function (req, res) {
    res.send("Hello World! from Profile");
})

app.listen(8001, function () {
    console.log("Server started on port 8001");
})


