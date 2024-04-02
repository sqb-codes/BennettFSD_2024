const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// localhost:3000
router.route("/").get(postController.getAllPosts).post(postController.createPost);

module.exports = router;
