const express = require('express')
//const {ReadStudent, CreateStudent, UpdateStudent, DeleteStudent} = require("../controllers/StudentController");
const  router =express.Router();
const  StudentController=require('../controllers/StudentController')
const AuthMiddleware=require('../middleware/auth')

router.get('/read',StudentController.ReadStudent)

router.post("/create",AuthMiddleware, StudentController.CreateStudent,)

router.put("/update", StudentController.UpdateStudent)

router.delete("/delete",StudentController.DeleteStudent)



module.exports=router