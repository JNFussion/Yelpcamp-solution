var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  description: { type: String, required: true },
  create_at: { type: Date, required: true },
  author: { type: String, required: true },
  campground: {
    type: Schema.Types.ObjectId,
    ref: "Campground",
    required: true,
  },
});

CommentSchema.virtual("url").get(function () {
  return "/comment/" + this._id;
});

module.exports = mongoose.model("Comment", CommentSchema);
