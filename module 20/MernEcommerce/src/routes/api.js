const express = require('express');
const ProductController = require("../controllers/ProductController");
const router = express.Router();


//Product
router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByBrand/:brandID',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:categoryID',ProductController.ProductListByCategory)
router.get('/ProductListBySmilier/:categoryID',ProductController.ProductListBySmilier)
router.get('/ProductListByKeyword/:keyword',ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:remark',ProductController.ProductListByRemark)
router.get('/ProductDetails/:productID',ProductController.ProductDetails)
//router.get('/ProductBrandList/:productID',ProductController)
router.get('/ProductReviewList/:productID',ProductController.ProductReviewList)


//User


module.exports = router;
