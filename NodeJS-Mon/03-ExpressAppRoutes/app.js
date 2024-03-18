const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded());

const PORT = 9999;
const server = http.createServer(app);

// app.use((req,res,next) => {
//     console.log("This is a middleware...");
//     next();
// });


app.use("/add-user", (req, res, next) => {
    // res.send("<h1>Add a new user...</h1>");
    res.send(`
    <h1>Add a new user from here..</h1>
    <form action='/users' method='POST'>
        <input type='text' placeholder='Enter user name' name='username'/>
        <input type='submit'/>
    </form>
    `);
});

app.use("/users", (req, res, next) => {
    // res.send("<h1>List of users...</h1>");
    // console.log(req.body);
    const username = req.body.username;
    res.send(`
    <h1>List of users...</h1>
    <h3>Welcome ${username}</h3>
    `);
});

app.use("/", (req,res,next) => {
    // console.log("Hello from ...");
    res.send("<h1>Hello From Express...</h1>");
});

server.listen(PORT, () => {
    console.log("Server started at :",PORT);
});