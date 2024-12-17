const express = require('express');
const router = express.Router();

const { createAlbum, getAllAlbums } = require('../controller/albumController');
const { uploadAlbumImageLocal } = require('../controller/uploadsController');

router.route('/').post(createAlbum).get(getAllAlbums);
router.route('/uploads').post(uploadAlbumImageLocal);

module.exports = router;
