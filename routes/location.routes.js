var express = require('express');
let router = express.Router();
const validate = require('../Validation/allAPIValidation');
let locationController = require('../Controller/location.controller')
const { body, validationResult } = require('express-validator');
//let checkToken=require('../middleware/checkToken.middleware');


router.get('/showAllLocation',locationController.getAllLocationData );
router.post('/findlocationById/:id',locationController.findLocationByID);
router.post('/insertLocation', validate.validationForLocationAPI(),locationController.insertLocation );
router.post('/updateLocation/:id', locationController.updatelocationbyID);
router.post('/deleteLocation/:id',locationController.deleteLocation);


module.exports = router;

