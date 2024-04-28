var express = require("express");
app=express();


app.use("/about",function(req,res,next){
    console.log("it's application level middleware")
    next();
})
app.use(function(req,res,next){
    console.log("it's application level middleware")
    next();
})


app.get("/",function(req,res){
    res.send("This is home PAGE");
})

app.get("/about",function(req,res){
    res.send("This is about PAGE");
})

app.get("/contact",function(req,res){
    res.send("This is contact PAGE");
})

app.listen(5000,function(){
    console.log("Server is running")
})

