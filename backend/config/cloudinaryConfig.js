const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_KEY_SECRET
});

// Makes a storage for new images and defines the usable image formats
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    // folder: 'PetImages',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

module.exports = {
  cloudinary,
  storage
};

// Edit to adjust to adding name and description through Admin Page, also rename names to adjust to the new project