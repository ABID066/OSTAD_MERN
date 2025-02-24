

const express = require('express');
const router = require('./src/routes/api');
const app = express();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');
const xss = require('xss-clean'); // Note: `xss` might be `xss-clean`
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize'); // Note: might need `express-mongo-sanitize`
const path = require('path');

// Cors
app.use(cors());

// Security
app.use(cookieParser());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));

let limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Mongoose
let URL = 'mongodb+srv://abidAdmin:1234@cluster0.z72chbc.mongodb.net/Ecommerce';
let OPTION = { user: '', autoIndex: true };
mongoose.connect(URL, OPTION)
    .then(() => {
        console.log('Connected');
    })
    .catch((err) => {
        console.log(err);
    });

// Route
try {
    app.use('/api/v1', router);
} catch (err) {
    console.error('Error with router:', err);
}


module.exports = app;
