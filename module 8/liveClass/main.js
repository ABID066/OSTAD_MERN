const ht=require("http");

ht.createServer(function(req,res)
{
    res.writeHead(201,{"Content-type":"text/html"})
    //res.write();
    res.end("Hello, I'm from Server");
}).listen(8800,function(){
    console.log("Sever is Running.....")
})
