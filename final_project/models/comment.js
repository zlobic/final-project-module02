const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  place: {type: Schema.Types.ObjectId, ref: 'Place'}
},{ 
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;