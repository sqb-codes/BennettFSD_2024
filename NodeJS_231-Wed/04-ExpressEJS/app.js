const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
// User defined modules
const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

const PORT = 8888;

// which template engine you are using
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded());

app.use(indexRoutes);   // /
app.use(adminRoutes);   // /add-user
app.use(productRoutes); // /products
app.use(usersRoutes);  //  


// to server static files like css, images
app.use(express.static(path.join(__dirname, "public")));

app.use((req,res,next) => {
    res.send("<h1>404 Page Not Found...</h1>");
});

app.listen(PORT, () => {
    console.log("Server started at :",PORT);
});