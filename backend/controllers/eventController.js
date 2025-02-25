const Event = require('../models/events');

const getEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json({ success: true, data: events });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getEvents };
