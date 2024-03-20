const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("Redirect to home page...");
    res.send("<h1>My Home Page</h1>");
});

module.exports = router;