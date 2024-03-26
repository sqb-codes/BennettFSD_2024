const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRoutes = require("./routes/admin");
const homeRoutes = require("./routes/home");

const PORT = 9999;

app.use(bodyParser.urlencoded());

app.use(adminRoutes);
app.use(homeRoutes);

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log("Server started at :",PORT);
});