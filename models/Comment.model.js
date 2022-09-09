const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  nameCamment: String,
  textCamment: String,
  theNewHeWrote: {
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
