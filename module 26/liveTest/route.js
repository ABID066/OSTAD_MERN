const express = require('express');
const router = express.Router();
const newsController = require('./src/Controller/NewsController');  // Import controller functions

// Create a news article
router.post('/', newsController.createNews);

// List all news articles
router.get('/', newsController.getAllNews);

// Get a single news article by ID
router.get('/:id', newsController.getNewsById);

// Update a news article
router.put('/:id', newsController.updateNews);

// Delete a news article
router.delete('/:id', newsController.deleteNews);

module.exports = router;
