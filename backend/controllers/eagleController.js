const Eagle = require('../models/eagles');

const getEagles = async (req, res) => {
    try {
        const eagles = await Eagle.find({});
        res.status(200).json({ success: true, data: eagles });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getEagles };
