const express = require('express');
const UsersController = require("../controllers/users/UsersController");
const {AuthVerify} = require("../middlewares/AuthVerifyMiddleware");


const router = express.Router();

//User profile
router.post("/Registration", UsersController.Registration);
router.post("/Login", UsersController.Login);
router.post("/ProfileUpdate", AuthVerify, UsersController.ProfileUpdate);
router.post("/ProfileDetails",AuthVerify, UsersController.ProfileDetails);
router.post("/RecoverVerifyEmail/:email", UsersController.RecoverVerifyEmail);
router.post("/RecoverVerifyOTP/:email/:otp", UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass", UsersController.RecoverResetPass);











module.exports = router;