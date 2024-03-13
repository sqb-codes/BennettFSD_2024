const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8585;

const server = http.createServer(app);

app.use(bodyParser.urlencoded());

// app.use((req, res, next) => {
//     console.log("This is another middleware...");
//     // res.send("<h1>Sending middleware data</h1>");
//     next();
// });


app.use("/add-user", (req, res, next) => {
    res.send(`
    <html>
    <head><title>My Express App</title></head>
    <body>
        <h1>Add New User</h1>
        <hr>
        <form action='/newUser' method='POST'>
            <input type='text' placeholder="Enter user name" name='username'/>
            <input type='submit' />
        </form>
    </body>
    </html>
    `);
})

app.use("/newUser", (req, res, next) => {
    const userName = req.body.username;
    console.log(userName);
    res.send(`<h1>New User ${userName} Added...</h1>`);
    // console.log(req.body);
});

app.use("/login", (req, res, next) => {
    res.send("<h1>This is login Page</h1>");
});

app.use("/register", (req, res, next) => {
    res.send("<h1>This is register page</h1>");
});


app.use("/", (req, res, next) => {
    res.send("<h1>Hello from Express</h1>");
    // next();
});


server.listen(PORT, () => {
    console.log("Server started at :",PORT);
});