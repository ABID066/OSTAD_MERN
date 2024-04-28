var express = require('express');
app=express();

app.get("/",function(req,res){

    
    let firstName1 = req.query.firstName1;
    let lastName1 = req.query.lastName1;
    
    res.send(firstName1+" "+lastName1)
    
    
    
    let firstName= req.header('firstName');
    let lastName= req.header("lastName");
    let AcceptEncoding=req.header('Accept-Encoding')
    
    //res.end(firstName+" "+lastName+" | "+ AcceptEncoding);
    
})
app.post("/",function(req,res){

    
    let firstName1 = req.query.firstName1;
    let lastName1 = req.query.lastName1;
    
    //res.send(firstName1+" "+lastName1)
    
    
    
    let firstName= req.header('firstName');
    let lastName= req.header("lastName");
    let AcceptEncoding=req.header('Accept-Encoding')
    
    res.end(firstName+" "+lastName+" | "+ AcceptEncoding);
    
})
app.listen(8000,function(){
    console.log("Server Run Success")
})