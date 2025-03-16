const express = require('express');
const UsersController = require("../controllers/users/UsersController");
const {AuthVerify} = require("../middlewares/AuthVerifyMiddleware");
const BrandController = require("../controllers/brands/BrandsContorller");
const CategoriesController = require("../controllers/categories/CategoriesContorller");
const CustomersController = require("../controllers/customers/CustomersController");
const SuppliersController = require("../controllers/suppliers/SuppliersController");
const ExpenseTypesController = require("../controllers/expenses/ExpenseTypesController");
const ExpensesController = require("../controllers/expenses/ExpensesContorller");
const ProductsController = require("../controllers/products/ProductsController");
const PurchasesController = require("../controllers/perchases/PurchasesController");
const ReturnsController = require("../controllers/Returns/ReturnsController");
const SalesController = require("../controllers/Sales/SalesController");

const router = express.Router();

//User profile
router.post("/Registration", UsersController.Registration);
router.post("/Login", UsersController.Login);
router.post("/ProfileUpdate", AuthVerify, UsersController.ProfileUpdate);
router.post("/ProfileDetails",AuthVerify, UsersController.ProfileDetails);
router.post("/RecoverVerifyEmail/:email", UsersController.RecoverVerifyEmail);
router.post("/RecoverVerifyOTP/:email/:otp", UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass", UsersController.RecoverResetPass);

//Brands
router.post("/CreateBrand", AuthVerify, BrandController.CreateBrand);
router.post("/UpdateBrand/:id", AuthVerify, BrandController.UpdateBrand);
router.get("/BrandList/:pageNO/:perPage/:searchKeyword",AuthVerify,BrandController.BrandList)
router.get("/BrandList/:pageNO/:perPage",AuthVerify,BrandController.BrandList)
router.get("/BrandDropDown",AuthVerify, BrandController.BrandDropDown);

//Categories
router.post("/CreateCategory", AuthVerify, CategoriesController.CreateCategory);
router.post("/UpdateCategory/:id", AuthVerify, CategoriesController.UpdateCategory);
router.get("/CategoryList/:pageNO/:perPage/:searchKeyword",AuthVerify,CategoriesController.CategoryList)
router.get("/CategoryList/:pageNO/:perPage",AuthVerify,CategoriesController.CategoryList)
router.get("/CategoryDropDown",AuthVerify, CategoriesController.CategoryDropDown);

//Customers
router.post("/CreateCustomer", AuthVerify, CustomersController.CreateCustomer);
router.post("/UpdateCustomer/:id", AuthVerify, CustomersController.UpdateCustomer);
router.get("/CustomerList/:pageNO/:perPage/:searchKeyword",AuthVerify,CustomersController.CustomerList)
router.get("/CustomerList/:pageNO/:perPage",AuthVerify,CustomersController.CustomerList)
router.get("/CustomerDropDown",AuthVerify, CustomersController.CustomerDropDown);

//Suppliers
router.post("/CreateSupplier", AuthVerify, SuppliersController.CreateSupplier);
router.post("/UpdateSupplier/:id", AuthVerify, SuppliersController.UpdateSupplier);
router.get("/SupplierList/:pageNO/:perPage/:searchKeyword",AuthVerify,SuppliersController.SupplierList)
router.get("/SupplierList/:pageNO/:perPage",AuthVerify,SuppliersController.SupplierList)
router.get("/SupplierDropDown",AuthVerify, SuppliersController.SupplierDropDown);

//ExpenseTypes
router.post("/CreateExpenseTypes", AuthVerify, ExpenseTypesController.CreateExpenseTypes);
router.post("/UpdateExpenseTypes/:id", AuthVerify, ExpenseTypesController.UpdateExpenseTypes);
router.get("/ExpenseTypesList/:pageNO/:perPage/:searchKeyword",AuthVerify,ExpenseTypesController.ExpenseTypesList)
router.get("/ExpenseTypesList/:pageNO/:perPage",AuthVerify,ExpenseTypesController.ExpenseTypesList)
router.get("/ExpenseTypesDropDown",AuthVerify, ExpenseTypesController.ExpenseTypesDropDown);

//Expenses
router.post("/CreateExpenses", AuthVerify, ExpensesController.CreateExpenses);
router.post("/UpdateExpenses/:id", AuthVerify, ExpensesController.UpdateExpenses);
router.get("/ExpenseList/:pageNO/:perPage/:searchKeyword",AuthVerify, ExpensesController.ExpenseList)
router.get("/ExpenseList/:pageNO/:perPage",AuthVerify, ExpensesController.ExpenseList)

//Products
router.post("/CreateProducts", AuthVerify, ProductsController.CreateProduct);
router.post("/UpdateProducts/:id", AuthVerify, ProductsController.UpdateProduct);
router.get("/ProductList/:pageNO/:perPage/:searchKeyword", AuthVerify, ProductsController.ProductList);
router.get("/ProductList/:pageNO/:perPage", AuthVerify, ProductsController.ProductList);

//Purchases
router.post("/CreatePurchases",AuthVerify, PurchasesController.CreatePurchases);
router.get("/PurchasesList/:pageNO/:perPage/:searchKeyword",AuthVerify, PurchasesController.PurchasesList)
router.get("/PurchasesList/:pageNO/:perPage",AuthVerify, PurchasesController.PurchasesList)

//Sales
router.post("/CreateSales",AuthVerify, SalesController.CreateSales);
router.get("/SalesList/:pageNO/:perPage/:searchKeyword",AuthVerify, SalesController.SalesList)
router.get("/SalesList/:pageNO/:perPage",AuthVerify, SalesController.SalesList)

//Returns
router.post("/CreateReturns",AuthVerify, ReturnsController.CreateReturns);
router.get("/ReturnList/:pageNO/:perPage/:searchKeyword",AuthVerify, ReturnsController.ReturnList)
router.get("/ReturnList/:pageNO/:perPage",AuthVerify, ReturnsController.ReturnList)

module.exports = router;