// Console Based Application
// console.log("Hello world using Node...");

// Web Based Application
const http = require("http");
const PORT = 9999;

// http.createServer(function(request, response) {
//     response.end("<h1>Hello World Using Node JS...");
// }).listen(PORT, () => console.log("Server Started at :",PORT));

const server = http.createServer(function(request, response) {
    // Send the HTTP Header
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write("<h1>Hello World Using Node JS...</h1>");
    response.write("<h2>This is some heading</h2>");
    response.write("<h3>This is another heading...</h3>");
    response.end();
});

server.listen(PORT, () => console.log("Server Started at :",PORT));