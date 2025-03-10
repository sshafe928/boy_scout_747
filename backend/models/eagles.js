const mongoose = require('mongoose');

const eagleSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    rank: { type: String, required: true },
    img_url: { type: String, required: true},
}, { collection: 'Eagle_Scouts' });

module.exports = mongoose.model('Eagle', eagleSchema);
