const express = require('express');
const UserController = require("../controllers/UserController");
const {AuthVerify} = require("../middleware/AuthVerifyMiddleware");
const PortfolioController = require("../controllers/PortfolioController");

const router = express.Router();

router.post("/registration",UserController.UserRegistration)
router.post("/login",UserController.UserLogin)

//after login
router.post("/create-portfolio",AuthVerify,PortfolioController.createPortfolio);
router.get("/all",AuthVerify,PortfolioController.readPortfolios);
router.get("/view/:id",AuthVerify,PortfolioController.readOnePortfolio);
router.post("/update-portfolio/:id",AuthVerify,PortfolioController.updatePortfolio);
router.get("/delete-portfolio/:id",AuthVerify,PortfolioController.deletePortfolio);






module.exports = router;