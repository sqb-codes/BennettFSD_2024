const express = require("express");
const router = express.Router();

router.get("/add-user", (req, res, next) => {
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

router.post("/users", (req,res,next) => {
    res.send("<h1>List of users...</h1>");
    console.log(req.body);
});

module.exports = router;