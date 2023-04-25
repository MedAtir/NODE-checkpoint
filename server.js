var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    res.writeHead(200, {"Content-Type" : "text/plain" });
    res.end("<h1>Hello Node!!!!</h1>\n")

});

server.listen(3000); //3 - listen for any incoming requests

console.log("Server running at http://localhost:3000")