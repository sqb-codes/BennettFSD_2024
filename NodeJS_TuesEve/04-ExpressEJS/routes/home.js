const express = require("express");
const path = require("path");
const router = express.Router();

products_data = [
    {
      "product_name": "Smartwatch X1",
      "product_price": 199.99,
      "product_rating": 4.7,
      "product_brand": "TechCo",
      "product_category": "Electronics",
      "product_image_url": "https://example.com/product_x1_image.jpg"
    },
    {
      "product_name": "Wireless Earbuds Y2",
      "product_price": 79.99,
      "product_rating": 4.5,
      "product_brand": "AudioTech",
      "product_category": "Electronics",
      "product_image_url": "https://example.com/product_y2_image.jpg"
    },
    {
      "product_name": "Laptop Z3",
      "product_price": 1299.99,
      "product_rating": 4.8,
      "product_brand": "TechGiant",
      "product_category": "Electronics",
      "product_image_url": "https://example.com/product_z3_image.jpg"
    },
    {
      "product_name": "Organic Cotton T-Shirt A4",
      "product_price": 29.99,
      "product_rating": 4.6,
      "product_brand": "EcoWear",
      "product_category": "Apparel",
      "product_image_url": "https://example.com/product_a4_image.jpg"
    },
    {
      "product_name": "Running Shoes B5",
      "product_price": 89.99,
      "product_rating": 4.4,
      "product_brand": "SportPro",
      "product_category": "Footwear",
      "product_image_url": "https://example.com/product_b5_image.jpg"
    },
    {
      "product_name": "Gaming Mouse C6",
      "product_price": 49.99,
      "product_rating": 4.9,
      "product_brand": "GameTech",
      "product_category": "Electronics",
      "product_image_url": "https://example.com/product_c6_image.jpg"
    },
    {
      "product_name": "Ceramic Coffee Mug D7",
      "product_price": 14.99,
      "product_rating": 4.3,
      "product_brand": "HomeEssentials",
      "product_category": "Home & Kitchen",
      "product_image_url": "https://example.com/product_d7_image.jpg"
    },
    {
      "product_name": "Denim Jeans E8",
      "product_price": 59.99,
      "product_rating": 4.7,
      "product_brand": "FashionCo",
      "product_category": "Apparel",
      "product_image_url": "https://example.com/product_e8_image.jpg"
    },
    {
      "product_name": "Portable Bluetooth Speaker F9",
      "product_price": 39.99,
      "product_rating": 4.6,
      "product_brand": "AudioTech",
      "product_category": "Electronics",
      "product_image_url": "https://example.com/product_f9_image.jpg"
    },
    {
      "product_name": "Stainless Steel Water Bottle G10",
      "product_price": 24.99,
      "product_rating": 4.5,
      "product_brand": "EcoWear",
      "product_category": "Sports & Outdoors",
      "product_image_url": "https://example.com/product_g10_image.jpg"
    },
    {
      "product_name": "Graphic Print Hoodie H11",
      "product_price": 49.99,
      "product_rating": 4.8,
      "product_brand": "UrbanWear",
      "product_category": "Apparel",
      "product_image_url": "https://example.com/product_h11_image.jpg"
    },
    {
      "product_name": "Wireless Charging Pad I12",
      "product_price": 29.99,
      "product_rating": 4.4,
      "product_brand": "TechCo",
      "product_category": "Electronics",
      "product_image_url": "https://example.com/product_i12_image.jpg"
    },
    {
      "product_name": "Yoga Mat J13",
      "product_price": 34.99,
      "product_rating": 4.6,
      "product_brand": "YogaEssentials",
      "product_category": "Sports & Outdoors",
      "product_image_url": "https://example.com/product_j13_image.jpg"
    },
    {
      "product_name": "Hardcover Notebook K14",
      "product_price": 9.99,
      "product_rating": 4.5,
      "product_brand": "StationeryCo",
      "product_category": "Office Supplies",
      "product_image_url": "https://example.com/product_k14_image.jpg"
    },
    {
      "product_name": "Leather Wallet L15",
      "product_price": 49.99,
      "product_rating": 4.7,
      "product_brand": "FashionCo",
      "product_category": "Accessories",
      "product_image_url": "https://example.com/product_l15_image.jpg"
    },
    {
      "product_name": "Digital Kitchen Scale M16",
      "product_price": 19.99,
      "product_rating": 4.3,
      "product_brand": "HomeEssentials",
      "product_category": "Home & Kitchen",
      "product_image_url": "https://example.com/product_m16_image.jpg"
    },
    {
      "product_name": "Sunscreen SPF 50 N17",
      "product_price": 14.99,
      "product_rating": 4.5,
      "product_brand": "SkinCare",
      "product_category": "Beauty & Personal Care",
      "product_image_url": "https://example.com/product_n17_image.jpg"
    },
    {
      "product_name": "Stainless Steel Kitchen Knife Set O18",
      "product_price": 69.99,
      "product_rating": 4.8,
      "product_brand": "KitchenPro",
      "product_category": "Home & Kitchen",
      "product_image_url": "https://example.com/product_o18_image.jpg"
    },
    {
      "product_name": "Travel Backpack P19",
      "product_price": 79.99,
      "product_rating": 4.6,
      "product_brand": "TravelGear",
      "product_category": "Bags",
      "product_image_url": "https://example.com/product_p19_image.jpg"
    },
    {
      "product_name": "Fitness Tracker Q20",
      "product_price": 49.99,
      "product_rating": 4.4,
      "product_brand": "SportPro",
      "product_category": "Sports & Outdoors",
      "product_image_url": "https://example.com/product_q20_image.jpg"
    }
  ]
  

// Will serve home page
router.get("/", (req, res, next) => {
    // used to serve HTML files
    // res.sendFile(path.join(__dirname, "../", "views", "home.html"));

    electronics_data = products_data.filter((item) => item.product_category == "Electronics");
    accessories_data = products_data.filter((item) => item.product_category == "Accessories");
    apparel_data = products_data.filter((item) => item.product_category == "Apparel");

    // used to serve EJS files
    res.render("home", {pageTitle:"Home Page", electronics_data : electronics_data, accessories_data : accessories_data, apparel_data : apparel_data});

});


module.exports = router;