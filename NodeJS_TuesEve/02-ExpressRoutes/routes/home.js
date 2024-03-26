const express = require("express");
const router = express.Router();

// Will serve home page
router.get("/", (req, res, next) => {
    res.send("<h1>Online shop home page...</h1>");
});


module.exports = router;