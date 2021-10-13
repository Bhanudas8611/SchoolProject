//var express=require('express');
const {body, validationResult}=require('express-validator');

let validate=(req,res,next)=>{
    body('Name')
    .isLength({Max:20}).withMessage('Name length only 20 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .isEmpty().withMessage('Name is required')

    body('Email')
    .isEmail().withMessage('Enter Email address only').normalizeEmail()
    .isEmpty().withMessage('Email is required')

    body('Age')
    .isEmpty().withMessage('Age is required')
    .isNumeric().withMessage('Enter only number')

    body('Mobile')
    .isMobilePhone().isEmpty().withMessage('Mobile number Required')

    ,(req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.send({errors:errors})
        }
    }
}

module.exports={validate:validate}   