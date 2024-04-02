const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const adminRoutes = require("./routes/admin");
const homeRoutes = require("./routes/home");

const PORT = 9999;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());

app.use(adminRoutes);
app.use(homeRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log("Server Started At Port :",PORT);
})