const express = require('express');
const UserController=  require('../controllers/UserController')
const AuthMiddleware=  require('../middleware/AuthMiddleware')
const TaskController = require("../controllers/TaskController");

const router= express.Router()


router.post("/registration",UserController.registration);
router.post("/login",UserController.login);

router.get("/VerifyEmail/:email",UserController.verifyEmail);
router.get("/VerityOTP/:email/:otp",UserController.verifyOTP);
router.post("/RecoverResetPass/:email/:password",UserController.passwordReset);

//after login
router.get("/profileDetails",AuthMiddleware,UserController.profileDetails)
router.post("/profileUpdate",AuthMiddleware,UserController.profileUpdate);

//task Operation
router.post("/createTask",AuthMiddleware,TaskController.createTask)
router.post("/updateTask/:id",AuthMiddleware,TaskController.updateTask)
router.get("/readTask",AuthMiddleware,TaskController.readTask)
router.delete("/deleteTask/:id",AuthMiddleware,TaskController.deleteTask)
router.get("/filteringByStatus/:status",AuthMiddleware,TaskController.filteringByStatus)
router.post("/filteringByDate", AuthMiddleware, TaskController.filteringByDate);



module.exports = router;