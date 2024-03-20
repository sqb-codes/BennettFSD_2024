const http = require("http");

const server = http.createServer(function(request, response) {
    // console.log(request);
    // console.log(response);
    const url = request.url;
    console.log("URL is : ", url);
    response.write("<html>");
    response.write("<head><title>My First Node App</title></head>");
    response.write("<body>");

    if(url === "/") {
        response.write("<h1>Home Page of my application...</h1>");
        response.write("<form action='/message' method='POST'>");
        response.write("<input type='text' placeholder='Enter your message' name='msg'/>");
        response.write("<input type='submit'/>");
        response.write("</form>");
    } else if(url === "/login") {
        response.write("<h1>Login Page of my application...</h1>");
    } else if(url === "/message") {
        response.write("<h1>Message Page of my application...</h1>");
        const body = [];
        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        })
    }
    else {
        response.write("<h1>Page not found...</h1>");
    }
    
    response.write("</body>");
    response.write("</html>");
    response.end();
    // response.end("<h1>Hello World using Node...</h1>");
});

server.listen(9999, 
    () => console.log("Server started at 9999"));

