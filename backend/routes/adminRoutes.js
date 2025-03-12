const express = require('express');
const router = express.Router();
const { loginAdmin, getAdmins } = require('../controllers/adminController');

router.post('/login', loginAdmin);
router.get('/', getAdmins);

module.exports = router;
