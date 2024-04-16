var fs = require("fs");
var http = require('http')


var server=http.createServer(function (req,res){
    if(req.url=="/"){

        //ASynchronous
        //fs.readFile('home.html',function (error,data){

        //Synchronous
        let data=fs.readFileSync('home.html')
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            res.end();

    }
});
server.listen(4040);
console.log("Server is Running......")