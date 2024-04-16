var http = require('http');
var URL= require('url')
var server = http.createServer(function (req, res) {
    var myURL="https://www.rabbitholebd.com/seeall?category=10&title=Drama";
    var myURLObj=URL.parse(myURL,true);

    var myHostName=myURLObj.host;
    var myPathName=myURLObj.pathname;//In this url, the myPathNameName is not defined

    var mySearchName=myURLObj.search;

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(myHostName);
    //res.write(myPathNameName);myPathNameName is not defined
    //res.write(mySearchName);
    res.end();


});
server.listen(5000);
console.log("Server is running on port 5000");

