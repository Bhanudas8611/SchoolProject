var express=require('express');
let router=express.Router();
const validate=require('../Validation/student.validation')

let studentController=require('../Controller/student.controller');

router.get('/showAllStudent',studentController.getAllStudentData);
router.post('/findStudentById/:id',studentController.getStudentByID);
router.post('/insertStudent', validate.validate,studentController.insertStudent);
router.post('/updateStudent',studentController.updateStudent);
router.post('/deleteStudent/:id',studentController.deleteStudent);


module.exports=router;
