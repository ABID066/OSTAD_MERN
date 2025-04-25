const News = require('../Model/NewsModel');  // Import the News model

// Create a news article
exports.createNews = async (req, res) => {
    try {
        const { headline, summary, content, category, image, publishDate } = req.body;
        const news = new News({ headline, summary, content, category, image, publishDate });
        await news.save();
        res.status(201).json(news);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// List all news articles
exports.getAllNews = async (req, res) => {
    try {
        const newsArticles = await News.find();
        res.status(200).json(newsArticles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single news article by ID
exports.getNewsById = async (req, res) => {
    try {
        const newsArticle = await News.findById(req.params.id);
        if (!newsArticle) {
            return res.status(404).json({ message: 'News article not found' });
        }
        res.status(200).json(newsArticle);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a news article
exports.updateNews = async (req, res) => {
    try {
        const updatedArticle = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedArticle) {
            return res.status(404).json({ message: 'News article not found' });
        }
        res.status(200).json(updatedArticle);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a news article
exports.deleteNews = async (req, res) => {
    try {
        const deletedArticle = await News.findByIdAndDelete(req.params.id);
        if (!deletedArticle) {
            return res.status(404).json({ message: 'News article not found' });
        }
        res.status(200).json({ message: 'News article deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
