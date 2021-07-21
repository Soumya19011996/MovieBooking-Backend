module.exports = (mongoose) => {
  const Genre = mongoose.model(
    "Genre",
    mongoose.Schema({
      genreid: { type: Number, required: true },
      genre: { type: String, required: true },
    })
  );

  return Genre;
};
