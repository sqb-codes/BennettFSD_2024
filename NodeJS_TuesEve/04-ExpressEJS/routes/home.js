const express = require("express");
const path = require("path");
const router = express.Router();

// Will serve home page
router.get("/", (req, res, next) => {
    // used to serve HTML files
    // res.sendFile(path.join(__dirname, "../", "views", "home.html"));

    // used to serve EJS files
    res.render("home", {pageTitle:"Home Page"});

});


module.exports = router;