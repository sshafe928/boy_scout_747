const express = require('express');
const router = express.Router();
const { getNews, createNews } = require('../controllers/newsController');

router.get('/', getNews);
router.post('/', createNews);

module.exports = router;
