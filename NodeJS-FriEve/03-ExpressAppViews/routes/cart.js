const express = require("express");
const router = express.Router();

const path = require("path");

router.get("/cart", (req, res, next) => {
    res.render("cart", {pageTitle : "Cart"});
});

module.exports = router;