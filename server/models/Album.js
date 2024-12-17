const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image'],
  },
});

module.exports = mongoose.model('Album', AlbumSchema);
