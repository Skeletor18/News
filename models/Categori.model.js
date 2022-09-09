const mongoose = require("mongoose");

const categoriSchema = mongoose.Schema({
  nameCategori: String,
});

const Categori = mongoose.model('Categori', categoriSchema);

module.exports = Categori;