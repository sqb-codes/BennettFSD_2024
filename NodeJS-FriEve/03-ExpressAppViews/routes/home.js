const express = require("express");
const router = express.Router();

const path = require("path");
let username = "";

router.get("/", (req, res, next) => {
    // res.sendFile(path.join(__dirname, "../", "views", "index.html"));
    console.log("Get Home Page...");
    res.render("index", {pageTitle : "Index", username:username});
});

router.post("/", (req, res, next) => {
    // res.sendFile(path.join(__dirname, "../", "views", "index.html"));
    username = req.body.username;
    // if(!username) {
    //     username = "";
    // }
    res.render("index", {pageTitle : "Index", username:username});
});

module.exports = router;