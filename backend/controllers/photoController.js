const Photo = require('../models/photos');

const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.status(200).json({ success: true, data: photos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updatePhoto = async (req, res) => {
  const { id } = req.params;
  const { title, type, description, tags, uploader, uploaded_at } = req.body;

  try {
    const photo = await Photo.findById(id);
    if (!photo) {
      return res.status(404).json({ success: false, message: 'Photo not found' });
    }

    photo.title = title || photo.title;
    photo.type = type || photo.type;
    photo.description = description || photo.description;
    photo.tags = tags || photo.tags;
    photo.uploader = uploader || photo.uploader;
    photo.uploaded_at = uploaded_at || photo.uploaded_at;

    await photo.save();

    res.status(200).json({ success: true, data: photo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating photo' });
  }
};

const deletePhoto = async (req, res) => {
  try {
      const photoId = req.params.id; 
      const photo = await Photo.findById(photoId); 

      if (!photo) {
          return res.status(404).json({ message: 'Photo not found' });
      }

      await Photo.findByIdAndDelete(photoId);


      return res.status(200).json({ success: true, message: 'Photo deleted successfully' });
  } catch (err) {
      console.error('Error deleting photo:', err);
      return res.status(500).json({ message: 'Error deleting photo' });
  }
};

module.exports = { getPhotos, updatePhoto, deletePhoto };
