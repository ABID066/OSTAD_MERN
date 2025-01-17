const express = require('express');
const SimpleController = require("../controllers/SimpleController");
const CreateTokenController = require("../controllers/CreateTokenController");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const router = express.Router();


router.get("/hello-get",SimpleController.HelloGet)
router.post("/hello-post",SimpleController.HelloPost)

router.post("/create-token",CreateTokenController.CreateToken)

router.get("/checking-middleware",AuthMiddleware,SimpleController.CheckingMiddleware)

module.exports = router;