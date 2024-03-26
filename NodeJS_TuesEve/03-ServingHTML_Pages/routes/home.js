const express = require("express");
const path = require("path");
const router = express.Router();

// Will serve home page
router.get("/", (req, res, next) => {
    // console.log(__dirname);
    res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});


module.exports = router;