const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const daySchema = new Schema({
  date: String,
  places: [],
});

const daySchema = mongoose.model("Day", daySchema);
module.exports = Day;