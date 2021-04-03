const mapSchema = mongoose.Schema({
  mapId: { type: mongoose.ObjectId, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  imageURI: { type: String, required: true, unique: true },
});

const Map = (module.exports = mongoose.model("Map", mapSchema));
