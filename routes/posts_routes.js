// importing Express and creating a Router instance:
const express = require("express");
const router = express.Router();
// importing the controller functions that will handle the logic for each route.
const postController = require("../controllers/posts_controller");
// setting Up the routes:
router.get("/", postController.getAllPosts);
router.post("/", postController.createPost);
router.delete("/", postController.deletePost);
//exporting the router so that it can be imported and used in other parts of your application. F
module.exports = router;
