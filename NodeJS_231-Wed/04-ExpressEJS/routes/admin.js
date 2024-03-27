const express = require("express");
const router = express.Router();

router.get("/add-user", (req, res, next) => {
    // res.sendFile(path.join(__dirname, "../", "views", "add-user.html"));
    res.render("add-user", {pageTitle: "Add User"});
});

router.post("/new-user", (req,res,next) => {
    const username = req.body.username;
    // res.sendFile(path.join(__dirname, "../", "views", "users.html"));
    res.render("new-user", {pageTitle: "New User Added", userName: username});
});

module.exports = router;