const express = require('express');
const router = express.Router();
const { getNews, updateNews, deleteNews } = require('../controllers/newsController');

router.get('/', getNews);

router.put('/:id', updateNews);

router.delete('/:id', deleteNews);

module.exports = router;