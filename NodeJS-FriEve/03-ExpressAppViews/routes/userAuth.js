const express = require("express");
const router = express.Router();

const path = require("path");

router.get("/login", (req, res, next) => {
    // res.sendFile(path.join(__dirname, "../", "views", "login.html"));
    res.render("login", {pageTitle : "Login"});
});

router.get("/register", (req, res, next) => {
    // res.sendFile(path.join(__dirname, "../", "views", "register.html"));
    res.render("register", {pageTitle : "Register"});
});

module.exports = router;