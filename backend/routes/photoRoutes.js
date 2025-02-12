const express = require('express');
const router = express.Router();
const { getPhotos } = require('../controllers/photoController');

// default route to get photos
router.get('/', getPhotos);

module.exports = router;
