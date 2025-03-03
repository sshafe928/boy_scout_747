const Photo = require('../models/Photos');

const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.status(200).json({ success: true, data: photos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getPhotos };
