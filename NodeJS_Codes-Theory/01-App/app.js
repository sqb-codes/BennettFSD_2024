// console.log("Hello World Using Node...");

// 1. require http module
let http = require("http");

// 2. Create Server
http.createServer(function(request, response) {
    response.end("<h1>Hello World using Node...</h1>");

// 3. Listen on a port
}).listen(9999, 
    () => console.log("Server started at 9999"));

