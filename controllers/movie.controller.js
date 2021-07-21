const db = require("../models");
const Movie = db.Movie;

//findAllMovies() - to search the movie by status.
exports.findAllMovies = (req, res) => {
  const status = req.query.status;
  if (status == undefined) {
    Movie.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else if (status === "PUBLISHED" || status === "published") {
    var condition = { published: true };
    Movie.find(condition)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Courses.",
        });
      });
  } else if (status === "RELEASED" || status === "released") {
    var condition = { released: true };
    if (req.query.title != undefined) {
      condition = { released: true, title: req.query.title };
      if (req.query.genres != undefined) {
        condition = {
          released: true,
          title: req.query.title,
          genres: req.query.genres,
        };
        if (req.query.artists.artistId != undefined) {
          condition = {
            released: true,
            title: req.query.title,
            genres: req.query.genres,
            artists: req.query.artists.artistId,
          };
          if (req.query.start_date != undefined) {
            condition = {
              released: true,
              title: req.query.title,
              genres: req.query.genres,
              artists: req.query.artists,
              start_date: req.query.release_date,
            };
            if (req.query.end_date != undefined) {
              condition = {
                released: true,
                title: req.query.title,
                genres: req.query.genres,
                artists: req.query.artists,
                start_date: req.query.release_date,
                end_date: req.query.publish_date,
              };
            }
          }
        }
      }
    }

    Movie.find(condition)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Courses.",
        });
      });
  }
};

//findOne() - to fetch all details of a movie given its id.
exports.findOne = (req, res) => {
  const id = req.params.id;
  Movie.find({ movieid: id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

//findShows() - to fetch details of shows of a specific movie given its id.
exports.findShows = (request, response) => {
  const id = request.params.id;
  Movie.find({ movieid: id }, { shows: 1 })
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.status(500).send({
        message: err.message,
      });
    });
};
