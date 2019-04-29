const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const journalSchema = new Schema({
  name: String,
  city: String,
  firstday: Date,
  days: [],
  author: { type: Schema.Types.ObjectId, ref: "User"} ,
  places: [{ type: Schema.Types.ObjectId, ref: "Place"}]
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Journal = mongoose.model("Journal", journalSchema);
module.exports = Journal;