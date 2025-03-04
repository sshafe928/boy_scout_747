const News = require('../models/news');

const getNews = async (req, res) => {
    try {
        const news = await News.find({});
        res.status(200).json({ success: true, data: news });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getNews };
