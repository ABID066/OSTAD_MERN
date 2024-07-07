

const express =require('express');
const router = require('./src/routes/api');
const app = new express();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors= require('cors');
const mongoose = require('mongoose');

//Cors
app.use(cors());

//Security
app.use(helmet())
app.use(hpp())
app.use(express.json({limit:'20mb'}))
app.use(express.urlencoded({extended: true}))

let limiter = rateLimit({windowMs: 15*60*1000,max: 3000})
app.use(limiter);

//Mongoose
let URL = "mongodb+srv://abidAdmin:1234@cluster0.z72chbc.mongodb.net/CRUD_Application"
let OPTION = {user:"", autoIndex: true}
mongoose.connect(URL, OPTION).then((res)=>{
    console.log("Connected")
}).catch((err)=>{
    console.log(err)
})



//Route
app.use("/api/v1", router);

//404 not found
app.use("*",(req,res)=>{
    res.status(404).json({data: "Not & Nor Found"})
})

module.exports=app;