const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    month: { type: String, required: true },
    day: { type: String, required: true },
    location: { type: String } 
}, { collection: 'Mock_News' });

module.exports = mongoose.model('News', newsSchema);
