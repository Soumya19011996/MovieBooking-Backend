const db = require("./models");
const express = require("express");
bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// const http = require("http");
// const server = http.createServer(function (request, response) {
//   // if (request.url == "/movies") {
//   //   if (request.method == "GET") {
//   //     response.write("All Movies Data in JSON format from Mongo DB");
//   //   }
//   // } else if (request.url == "/genres") {
//   //   if (request.method == "GET") {
//   //     response.write("All Genres Data in JSON format from Mongo DB");
//   //   }
//   // } else if (request.url == "/artists") {
//   //   if (request.method == "GET") {
//   //     response.write("All Artists Data in JSON format from Mongo DB");
//   //   }
//   // }
//   response.end();
// });

// server.listen(9000, () => {
//   console.log(`server started at port 9000`);
// });
app.get("/", (request, response) => {
  response.json({ message: "Movie booking application." });
});

require("./routes/genre.routes")(app);
require("./routes/artist.routes")(app);
require("./routes/movie.routes")(app);
require("./routes/user.routes")(app);
app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});
