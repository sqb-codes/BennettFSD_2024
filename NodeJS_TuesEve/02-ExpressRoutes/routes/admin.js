const express = require("express");
const router = express.Router();


router.get("/add-product", (req,res,next) => {
    res.send(`
    <h1>Add New Product</h1>
    <form action='/product' method='POST'>
        <input type='text' placeholder='Enter product title' name='title'/>
        <button type='submit'>Add Product</button>
    </form>
    `);
});


router.post("/product", (req, res, next) => {
    const product = req.body.title;
    console.log(req.body);
    res.send(`
    <h1>Welcome to Products Page</h1>
    <ul>
        <li>${product}</li>
    </ul>
    `);
});


module.exports = router;