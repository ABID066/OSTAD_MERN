var express = require("express");
app=express();

//Just create Express JS
app.get("/", function(req,res){
    res.send("Hello Express js from HOME page");
})
 
app.get("/contact", function(req,res){
    res.send("Hello Express js from Contact Page");
})

app.put("/about", function(req,res){
    res.send("Hello Express js from About Page");
})

app.post("/terms", function(req,res){
    res.send("Hello Express js from Terms Page");
})

//Status response
app.delete("/status", function(req,res){
    res.status(401).end("The ending story");
})

//Simple string response
app.post("/two", function(req,res){
    res.end("This is simple string");
})

//JSON response
app.options("/one", function(req,res){
    let myJSONArray=[{
        "Name":"Abid",
        "City":"Khulna",
        "Country":"Bangladesh",
        "Occupation":"Software Engineer"
    },{
        "Name":"Shehab",
        "City":"Dhaka",
        "Country":"Bangladesh",
        "Occupation":"Software Engineer Trainee"
    },{
        "Name":"Solaiman",
        "City":"Chuadanga",
        "Country":"Bangladesh",
        "Occupation":"Software Engineer"
    }]
    res.json(myJSONArray);
})

//Download response
app.get("/download", function(req, res){
    res.download("../upload/1.jpg");
})

//Redirect response
app.get("/Bangladesh",function(req,res){
    res.redirect("http://localhost:8000/India");
})
app.get("/India",function(req,res){
    res.send("This is india");
})

//Header response
app.post("/header",function(req,res){
    res.append("name","MD Abid");
    res.append("city","Khulna");
    res.append("age","24");
    res.status(406).end("hELLO fROM hEADER");
})

//Cookie response
app.get("/cookiee",function(req,res){
    res.cookie("name","MD Abid");
    res.cookie("city","Khulna");
    res.cookie("age","24");
    res.end("Cookie set success")
})

//Cookie clear
app.get("/cookieeClear",function(req,res){
    res.clearCookie('age');
    res.clearCookie('name');
    res.clearCookie('city');
    res.end("cookie clear success")
})


app.listen(8000, function(){
    console.log("Server is running.....")
})