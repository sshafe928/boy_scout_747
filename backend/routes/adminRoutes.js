const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const bcrypt = require('bcryptjs');
const { loginAdmin, getAdmins, deleteAdmin } = require('../controllers/adminController');
require('dotenv').config();

const Event = require("../models/events");
const Photo = require("../models/photos");
const Admin = require("../models/Admin");
const News = require("../models/news");
const Eagle = require("../models/eagles");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'WBLA',
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'projectImage', maxCount: 1 },
]);

router.post('/login', loginAdmin);
router.get('/', getAdmins);
router.delete('/deleteAdmin/:id', deleteAdmin);

router.post('/createAdmin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: 'Admin already exists' });
    }

    const newAdmin = new Admin({
      email,
      password,
    });

    await newAdmin.save();

    res.json({ success: true, message: 'Admin created successfully', admin: newAdmin });
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ success: false, message: 'Error creating admin' });
  }
});

router.post('/uploadPhoto', upload, async (req, res) => {
  if (!req.files || !req.files['image']) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  try {
    const result = await cloudinary.uploader.upload(req.files['image'][0].path);

    let resultProject = null;
    if (req.files['projectImage']) {
      resultProject = await cloudinary.uploader.upload(req.files['projectImage'][0].path);
    }

    switch (req.body.type) {
      case 'event':
        const newEvent = new Event({
          title: req.body.title,
          type: req.body.type,
          description: req.body.description,
          location: req.body.location,
          start: req.body.start,
          end: req.body.end,
          img_url: result.secure_url,
        });
        await newEvent.save();
        res.json({ success: true, message: 'Event created successfully with image!', event: newEvent });
        break;

      case 'photo':
        const newPhoto = new Photo({
          title: req.body.title,
          uploader: req.body.uploader,
          description: req.body.description,
          tags: req.body.tags,
          uploaded_at: req.body.uploaded_at,
          image_url: result.secure_url,
        });
        await newPhoto.save();
        res.json({ success: true, message: 'Photo added successfully with image!', photo: newPhoto });
        break;
      
      case 'eagle':
        const newEagle = new Eagle({
          name: req.body.name,
          description: req.body.description,
          date: req.body.date,
          rank: req.body.rank,
          img_url: result.secure_url,
          img_url_project: resultProject ? resultProject.secure_url : null,
        });
        await newEagle.save();
        res.json({ success: true, message: 'Eagle added successfully with image!', eagle: newEagle });
        break;

      case 'news':
        const newNews = new News({
          title: req.body.title,
          description: req.body.description,
          location: req.body.location,
          date: req.body.date,
        });
        await newNews.save();
        res.json({ success: true, message: 'News added successfully!', news: newNews });
        break;
      
      default:
        res.status(400).json({ success: false, message: 'Invalid type specified. Expected "event", "photo", "eagle", or "news".' });
        break;
    }
  } catch (error) {
    console.error("Error uploading to Cloudinary or saving data:", error);
    return res.status(500).json({ success: false, message: 'Error uploading image or saving data' });
  }
});

module.exports = router;
