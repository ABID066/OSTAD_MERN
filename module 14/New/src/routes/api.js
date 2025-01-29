const express = require('express');
const HelloController = require("../controllers/HelloController");
const TokenController = require("../controllers/TokenController");
const StudentsController = require("../controllers/StudentsController");
const AuthTokenIssue = require("../controllers/AuthController");
const {TokenVerifyMiddleware} = require("../middleware/TokenVerifyMiddleware");
const router = express.Router();

router.get('/hello-get',HelloController.HelloGet)
router.post('/hello-post',HelloController.HelloPost)

router.post('/create-token',TokenController.CreateToken)
router.get('/decode-token',TokenController.DecodeToken)


//Mongoose
router.get('/token-issue',AuthTokenIssue.AuthTokenIssue)
router.post("/insert-student",TokenVerifyMiddleware,StudentsController.InsertStudent) //Insert student info

router.get("/all-students",TokenVerifyMiddleware,StudentsController.ReadStudents)  //show all students
router.get("/all-students-projection",TokenVerifyMiddleware,StudentsController.ReadStudentsWithProjection) //show all students with projection
router.get("/student/:id",TokenVerifyMiddleware,StudentsController.ReadOneStudent) //show oen student

router.put("/update-student/:id",TokenVerifyMiddleware,StudentsController.UpdateStudent)  //Update student Info

router.delete("/delete-student/:id",TokenVerifyMiddleware,StudentsController.DeleteStudent)  //Delete student Info

module.exports = router;