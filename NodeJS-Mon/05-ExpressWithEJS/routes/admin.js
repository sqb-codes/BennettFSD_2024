const express = require("express");
const router = express.Router();

const userList = [];

router.get("/add-user", (req, res, next) => {
    res.render("add-user", {pageTitle : "Add User"});
});

router.post("/users", (req, res, next) => {
    const username = req.body.username;
    userList.push({username : username});

    res.render("users", {user : username, userArray : userList, pageTitle : "New User Added"});
});

module.exports = router;