const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 8888;

const server = http.createServer(app);

// app.use((req,res,next) => {
//     console.log("Middleware loaded...");
// });

app.use(bodyParser.urlencoded());

app.use("/add-user", (req, res, next) => {
    res.send(`
    <html>
    <head><title>My Express App</title></head>
    <body>
        <h1>Add New User</h1>
        <hr>
        <form action='/users' method='POST'>
            <input type='text' placeholder='Enter user name' name='username'/>
            <input type='submit' value='Add User'>
        </form>
    </body>
    </html>
    `);
});

app.post("/users", (req,res,next) => {
    res.send("<h1>List of users...</h1>");
    console.log(req.body);
});

app.use("/products", (req,res,next) => {
    res.send("<h1>List of products...</h1>");
});

app.use("/", (req,res,next) => {
    // console.log("Home page loaded..");
    res.send("<h1>Hello from Express</h1>");
    // next is like a funnel through which request passes to the next middleware
    next();
});

server.listen(PORT, () => {
    console.log("Server started at :",PORT);
});