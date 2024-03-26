const express = require("express");
const path = require("path");
const router = express.Router();


router.get("/add-product", (req,res,next) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});


router.post("/product", (req, res, next) => {
    const product = req.body.title;
    console.log(req.body);
    
});


module.exports = router;