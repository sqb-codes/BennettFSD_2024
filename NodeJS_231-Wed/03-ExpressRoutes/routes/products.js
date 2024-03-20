const express = require("express");
const router = express.Router();

router.use("/products", (req,res,next) => {
    res.send("<h1>List of products...</h1>");
});

module.exports = router;