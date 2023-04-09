const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  poster_url: {
    type: String,
  },
  rating: {
    type: Number,
  },
  youtube_embed_url: {
    type: String,
  },
});

module.exports = mongoose.model("moviedata", moviesSchema);
