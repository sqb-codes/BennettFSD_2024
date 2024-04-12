const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded());

app.use("/login", (req,res,next) => {
    // res.send("<h1>Login Page...!!!</h1>");
    res.send(`
    <h1>Login Page...!!!</h1>
    <form action="/loginUser" method='post'>
    <label for='username'>Enter your username</label>
    <input type='text' placeholder='Enter your username' name='username' id='username'/>
    <label for='userpwd'>Enter your password</label>
    <input type='password' placeholder='Enter your password' name='userpwd' id='userpwd'/>
    <input type='submit'/>
    `)
});

app.use("/loginUser", (req,res,next) => {
    // console.log(req.body);
    const username = req.body.username;
    const pwd = req.body.userpwd;
    if(username === "ravi" && pwd === "1234") {
        res.send("<h1>Login Success</h1>");    
    }
    else {
        res.send("<h1>Login Failed...</h1>");
    }
    
});

app.use("/register", (req,res,next) => {
    res.send("<h1>Register now to shop...!!!</h1>");
});

app.use("/cart", (req,res,next) => {
    res.send("<h1>Here's your Cart...!!!</h1>");
});

app.use("/products", (req,res,next) => {
    res.send("<h1>Look at the products...!!!</h1>");
});

app.use("/", (req,res,next) => {
    res.send("<h1>Hello World From Express!!!</h1>");
});

app.listen(PORT, () => {
    console.log("Server started at :",PORT);
});