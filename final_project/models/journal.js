const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const journalSchema = new Schema({
  city: String,
  geolocation:{
      latitude: Number,
      longitude: Number,
    },
  days: [],
});

const journalSchema = mongoose.model("Journal", journalSchema);
module.exports = Journal;