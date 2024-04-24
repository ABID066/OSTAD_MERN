var fs = require("fs");
var http = require('http')


var server=http.createServer(function (req,res){
    if(req.url=="/"){

        
        /*//Synchronous
        let data=fs.readFileSync('home.html')
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            res.end();

        let error= fs.writeFileSync("demo.txt","Welcome to Node js as Sync And Override");
        if(error){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.writeFile("File write failed");
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File write success");
            res.end();
        }
        let error=fs.renameSync("demo.txt","demoNew.txt")
    
        if(error){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.writeFile("File rename fail");
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File rename success");
            res.end();
        }
       


       let error= fs.unlinkSync("demoNew.txt")
    
        if(error){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.writeFile("File delete failed");
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File delete success");
            res.end();
        }
     */
        let result= fs.existsSync("home1.html");
        if(result)
        res.end("True")
        else
        res.end("False")
        

    }
});
server.listen(3030);
console.log("Server is Running......")