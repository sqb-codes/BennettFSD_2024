const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/add-user", (req, res, next) => {
    // res.send(`
    // <html>
    // <head><title>My Express App</title></head>
    // <body>
    //     <h1>Add New User</h1>
    //     <hr>
    //     <form action='/users' method='POST'>
    //         <input type='text' placeholder='Enter user name' name='username'/>
    //         <input type='submit' value='Add User'>
    //     </form>
    // </body>
    // </html>
    // `);
    res.sendFile(path.join(__dirname, "../", "views", "add-user.html"));
});

router.post("/users", (req,res,next) => {
    // res.send("<h1>List of users...</h1>");
    // console.log(req.body);
    const username = req.body.username;
    // res.send(`
    // <h1>List of Users...</h1>
    // <h3>Welcome ${username}</h3>
    // `);
    res.sendFile(path.join(__dirname, "../", "views", "users.html"));
});

module.exports = router;