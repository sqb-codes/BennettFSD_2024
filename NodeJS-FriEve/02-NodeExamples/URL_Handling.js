const http = require("http");
const fs = require("fs");

const PORT = 9999;

const server = http.createServer(function(request, response) {
    const url = request.url;
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write("<html>");
    response.write("<head><title>My First Page</title></head>");
    response.write("<body>");
    response.write("<h1>Hello World Using Node JS...</h1>");
    response.write("<a href='/'>Home Page</a> | ");
    response.write("<a href='/login'>Login Page</a> | ");
    response.write("<a href='/message'>Message</a> | ");
    response.write("<a href='/register'>Register</a> | ");
    response.write("<a href='/about'>About Us</a>");

    if(url === "/") {
        response.write("<h2>This is home page </h2>");
    } else if(url === "/login") {
        response.write("<h2>This is Login page </h2>");
    } else if(url === "/register") {
        response.write("<h2>This is Register page </h2>");
    } else if(url === "/about") {
        response.write("<h2>This is About Us page </h2>");
    } else if(url === "/message") {
        response.write("<h2>This is Message page </h2>");
        response.write("<form action='/saveMsg' method='POST'>");
        response.write("<input type='text' placeholder='Enter your message' name='msg'/>");
        response.write("<input type='submit'/>");
        response.write("</form>");
    } else if(url === "/saveMsg") {
        const body = [];
        request.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        request.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.replace("+", " ");
            fs.writeFileSync("message.txt", message);
        });
    }


    response.write("</body>");
    response.write("</html>");
    response.end();
});

server.listen(PORT, () => console.log("Server Started at :",PORT));