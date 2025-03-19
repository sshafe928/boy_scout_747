const express = require('express');
const router = express.Router();
const { getPhotos, updatePhoto, deletePhoto } = require('../controllers/photoController');

router.get('/', getPhotos);

router.put('/:id', updatePhoto);

router.delete('/:id', deletePhoto);

module.exports = router;
