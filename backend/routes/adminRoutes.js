const express = require('express');
const router = express.Router();
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const { loginAdmin, getAdmins } = require('../controllers/adminController');

//configure cloudinary storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
        params: {
            folder: 'WBLA',
            allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
            public_id: (req,file) => file.originalname
        },
})
const upload = multer({ storage })

router.post('/login', loginAdmin);
router.get('/', getAdmins);

module.exports = router;
