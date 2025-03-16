const express = require("express");
const router = require("./src/routes/api");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const cors = require("cors");

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser (No Need for body-parser Package)
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // ✅ Fix warning

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `windowMs`
});
app.use(limiter);

// ✅ Remove bodyParser.json() since express.json() is already used

// Database Connection
let URL = process.env.URL;

mongoose.connect(URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.error("Database Connection Error:", err));


// Routes
app.use("/api/v1", router);

// Undefined Route Handler
app.use("*", (req, res) => {
    res.status(404).json({ msg: "Wrong URL" });
});

module.exports = app;
