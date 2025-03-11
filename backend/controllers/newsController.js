const News = require('../models/news');

//function to get all news
const getNews = async (req, res) => {
    try {
        const news = await News.find({});
        res.status(200).json({ success: true, data: news });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// function to create news
const createNews = async (req, res) => {
    try {
        const { title, description, location } = req.body;
        
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        const newNews = new News({
            title,
            description,
            location,
        });

        await newNews.save();
        return res.status(201).json({ message: 'News created successfully', news: newNews });
    } catch (error) {
        console.error('Error creating news:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { getNews, createNews };
