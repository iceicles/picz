const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      minlength: 5,
      maxlength: 30,
    },
    image: {
      type: String,
      required: [true, 'Please provide an image'],
    },
  },
  // createdAt and updatedAt properties automatically added by mongoose
  { timestamps: true }
);

module.exports = mongoose.model('Album', AlbumSchema);
