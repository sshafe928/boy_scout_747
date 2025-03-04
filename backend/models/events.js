const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    title: { type: String, required: true },
    description: { type: String },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    img_url: { type: String, required: true},
}, { collection: 'Mock_Events' });

module.exports = mongoose.model('Event', eventSchema);
