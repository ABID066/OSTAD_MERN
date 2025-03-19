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
const ReportsController = require("../controllers/reports/ReportsController");
const SummaryController = require("../controllers/summary/SummaryController");

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
router.get("/BrandDetailsByID/:id", AuthVerify, BrandController.BrandDetailsByID);
router.get("/BrandList/:pageNO/:perPage/:searchKeyword",AuthVerify,BrandController.BrandList)
router.get("/BrandList/:pageNO/:perPage",AuthVerify,BrandController.BrandList)
router.get("/BrandDropDown",AuthVerify, BrandController.BrandDropDown);
router.delete("/DeleteBrand/:id",AuthVerify,BrandController.BrandDelete);


//Categories
router.post("/CreateCategory", AuthVerify, CategoriesController.CreateCategory);
router.post("/UpdateCategory/:id", AuthVerify, CategoriesController.UpdateCategory);
router.get("/CategoryDetailsByID/:id", AuthVerify, CategoriesController.CategoryDetailsByID);
router.get("/CategoryList/:pageNO/:perPage/:searchKeyword",AuthVerify,CategoriesController.CategoryList)
router.get("/CategoryList/:pageNO/:perPage",AuthVerify,CategoriesController.CategoryList)
router.get("/CategoryDropDown",AuthVerify, CategoriesController.CategoryDropDown);
router.delete("/DeleteCategory/:id",AuthVerify, CategoriesController.DeleteCategory);

//Customers
router.post("/CreateCustomer", AuthVerify, CustomersController.CreateCustomer);
router.post("/UpdateCustomer/:id", AuthVerify, CustomersController.UpdateCustomer);
router.get("/CustomerDetailsByID/:id", AuthVerify, CustomersController.CustomerDetailsByID);
router.get("/CustomerList/:pageNO/:perPage/:searchKeyword",AuthVerify,CustomersController.CustomerList)
router.get("/CustomerList/:pageNO/:perPage",AuthVerify,CustomersController.CustomerList)
router.get("/CustomerDropDown",AuthVerify, CustomersController.CustomerDropDown);
router.delete("/DeleteCustomer/:id", AuthVerify, CustomersController.DeleteCustomer);

//Suppliers
router.post("/CreateSupplier", AuthVerify, SuppliersController.CreateSupplier);
router.post("/UpdateSupplier/:id", AuthVerify, SuppliersController.UpdateSupplier);
router.get("/SupplierDetailsByID/:id", AuthVerify, SuppliersController.SupplierDetailsByID);
router.get("/SupplierList/:pageNO/:perPage/:searchKeyword",AuthVerify,SuppliersController.SupplierList)
router.get("/SupplierList/:pageNO/:perPage",AuthVerify,SuppliersController.SupplierList)
router.get("/SupplierDropDown",AuthVerify, SuppliersController.SupplierDropDown);
router.delete("/DeleteSupply/:id", AuthVerify, SuppliersController.DeleteSupply)

//ExpenseTypes
router.post("/CreateExpenseTypes", AuthVerify, ExpenseTypesController.CreateExpenseTypes);
router.post("/UpdateExpenseTypes/:id", AuthVerify, ExpenseTypesController.UpdateExpenseTypes);
router.get("/ExpenseTypesDetailsByID/:id", AuthVerify, ExpenseTypesController.ExpenseTypesDetailsByID);
router.get("/ExpenseTypesList/:pageNO/:perPage/:searchKeyword",AuthVerify,ExpenseTypesController.ExpenseTypesList)
router.get("/ExpenseTypesList/:pageNO/:perPage",AuthVerify,ExpenseTypesController.ExpenseTypesList)
router.get("/ExpenseTypesDropDown", AuthVerify, ExpenseTypesController.ExpenseTypesDropDown);
router.delete("/DeleteExpenseTypes/:id", AuthVerify, ExpenseTypesController.DeleteExpenseTypes);

//Expenses
router.post("/CreateExpenses", AuthVerify, ExpensesController.CreateExpenses);
router.post("/UpdateExpenses/:id", AuthVerify, ExpensesController.UpdateExpenses);
router.get("/ExpensesDetailsByID/:id", AuthVerify, ExpensesController.ExpenseDetailsByID);
router.get("/ExpenseList/:pageNO/:perPage/:searchKeyword",AuthVerify, ExpensesController.ExpenseList)
router.get("/ExpenseList/:pageNO/:perPage",AuthVerify, ExpensesController.ExpenseList)
router.delete("/DeleteExpense/:id", AuthVerify, ExpensesController.DeleteExpense);

//Products
router.post("/CreateProducts", AuthVerify, ProductsController.CreateProduct);
router.post("/UpdateProducts/:id", AuthVerify, ProductsController.UpdateProduct);
router.get("/ProductDetailsByID/:id", AuthVerify, ProductsController.ProductDetailsByID);
router.get("/ProductList/:pageNO/:perPage/:searchKeyword", AuthVerify, ProductsController.ProductList);
router.get("/ProductList/:pageNO/:perPage", AuthVerify, ProductsController.ProductList);
router.delete("/DeleteProduct/:id", AuthVerify,  ProductsController.DeleteProduct);

//Purchases
router.post("/CreatePurchases",AuthVerify, PurchasesController.CreatePurchases);
router.get("/PurchasesList/:pageNO/:perPage/:searchKeyword",AuthVerify, PurchasesController.PurchasesList);
router.get("/PurchasesList/:pageNO/:perPage",AuthVerify, PurchasesController.PurchasesList);
router.delete("/PurchasesDelete/:id", AuthVerify, PurchasesController.PurchasesDelete)

//Sales
router.post("/CreateSales",AuthVerify, SalesController.CreateSales);
router.get("/SalesList/:pageNO/:perPage/:searchKeyword",AuthVerify, SalesController.SalesList);
router.get("/SalesList/:pageNO/:perPage",AuthVerify, SalesController.SalesList);
router.delete("/SalesDelete/:id", AuthVerify, SalesController.SalesDelete);

//Returns
router.post("/CreateReturns",AuthVerify, ReturnsController.CreateReturns);
router.get("/ReturnList/:pageNO/:perPage/:searchKeyword",AuthVerify, ReturnsController.ReturnList);
router.get("/ReturnList/:pageNO/:perPage",AuthVerify, ReturnsController.ReturnList);
router.delete("/ReturnDelete/:id", AuthVerify, ReturnsController.ReturnDelete);

//Report
router.post("/ExpensesByDate", AuthVerify, ReportsController.ExpensesByDate);
router.post("/PurchaseByDate", AuthVerify, ReportsController.PurchaseByDate);
router.post("/ReturnByDate", AuthVerify, ReportsController.ReturnByDate);
router.post("/SalesByDate", AuthVerify, ReportsController.SalesByDate);

//Report
router.get("/ExpensesSummary", AuthVerify, SummaryController.ExpensesSummary);
router.get("/PurchaseSummary", AuthVerify, SummaryController.PurchaseSummary);
router.get("/ReturnSummary", AuthVerify, SummaryController.ReturnSummary);
router.get("/SalesSummary", AuthVerify, SummaryController.SalesSummary);


module.exports = router;