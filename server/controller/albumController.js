const Album = require('../models/Album');

const createAlbum = async (req, res) => {
  const album = await Album.create(req.body);
  res.status(201).json({ album });
};

const getAllAlbums = async (req, res) => {
  const albums = await Album.find({});
  res.status(200).json({ albums });
};

module.exports = {
  createAlbum,
  getAllAlbums,
};
