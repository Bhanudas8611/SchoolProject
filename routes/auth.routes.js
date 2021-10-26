var express = require('express');
var router = express.Router();
const authController = require('../Controller/auth.Controller');
/* GET home page. */
router.post('/', authController.login);

module.exports = router;