


const Post = require("../models/postModel");

exports.createPost = async (req, res, next) => {
    try {
        const posts = await Post.create(req.body);
        res.status(200).json({
            status: "Success",
            data: {
                posts
            }
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed to create post..."
        });
    }
}

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            "status" : "Success",
            results: posts.length,
            data: {
                posts
            }
        })
    } catch (error) {
        res.status(401).json({
            status: "Failed to get all posts..."
        });
    }
}