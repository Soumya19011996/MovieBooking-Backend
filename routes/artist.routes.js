module.exports = (app) => {
  const artists = require("../controllers/artist.controller");
  var router = require("express").Router();
  router.get("/", artists.findAllArtists);
  app.use("/artists", router);
};
