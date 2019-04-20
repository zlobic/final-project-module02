const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  user_id: String,
  place_id: String,
  place: {type: Schema.Types.ObjectId, ref: 'place'}
},{ 
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;