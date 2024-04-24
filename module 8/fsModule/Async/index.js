var fs = require("fs");
var http = require('http')


var server=http.createServer(function (req,res){
    if(req.url=="/"){

        //ASynchronous
       /* fs.readFile('home.html',function (error,data){

        
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            res.end();

        

        })
        fs.writeFile("demo.txt","hELLO WORLD from async and override",function(error){

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
    });

    fs.rename("demoNew.txt","demoNew1.txt", function (error)
    {
        if(error){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.writeFile("File rename failed");
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File rename success");
            res.end();
        }
    })

    fs.unlink("demoNew1.txt",function(error)
    {
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
    })*/


    fs.exists("home.html",function(result){
        if(result)
            res.end("True")
        else
            res.end("False")
    
    });
    


    }
});
server.listen(4040);
console.log("Server is Running......")