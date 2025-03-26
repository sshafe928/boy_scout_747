const News = require('../models/news');

const getNews = async (req, res) => {
    try {
        const news = await News.find({});
        res.status(200).json({ success: true, data: news });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


const updateNews = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, location, date } = req.body;

        const updatedNews = await News.findByIdAndUpdate(
            id,
            { title, description, location, date },
            { new: true }
        );

        if (!updatedNews) {
            return res.status(404).json({ success: false, message: 'News not found' });
        }

        res.status(200).json({ success: true, message: 'News updated successfully', data: updatedNews });
    } catch (error) {
        console.error('Error updating news:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const deleteNews = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedNews = await News.findByIdAndDelete(id);
        
        if (!deletedNews) {
            return res.status(404).json({ success: false, message: 'News not found' });
        }

        res.status(200).json({ success: true, message: 'News deleted successfully' });
    } catch (error) {
        console.error('Error deleting news:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = { getNews, updateNews, deleteNews };