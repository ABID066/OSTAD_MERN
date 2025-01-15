const express = require('express');
const router = require("./src/routes/api")
const app = express();

//Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss =require("xss-clean")
const cors = require("cors");


app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());


const limiter = rateLimit({
    windowMs: 60*15*1000,
    max: 100
})
app.use(limiter);




app.use("/api/v1",router)

//Undefined Route
app.use("*",(req, res)  =>{
    res.status(404).json({msg:"Not Found"})
})


module.exports = app;