const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/users", (req, res, next) => {
    // console.log("Redirect to home page...");
    // res.send("<h1>My Home Page</h1>");
    res.sendFile(path.join(__dirname, "../", "views", "users.html"));
});

module.exports = router;