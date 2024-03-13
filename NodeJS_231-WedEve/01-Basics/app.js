// console.log("Hello World Using Node...");

const http = require("http");
const port = 9999;

// http.createServer(function(request, response) {
//     response.end("<h1>Hello world using Node JS...");
// }).listen(port, () => console.log("Server started at :", port));

const server = http.createServer(function(request, response) {
    response.write("<h1>Hello world using Node JS...</h1>");
    response.write("<h2>This is home page...</h2>");
    response.end();
});

server.listen(port, 
    () => console.log("Server started at :", port));