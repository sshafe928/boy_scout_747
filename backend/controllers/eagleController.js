const Eagle = require('../models/eagles');

const getEagles = async (req, res) => {
  try {
    const eagles = await Eagle.find();
    res.json({ success: true, data: eagles });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch eagles' });
  }
};

const updateEagle = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEagle = await Eagle.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedEagle) {
      return res.status(404).json({ success: false, message: 'Eagle not found' });
    }
    res.json({ success: true, data: updatedEagle });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update eagle' });
  }
};

const deleteEagle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEagle = await Eagle.findByIdAndDelete(id);
    if (!deletedEagle) {
      return res.status(404).json({ success: false, message: 'Eagle not found' });
    }
    res.json({ success: true, message: 'Eagle deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete eagle' });
  }
};

module.exports = { getEagles, updateEagle, deleteEagle };