const express = require("express");
const router = express.Router();

const products = [
    {
        "product_id": "001",
        "product_name": "Wireless Bluetooth Earbuds",
        "product_brand": "SoundMasters",
        "product_price": 49.99,
        "product_category" : "Electronics",
        "product_rating" : 4.5,
        "product_count" : 20,
        "product_img" : "URL"
    },
    {
        "product_id": "002",
        "product_name": "Smartphone Case - Clear",
        "product_brand": "TechArmor",
        "product_price": 12.99
    },
    {
        "product_id": "003",
        "product_name": "Stainless Steel Water Bottle",
        "product_brand": "HydroFlask",
        "product_price": 24.95
    },
    {
        "product_id": "004",
        "product_name": "Portable Power Bank - 10000mAh",
        "product_brand": "Anker",
        "product_price": 29.99
    },
    {
        "product_id": "005",
        "product_name": "Wireless Charging Pad",
        "product_brand": "Belkin",
        "product_price": 19.99
    },
    {
        "product_id": "006",
        "product_name": "Laptop Backpack - Waterproof",
        "product_brand": "SwissGear",
        "product_price": 39.95
    },
    {
        "product_id": "007",
        "product_name": "Bluetooth Speaker - Portable",
        "product_brand": "JBL",
        "product_price": 79.99
    },
    {
        "product_id": "008",
        "product_name": "Fitness Tracker - Heart Rate Monitor",
        "product_brand": "Fitbit",
        "product_price": 89.95
    },
    {
        "product_id": "009",
        "product_name": "Coffee Maker - Programmable",
        "product_brand": "Hamilton Beach",
        "product_price": 39.99
    },
    {
        "product_id": "010",
        "product_name": "Wireless Gaming Mouse",
        "product_brand": "Razer",
        "product_price": 59.99
    }
];


router.use("/products", (req,res,next) => {
    res.render("products", {pageTitle : "Products", products:products});
});

module.exports = router;