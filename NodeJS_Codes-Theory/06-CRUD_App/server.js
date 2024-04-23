const express = require("express");
const mongoose = require("mongoose");
const app = express();

const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

mongoose.connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.2")
    .then(() => {
        console.log("MongoDB Connected...");
    })
    .catch((e) => {
        console.log("Error while connecting with MongoDB",e);
    });


// to handle JSON
app.use(express.json());

// For API Call
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server started at :",PORT);
})
