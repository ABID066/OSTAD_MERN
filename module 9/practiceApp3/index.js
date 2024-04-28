var express = require("express");
var bodyParser = require("body-parser")
var app= express();
app.use(bodyParser.json());

app.post('/',function(req,res){
    let jsonData = req.body;
    let jsonDataString = JSON.stringify(jsonData);
    //res.send(jsonDataString);
    //let city=jsonData.city;
    res.end(jsonData.city);
    

})

app.listen(8000,function(){
    console.log("Server is running....")
})