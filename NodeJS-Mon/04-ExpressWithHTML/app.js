const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");
const app = express();

app.use(bodyParser.urlencoded());

const PORT = 9999;
const server = http.createServer(app);

app.use(indexRoutes);
app.use(adminRoutes);

// to serve static files like CSS, Images...
app.use(express.static(path.join(__dirname, "public")));

server.listen(PORT, () => {
    console.log("Server started at :",PORT);
});