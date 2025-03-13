const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { loginAdmin, getAdmins } = require('../controllers/adminController');

// Configure cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'WBLA', // Folder on Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
    public_id: (req, file) => file.originalname, // Use the original file name as the public_id
  },
});
const upload = multer({ storage });

// Routes
router.post('/login', loginAdmin);
router.get('/', getAdmins);

// Photo upload route
router.post('/uploadPhoto', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  // The uploaded file's information is available in req.file
  const imageUrl = req.file.path; // The URL of the uploaded image from Cloudinary

  // Send back the Cloudinary URL to the frontend
  res.json({
    success: true,
    message: 'Image uploaded successfully!',
    imageUrl: imageUrl, // Send back the image URL
  });
});

module.exports = router;
