var express = require('express');
let router = express.Router();
const validate = require('../Validation/allAPIValidation');
let courseController = require('../Controller/course.controller')
const { body, validationResult } = require('express-validator');
//let checkToken=require('../middleware/checkToken.middleware');


router.get('/showAllCourse',courseController.getAllCourseData);
router.post('/findCourseById/:id',courseController.findCourseByID);
router.post('/insertCourse', validate.validationForCourseAPI(),courseController.insertCourse);
router.post('/updateCourse/:id', courseController.updateCourseyID);
router.post('/deleteCourse/:id',courseController.deleteCourse);


module.exports = router;

