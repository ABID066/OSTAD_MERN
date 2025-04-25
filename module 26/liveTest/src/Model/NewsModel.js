const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false  // optional field
    },
    publishDate: {
        type: Date,
        required: true,
        default: Date.now
    }
},{versionKey: false});

const News = mongoose.model('News', newsSchema);

module.exports = News;
