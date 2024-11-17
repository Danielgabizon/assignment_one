const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
  owner: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Posts", postsSchema);