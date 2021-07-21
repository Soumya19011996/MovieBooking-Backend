const db = require("../models");
const Genre = db.Genre;

// exports.genre = (request, response) => {
//   if (!request.body.genreid) {
//     response.status(400).send({ message: "Please provide a Genre id" });
//   }

exports.findAllGenres = (req, res) => {
  const genre = req.query.genre;
  Genre.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Courses.",
      });
    });
};
