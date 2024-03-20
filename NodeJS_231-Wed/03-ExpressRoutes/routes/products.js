const express = require("express");
const path = require("path");
const router = express.Router();

router.use("/products", (req,res,next) => {
    // res.send("<h1>List of products...</h1>");
    res.sendFile(path.join(__dirname, "../", "views", "products.html"));
});

module.exports = router;