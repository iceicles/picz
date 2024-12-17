const express = require('express');
const router = express.Router();

const { createAlbum, getAllAlbums } = require('../controller/albumController');

router.route('/').post(createAlbum).get(getAllAlbums);

module.exports = router;
