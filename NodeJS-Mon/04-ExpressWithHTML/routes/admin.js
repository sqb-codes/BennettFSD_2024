const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/add-user", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-user.html"));
});

router.post("/users", (req, res, next) => {
    const username = req.body.username;
    res.sendFile(path.join(__dirname, "../", "views", "add-user.html"));
});

module.exports = router;