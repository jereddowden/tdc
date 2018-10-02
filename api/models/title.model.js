const mongoose = require('mongoose');

const titleSchema = new mongoose.Schema({
  Awards: Array,
  Genres: Array,
  OtherNames: Array,
  Participants: Array,
  ReleaseYear: Number,
  Storylines: Array,
  TitleId: Number,
  TitleName: String,
  TitleNameSortable: String,
  _id: String
});

module.exports = mongoose.model('Title', titleSchema, 'Titles');
