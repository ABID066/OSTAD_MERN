import express from "express";
import * as WelcomeController  from "../controllers/WelcomeController.js";

const router =express.Router();

router.get("/", WelcomeController.Welcome);
router.get("/welcome1", WelcomeController.Welcome1);
router.get("/welcome2", WelcomeController.Welcome2);

export default router;
