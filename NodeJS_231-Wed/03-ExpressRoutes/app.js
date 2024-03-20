const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// User defined modules
const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

const PORT = 8888;

const server = http.createServer(app);

app.use(bodyParser.urlencoded());

app.use(adminRoutes);   // /add-user
app.use(productRoutes); // /products
app.use(usersRoutes);  //  /


app.use((req,res,next) => {
    res.send("<h1>404 Page Not Found...</h1>");
});

server.listen(PORT, () => {
    console.log("Server started at :",PORT);
});