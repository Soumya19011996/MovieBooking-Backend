const mongoose = require("mongoose");

module.exports = (mongoose) => {
  const Movie = mongoose.model(
    "Movie",
    new mongoose.Schema({
      movieid: Number,
      title: String,
      published: Boolean,
      wiki_url: String,
      profile_url: String,
      released: Boolean,
      poster_url: String,
      release_date: String,
      publish_date: String,
      artists: [],
      genres: [],
      duration: Number,
      critic_rating: Number,
      trailer_url: String,
      wiki_url: String,
      story_line: String,
      shows: [],
    })
  );
  return Movie;
};
