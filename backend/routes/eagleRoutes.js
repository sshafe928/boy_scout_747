const express = require('express');
const router = express.Router();
const { getEagles, updateEagle, deleteEagle} = require('../controllers/eagleController');

router.get('/', getEagles);


router.put('/:id', updateEagle);

router.delete('/:id', deleteEagle);

module.exports = router;