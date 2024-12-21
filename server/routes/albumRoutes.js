const express = require('express');
const router = express.Router();

const {
  createAlbum,
  getAllAlbums,
  deleteAlbum,
} = require('../controller/albumController');
const { uploadAlbumImageLocal } = require('../controller/uploadsController');

router.route('/').post(createAlbum).get(getAllAlbums).delete(deleteAlbum);
router.route('/uploads').post(uploadAlbumImageLocal);

module.exports = router;
