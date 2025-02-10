const express = require('express');
const router = express.Router();
const { registerUser, loginUser, deleteUser } = require('../controllers/userController');
const asyncWrapper = require('../middleware/async');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', asyncWrapper(registerUser));
router.post('/login', asyncWrapper(loginUser));

// Delete user by admin
router.post('/delete-user/:id', authMiddleware, asyncWrapper(deleteUser));

module.exports = router;


//Edit to adjust to whatever plan we are working with Admin
//Posibly create more routes for admin routes