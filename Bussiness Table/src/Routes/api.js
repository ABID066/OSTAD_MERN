
const express = require('express');
const {ProductList} = require("../Controllers/ProductController");


const router = express.Router();



router.get('/ProductList/:pageNo/:perPage/:searchKeyword',ProductList)
router.get('/ProductList/:pageNo/:perPage',ProductList)


module.exports = router;