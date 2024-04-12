const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const homeRoutes = require("./routes/home");
const authRoutes = require("./routes/userAuth");

const PORT = 5000;

app.use(bodyParser.urlencoded());
app.use(homeRoutes);
app.use(authRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log("Server started at :",PORT);
});