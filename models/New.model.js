const mongoose = require("mongoose");

const newSchema = mongoose.Schema({
  title: String,
  text: String,
  categoriesID:{
    type: mongoose.SchemaTypes.ObjectId
  }
});

const New = mongoose.model('New', newSchema);

module.exports = New;