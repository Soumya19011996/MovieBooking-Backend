// Retrieve all Genres

module.exports = (app) => {
  const genres = require("../controllers/genre.controller");
  var router = require("express").Router();
  router.get("/", genres.findAllGenres);
  app.use("/genres", router);
};
