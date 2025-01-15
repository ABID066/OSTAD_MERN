const express = require('express');
const app= new express()
const router = require("./src/routes/api")


//Security Middleware
const rateLimit= require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const bodyParser = require('body-parser');
const xss =require("xss-clean")
const mongoSanitize = require("express-mongo-sanitize");


app.use(hpp());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(xss());
app.use(mongoSanitize());

const limiter = rateLimit({
    windowMs: 1000*60*15,
    max: 100
})
app.use(limiter);


app.use("/api/v1", router)

//Undefinded Route
app.use("*", (req, res) =>{
    res.status(404).send('Not Found');
})

module.exports = app;