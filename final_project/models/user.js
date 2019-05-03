const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate')

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  facebookId: String,
  journals: [{ type: Schema.Types.ObjectId, ref: "Journal"}]
},{ 
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);
module.exports = User;