import express from "express";
import * as WelcomeController  from "../controllers/WelcomeController.js";

import {
    getAllStudent,
    getStudentByRoll,
    updateStudent,
    InsertStudent,
    deleteStudent,
} from "../controllers/StudentsController.js";
import {createToken, decodeToken} from "../controllers/JWTPractice.js";
import {TokenIssue} from "../controllers/TokenIssuController.js";
import {verify} from "../middlewares/TokenVerifyMiddleware.js";




const router = express.Router();

router.get("/", WelcomeController.Welcome);
router.get("/welcome1", WelcomeController.Welcome1);
router.get("/welcome2", WelcomeController.Welcome2);

//mongoose and Apply JWT auth
router.get("/TokenIssue",TokenIssue)
router.post("/InsertStudent",verify,InsertStudent);
router.get("/AllStudents",verify,getAllStudent)
router.get("/Student/Roll/:Roll",verify,getStudentByRoll)
router.put("/Student/:id",verify,updateStudent)
router.delete("/DeleteStudent/:id",verify,deleteStudent)

//JWT
router.get("/createToken",createToken)
router.get("/decodeToken", decodeToken)

export default router;
