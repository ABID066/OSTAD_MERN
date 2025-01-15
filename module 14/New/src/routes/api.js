const express = require('express');
const HelloController = require("../controllers/HelloController");
const CreateTokenController = require("../controllers/CreateTokenController");
const router = express.Router();

router.get('/hello-get',HelloController.HelloGet)
router.post('/hello-post',HelloController.HelloPost)

router.get('/create-token',CreateTokenController.CreateToken)

module.exports = router;