var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("My first Node.js server...");
});
server.listen(8080, function(){
    console.log("server started");
});