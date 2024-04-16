var http = require('http');
var server = http.createServer(function (req, res) {
   // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello world");
});
server.listen(5050);
console.log("Server is running on port 5050");

