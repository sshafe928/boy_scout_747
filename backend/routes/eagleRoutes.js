const express = require('express');
const router = express.Router();
const { getEagles } = require('../controllers/eagleController');

router.get('/', getEagles);

module.exports = router;
