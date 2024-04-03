const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// localhost:3000
router.route("/").get(postController.getAllPosts).post(postController.createPost);


// localhost:3000/:id
router.route("/:id").get(postController.getOnePost).delete(postController.deletePost);

module.exports = router;
