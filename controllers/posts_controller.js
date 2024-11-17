const Posts = require("../models/posts_model");
const mongoose = require("mongoose");
const getAllPosts = async (req, res) => {
  let posts;
  const filter = req.query;
  try {
    if (filter.owner) {
      posts = await Posts.find({ owner: filter.owner });
    } else {
      posts = await Posts.find();
    }
    return res.send(posts);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};
const getPostById = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const post = await Posts.findById(new mongoose.Types.ObjectId(id));
      return res.send(posts);
    } else {
      return res.status(404).send("Post Not Found");
    }
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Posts.create(req.body); // Await the result of create()
    res.status(201).send(post); // Send the created post as response
  } catch (err) {
    res.status(400).send(err.message); // Send an error message if something goes wrong
  }
};
const deletePost = (req, res) => {
  res.send("delete a post");
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
};
