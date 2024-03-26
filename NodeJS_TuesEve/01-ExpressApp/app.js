const http = require("http");
const express = require("express");
const app = express();
const PORT = 9999;

app.use((req,res,next) => {
    console.log("Application Stated...");
    res.send("<h1>Hello From Express</h1>");
    // next is like a funnel through which request passes
    next(); // only after adding next(), it allows request to continue to next middleware
});

app.use((req,res,next) => {
    console.log("In another middleware...");
});

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log("Server started at :",PORT);
});