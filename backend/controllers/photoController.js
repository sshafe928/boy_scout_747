const Photo = require('../models/Photos');

// Gets a list of the photos found using the Photos.js in models
const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.status(200).json({ success: true, data: photos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Exports the photos gotten to be used elsewhere
module.exports = { getPhotos };
