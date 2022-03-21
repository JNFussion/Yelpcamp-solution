var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CampgroundSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

CampgroundSchema.virtual("url").get(function () {
  return "/campground/" + this._id;
});

module.exports = mongoose.model("Campground", CampgroundSchema);
