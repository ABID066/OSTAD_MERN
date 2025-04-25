const express = require('express');
const mongoose = require('mongoose');
const newsRoutes = require('./route');  // Import the routes from route.js

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Connect to MongoDB
let URL ="mongodb://localhost:27017/newsDB"
let OPTION = {user:"", autoIndex: true}
mongoose.connect(URL, OPTION).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})

// Use the routes from route.js
app.use('/api/news', newsRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
