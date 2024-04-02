

const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title : {
        type: String,
        require: [true, "Post must have a title"]
    },
    body : {
        type: String,
        require: [true, "Post must have a body"]
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;