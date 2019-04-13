const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  geolocation:{
    latitude: Number,
    longitude: Number,
    },
  rating: Number,
  hours: String,
  description: String,
  comments: []
});

const placeSchema = mongoose.model("Place", placeSchema);
module.exports = Place;