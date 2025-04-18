const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    uploader: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    uploaded_at: { type: Date, default: Date.now },
    image_url: { type: String, required: true },
  },
  {
    collection: 'Photos',  
  }
);

const Photo = mongoose.models.Photo || mongoose.model('Photo', photoSchema);
console.log('🎯 Photo model collection name:', Photo.collection.name);
module.exports = Photo;