var express = require('express');
let router = express.Router();
const validate = require('../Validation/allAPIValidation');
let studentController = require('../Controller/student.controller');
const { body, validationResult } = require('express-validator');
let checkToken=require('../middleware/checkToken.middleware');


router.get('/showAllStudent',checkToken, studentController.getAllStudentData);
router.post('/findStudentById/:id',checkToken, studentController.getStudentByID);
router.post('/insertStudent', validate.Insert(), studentController.insertStudent);
router.post('/updateStudent',checkToken, studentController.updateStudent);
router.post('/deleteStudent/:id',checkToken, studentController.deleteStudent);


module.exports = router;
