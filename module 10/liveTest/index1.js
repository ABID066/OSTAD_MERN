const http = require('http');
function createServer() {

  const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello This is Node Js Server!');
  });
  server.listen(5000, () => {
    console.log('Server running at http://127.0.0.1:5000/');
  });
}
createServer();
