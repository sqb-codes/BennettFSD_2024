const http = require("http");

const server = http.createServer(function(request, response) {
    // console.log(request);
    // console.log(response);
    response.write("<html>");
    response.write("<head><title>My First Node App</title></head>");
    response.write("<body>");
    response.write("<h1>My First Node Application...</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
    // response.end("<h1>Hello World using Node...</h1>");
});

server.listen(9999, 
    () => console.log("Server started at 9999"));

