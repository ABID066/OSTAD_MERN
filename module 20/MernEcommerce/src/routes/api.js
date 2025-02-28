const express = require('express');
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const WishListController = require("../controllers/WishListController");
const router = express.Router();
const AuthVerification = require("../midddlewares/AuthVerification");
const CartController = require("../controllers/CartListController");
const InvoiceController = require("../controllers/InvoiceController");



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
router.get("/UserRegistration/:email",UserController.UserRegistrationAsOTP)
router.get("/UserLoginVerify/:email/:otp",UserController.UserLoginVerify)
router.get("/UserLogout",AuthVerification,UserController.UserLogout)

router.post("/CreateProfile",AuthVerification,UserController.CreateUserProfile)
router.post("/UpdateProfile",AuthVerification,UserController.UpdateUserProfile)
router.get("/ReadProfile",AuthVerification,UserController.ReadUserProfile)


//wishList
router.post("/SaveWishList",AuthVerification,WishListController.SaveWishList)
router.post("/RemoveWishList",AuthVerification,WishListController.RemoveWishList)
router.get("/WishLists",AuthVerification,WishListController.WishList)


//cartList
router.post("/SaveCartList",AuthVerification,CartController.SaveCartList)
router.post("/UpdateCartList/:CartID",AuthVerification,CartController.UpdateCartList)
router.post("/RemoveCartList",AuthVerification,CartController.RemoveCartList)
router.get("/CartLists",AuthVerification,CartController.CartList)


//Invoice & Payment
router.get("/CreateInvoice",AuthVerification,InvoiceController.CreateInvoice)
router.get("/InvoiceList",AuthVerification,InvoiceController.InvoiceList)
router.get("/InvoiceProductList/invoiceID",AuthVerification,InvoiceController.InvoiceProductList)

router.post("/PaymentSuccess/:trxID",AuthVerification,InvoiceController.PaymentSuccess)
router.post("/PaymentCancel/:trxID",AuthVerification,InvoiceController.PaymentCancel)
router.post("/PaymentFail/:trxID",AuthVerification,InvoiceController.PaymentFail)
router.post("/PaymentIPN/:trxID",AuthVerification,InvoiceController.PaymentIPN)

module.exports = router;
