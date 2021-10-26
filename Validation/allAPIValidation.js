var express=require('express');
var router=express.Router();
const {body, check}=require('express-validator');
const studentController = require('../Controller/student.controller');
//var studentcontroller=require('../Controller/student.controller')

Insert=() =>{

  return [ body('Name')
    .isLength({ Max: 20 }).withMessage('Name length only 20 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty(),

    body('Email')
        .isEmail().withMessage('Enter Email address only')
        .notEmpty(),

    body('Age')
        .isNumeric().withMessage('Enter only number').notEmpty(),

    body('Mobile').isMobilePhone().notEmpty()]
      
}

validationForLocationAPI=() =>{

    return [ check('Loc_Name')
      .isLength({ Max: 100 }).withMessage('Name length only 100 Character')
      .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
      .notEmpty(),

      check('Loc_State')
      .isLength({ Max: 100 }).withMessage('Name length only 100 Character')
      .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
      .notEmpty()
  
      ]
        
  }

  validationForInstituteAPI=()=>{
    return [ check('Inst_Name')
    .isLength({ Max: 100 }).withMessage('Name length only 100 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty(),

    check('Inst_Type')
    .isLength({ Max: 100 }).withMessage('Name length only 100 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty()

    ]
  }

  validationForCourseAPI=()=>{
    return [ check('Course_Name')
    .isLength({ Max: 100 }).withMessage('Name length only 100 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty(),

    check('Course_Mode')
    .isLength({ Max: 100 }).withMessage('Name length only 100 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty(),

    check('Course_Duration')
        .isNumeric().withMessage('Enter only number').notEmpty()

    ]
  }


module.exports={Insert:Insert,
    validationForLocationAPI:validationForLocationAPI,
    validationForInstituteAPI:validationForInstituteAPI,
    validationForCourseAPI:validationForCourseAPI
}   