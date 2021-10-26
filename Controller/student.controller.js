const connection = require('./mysql.connection');
const { validationResult } = require('express-validator');
const express=require('express');
const bcrypt = require('bcrypt');


//Show all Student Data
let getAllStudentData = (req, res, next) => {
    connection.query(`SELECT * FROM student`, (err, result) => {
        if (err) console.log(err);
        else res.send({ error: false, data: result });
    })


}

//Find Student details by student id
let getStudentByID = (req, res, next) => {
    connection.query(`SELECT Id, Name, Email, Age, Mobile, password FROM student WHERE Id='${req.params.id}'`, (err, result) => {
        if (err) { console.log(err); }
        else { res.send({ error: false, data: result }); }
    })
}

//Insert Record in student Table
let insertStudent = async(req,res,next)=>{
    let Name = req.body.Name;
    let Email = req.body.Email;
    let Age = req.body.Age;
    let Mobile = req.body.Mobile;
    let password = req.body.Password;

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password,salt);

    const errors = validationResult(req);
    if (!errors.isEmpty()) 
    {
        return res.status(200).jsonp({ error: true, data: errors.array()});
    } 
    else 
    {
        let qry = `INSERT INTO student(Name, Email, Age, Mobile, password) VALUES ('${Name}','${Email}','${Age}','${Mobile}','${hashpassword}')`;
        connection.query(qry, (err, result) => {
            if (err) { console.log(err); }
            else if (result.affectedRows > 0) {
                res.send({ error: false, message: "Recored Inserted Sucessfully" });
            }
        });
    }
    
}

//Update Student details by using student ID
let updateStudent = (req, res, next) => {

    let Email = req.body.Email;
    let Age = req.body.Age;
    let Mobile = req.body.Mobile;
    connection.query(`UPDATE student SET Email='${Email}',Age='${Age}',Mobile='${Mobile}' WHERE Id=${req.body.id}`, (err, result) => {
        if (err) { console.log(err); }
        else if (result.affectedRows > 0) {
            res.send({ error: false, message: 'Record Updated', data: result[0] })
        }

    })
}

let deleteStudent = (req, res, next) => {
    connection.query(`DELETE FROM student WHERE Id=${req.params.id}`, (err, result) => {
        if (err) { console.log(err); }
        else if (result.affectedRows > 0) {
            res.send({ error: false, message: 'Record Deleted', data: result[0] })
        }

    })
}

module.exports = {
    getAllStudentData: getAllStudentData,
    getStudentByID: getStudentByID,
    insertStudent: insertStudent,
    updateStudent: updateStudent,
    deleteStudent: deleteStudent
}


