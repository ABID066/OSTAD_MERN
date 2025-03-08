const express = require('express');
const router = require("./src/routes/api")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" })

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


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));


const limiter = rateLimit({
    windowMs: 60*15*1000,
    max: 100
})
app.use(limiter);

app.use(bodyParser.json())
app.use(cookieParser());

//Database connection

let URL= process.env.URL;

let OPTION = {user:"", autoIndex: true}
mongoose.connect(URL, OPTION).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})

app.use("/api/v1",router)

//Undefined Route
app.use("*",(req, res)  =>{
    res.status(404).json({msg:"Wrong URL"})
})




///////
/*
const ProductsModel = require('./src/Models/ProductModel');



const dummyProducts = Array.from({ length: 5000 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: (Math.random() * 1000).toFixed(2),
    special_price: (Math.random() * 900).toFixed(2),
    image: `https://picsum.photos/200/300?random=${i + 1}`,
    category: ["Electronics", "Accessories", "Home & Kitchen", "Fashion"][Math.floor(Math.random() * 4)],
    subcategory: ["Mobile Phones", "Laptops", "Headphones", "Speakers", "Watches"][Math.floor(Math.random() * 5)],
    remark: ["Best Seller", "Top Rated", "Hot Deal", "Limited Stock", "Best Value"][Math.floor(Math.random() * 5)],
    brand: `Brand ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
    shop: (Math.floor(Math.random() * 10) + 1).toString(),
    shop_name: `Shop ${Math.floor(Math.random() * 10) + 1}`,
    star: (Math.random() * 5).toFixed(1),
    product_code: `P${i + 1}`,
    stock: ["Available", "Limited", "Out of Stock"][Math.floor(Math.random() * 3)]
}));

ProductsModel.insertMany(dummyProducts)
    .then(() => {
        console.log('500 Dummy data inserted successfully');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));

///////

*/






module.exports = app;