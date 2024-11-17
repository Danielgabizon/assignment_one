const getAllPosts = (req, res) => {
  res.send("get alll posts");
};
const createPost = (req, res) => {
  res.send("create a post");
};
const deletePost = (req, res) => {
  res.send("delete a post");
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
};
