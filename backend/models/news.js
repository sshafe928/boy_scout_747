const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true },
    img_url: { type: String, required: true},
}, { collection: 'Mock_News' });

module.exports = mongoose.model('News', newsSchema);
