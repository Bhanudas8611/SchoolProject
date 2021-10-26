const connection = require('./mysql.connection');
const { validationResult } = require('express-validator');
const express = require('express');
const bcrypt = require('bcrypt');


//Show all Course Data
let getAllCourseData = (req, res, next) => {
    connection.query(`SELECT * FROM tbl_course`, (err, result) => {
        if (err) console.log(err);
        else res.send({ error: false, data: result });
    })
}

//Find Course details by Course id
let findCourseByID = (req, res, next) => {
    connection.query(`SELECT Course_Id, Course_Name, Course_Duration, Course_Mode FROM tbl_course WHERE Course_Id='${req.params.id}'`, (err, result) => {
        if (err) { console.log(err); }
        else { res.send({ error: false, data: result }); }
    })
}

//Insert Record in Course Table
let insertCourse= (req, res, next) => {
    let Course_Name = req.body.Course_Name;
    let Course_Duration = req.body.Course_Duration;
    let Course_Mode = req.body.Course_Mode;
    

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).jsonp({ error: true, data: errors.array() });
    }
    else {
        let qry=`INSERT INTO tbl_course(Course_Name, Course_Duration, Course_Mode) VALUES ('${Course_Name}','${Course_Duration}','${Course_Mode}')`;
         connection.query(qry, (err, result) => {
            if (err) { res.send({error:err}); }
            else if (result.affectedRows > 0) {
                res.send({ error: false, message: "Recored Inserted Sucessfully" });
            }
        });
    }

}

//Update Course details by using Course ID
let updateCourseyID = (req, res, next) => {

    let Course_Name = req.body.Course_Name;
    let Course_Duration = req.body.Course_Duration;
    let Course_Mode = req.body.Course_Mode;
    
    let qry=`UPDATE tbl_course SET Course_Name='${Course_Name}',Course_Duration='${Course_Duration}',Course_Mode='${Course_Mode}' WHERE Course_Id='${req.params.id}'`;
    connection.query(qry, (err, result) => {
        if (err) { console.log(err); }
        else if (result.affectedRows > 0) {
            res.send({ error: false, message: 'Record Updated', data: result[0] })
        }

    })
}

//Delete Course record by Course id
let deleteCourse = (req, res, next) => {
    connection.query(`DELETE FROM tbl_course WHERE Course_Id=${req.params.id}`, (err, result) => {
        if (err) { console.log(err); }
        else if (result.affectedRows > 0) {
            res.send({ error: false, message: 'Record Deleted', data: result[0] })
        }

    })
}

module.exports = {
    getAllCourseData: getAllCourseData,
    findCourseByID:findCourseByID,
    insertCourse: insertCourse,
    updateCourseyID: updateCourseyID,
    deleteCourse: deleteCourse
}


