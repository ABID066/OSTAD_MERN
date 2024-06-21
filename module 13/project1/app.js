import express from "express";
import ExpressMongoSanitize from "express-mongo-sanitize";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import cors from 'cors';
import router from "./src/routes/api.js";
import bodyParser from "body-parser";

const app = express();

// Middleware Implementation
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());
app.use(bodyParser.json());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Disable Response Cache
app.set('etag', false);

// Request Size limit
app.use(express.json({ limit: '20MB' }));
app.use(express.urlencoded({ limit: '20MB', extended: true }));
app.use(ExpressMongoSanitize());

// Database Connection
const URI = "mongodb://127.0.0.1:27017/Schools";
/*
const OPTION = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: '',
    pass: ''
}; */

mongoose.connect(URI)
    .then(() => console.log("Connection success"))
    .catch(error => console.error("Connection error:", error));

// API Route Connect
app.use("/api", router);




export default app;
