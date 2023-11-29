var express = require("express");
var router = express.Router();
var AuthController = require("../../http/controllers/auth/auth.controller");
/* GET home page. */
router.get("/login", AuthController.login);

module.exports = router;
