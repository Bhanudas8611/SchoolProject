var express=require('express');
let router=express.Router();

let studentController=require('../Controller/student.controller');

router.get('/showAllStudent',studentController.getAllStudentData);
router.post('/searchStudentById/:id',studentController.getStudentByID);
router.post('/insertStudent',studentController.insertStudent);


module.exports=router;
