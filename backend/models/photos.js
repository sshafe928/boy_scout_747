const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  image_url: { type: String, required: true },
  uploaded_at: { type: Date, default: Date.now },
  tags: { type: [String] },
  uploader: { type: String }
}, { 
  collection: 'Mock_Photos' 
});

module.exports = mongoose.model('Photo', photoSchema);
