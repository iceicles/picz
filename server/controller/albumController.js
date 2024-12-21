const { NotFoundError } = require('../errors');
const Album = require('../models/Album');

const createAlbum = async (req, res) => {
  const album = await Album.create(req.body);
  res.status(201).json({ album });
};

const getAllAlbums = async (req, res) => {
  const albums = await Album.find({}).sort('-createdAt');
  res.status(200).json({ albums });
};

const deleteAlbum = async (req, res) => {
  const { id: albumId } = req.body;
  const album = await Album.findByIdAndDelete({ _id: albumId });
  if (!album) {
    throw new NotFoundError(`No album with id ${albumId}`);
  }

  res.status(200).send();
};

module.exports = {
  createAlbum,
  getAllAlbums,
  deleteAlbum,
};
