const express = require('express');
const SimpleController = require("../controllers/SimpleController");
const CreateTokenController = require("../controllers/CreateTokenController");
const router = express.Router();


router.get("/hello-get",SimpleController.HelloGet)
router.post("/hello-post",SimpleController.HelloPost)

router.get("/create-token",CreateTokenController.CreateToken)

module.exports = router;