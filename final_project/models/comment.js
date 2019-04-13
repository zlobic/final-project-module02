const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  user_id: String,
  place_id: String,
});

const commentSchema = mongoose.model("Comment", commentSchema);
module.exports = Comment;