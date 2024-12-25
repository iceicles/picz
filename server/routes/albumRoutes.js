const express = require('express');
const router = express.Router();

const {
  createAlbum,
  getAllAlbums,
  deleteAlbum,
} = require('../controller/albumController');
const { uploadAlbumImageCloud } = require('../controller/uploadsController');

router.route('/').post(createAlbum).get(getAllAlbums).delete(deleteAlbum);
router.route('/uploads').post(uploadAlbumImageCloud);

module.exports = router;
