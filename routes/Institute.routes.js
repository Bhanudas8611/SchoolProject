var express = require('express');
let router = express.Router();
const validate = require('../Validation/allAPIValidation');
let instituteController = require('../Controller/Institute.controller')
const { body, validationResult } = require('express-validator');
//let checkToken=require('../middleware/checkToken.middleware');


router.get('/showAllInstitute',instituteController.getAllInstituteData);
router.post('/findInstituteById/:id',instituteController.findInstituteByID);
router.post('/insertInstitute', validate.validationForInstituteAPI(),instituteController.insertInstitute );
router.post('/updateInstitute/:id', instituteController.updateInstitutebyID);
router.post('/deleteInstitute/:id',instituteController.deleteInstitute);


module.exports = router;

