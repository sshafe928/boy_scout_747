const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true},
}, { collection: 'Mock_Events' });

module.exports = mongoose.model('Event', eventSchema);