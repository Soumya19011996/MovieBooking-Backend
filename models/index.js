const dbdetails = require("../config/db.config");
const mongoose = require("mongoose");
const db = {};
db.url = dbdetails.url;
db.mongoose = mongoose;
db.Movie = require("./movie.model")(mongoose);
db.Artist = require("./artist.model")(mongoose);
db.Genre = require("./genre.model")(mongoose);
db.User = require("./user.model")(mongoose);

module.exports = db;

// module.exports = {
//   Artist: require("./artist"),
//   Genre: require("./genre"),
//   Movie: require("./movie"),
//   User: require("./user"),
// };
