const db = require("../models");
const Artist = db.Artist;

exports.findAllArtists = (req, res) => {
  const artist = req.query.artist;
  Artist.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Courses.",
      });
    });
};
