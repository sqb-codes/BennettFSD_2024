const http = require("http");
const port = 9999;

const server = http.createServer(function(request, response) {
    const url = request.url;
    response.write("<html>");
    response.write("<head><title>My First Webpage</title></head>");
    response.write("<body>");
    response.write("<h1>Node JS Application</h1>");
    response.write("<a href='/'>Home</a> | ");
    response.write("<a href='/login'>Login Now</a> | ");
    response.write("<a href='/message'>Message</a>");

    if(url === "/") {
        response.write("<h1>Hello world using Node JS...</h1>");
    } else if(url === "/login") {
        response.write("<h1>You are on Login Page...</h1>");
    } else if(url === "/message") {
        response.write("<h1>You are on message Page...</h1>");
        // Create HTML form to take one input from user
        
    } else if(url === "/msgUser") {
        // Show message on next page...
        console.log(request.body);
    } else {
        response.write("<h1>Page not found</h1>");
    }
    
    response.write("</body>");
    response.write("</html>");
    response.end();
});

server.listen(port, 
    () => console.log("Server started at :", port));