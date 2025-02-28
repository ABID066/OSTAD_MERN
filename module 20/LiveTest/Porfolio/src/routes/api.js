const express = require('express');
const StudentController = require("../controllers/StudentController");
const {AuthVerify} = require("../middleware/AuthVerifyMiddleware");


const router = express.Router();

router.post("/registration",StudentController.UserRegistration)
router.post("/login",StudentController.UserLogin)

//after login
router.post("/profile-update",AuthVerify,StudentController.profileUpdate);
router.get("/profile-details",AuthVerify,StudentController.profileDetails);







module.exports = router;