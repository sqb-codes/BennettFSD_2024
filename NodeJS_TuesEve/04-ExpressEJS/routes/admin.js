const express = require("express");
const path = require("path");
const router = express.Router();

const productList = [];

router.get("/add-product", (req,res,next) => {
    // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
    res.render("add-product", {pageTitle:"Add Product"});
});


router.post("/product", (req, res, next) => {
    const product = req.body.title;
    productList.push({title: product});
    res.render("product", {pageTitle:"Products Page", product:product, productList:productList});
    
});


module.exports = router;