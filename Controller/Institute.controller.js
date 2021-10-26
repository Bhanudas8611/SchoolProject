const connection = require('./mysql.connection');
const { validationResult } = require('express-validator');
const express = require('express');
const bcrypt = require('bcrypt');


//Show all Institute Data
let getAllInstituteData = (req, res, next) => {
    connection.query(`SELECT * FROM tbl_institute`, (err, result) => {
        if (err) console.log(err);
        else res.send({ error: false, data: result });
    })
}

//Find location details by Institute id
let findInstituteByID = (req, res, next) => {
    connection.query(`SELECT Inst_Id, Inst_Name, Inst_Type FROM tbl_institute WHERE Inst_Id='${req.params.id}'`, (err, result) => {
        if (err) { console.log(err); }
        else { res.send({ error: false, data: result }); }
    })
}

//Insert Record in Institute Table
let insertInstitute = (req, res, next) => {
    let Inst_Name = req.body.Inst_Name;
    let Inst_Type = req.body.Inst_Type;
    

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).jsonp({ error: true, data: errors.array() });
    }
    else {
        let qry=`INSERT INTO tbl_institute(Inst_Name, Inst_Type) VALUES ('${Inst_Name}','${Inst_Type}')`;
         connection.query(qry, (err, result) => {
            if (err) { res.send({error:err}); }
            else if (result.affectedRows > 0) {
                res.send({ error: false, message: "Recored Inserted Sucessfully" });
            }
        });
    }

}

//Update Institute details by using Institute ID
let updateInstitutebyID = (req, res, next) => {

    let Inst_Name = req.body.Inst_Name;
    let Inst_Type = req.body.Inst_Type;
    let qry=`UPDATE tbl_institute SET Inst_Name='${Inst_Name}',Inst_Type='${Inst_Type}' WHERE Inst_Id='${req.params.id}'`;
    connection.query(qry, (err, result) => {
        if (err) { console.log(err); }
        else if (result.affectedRows > 0) {
            res.send({ error: false, message: 'Record Updated', data: result[0] })
        }

    })
}

//Delete Institute record by Institute id
let deleteInstitute = (req, res, next) => {
    connection.query(`DELETE FROM tbl_institute WHERE Inst_Id=${req.params.id}`, (err, result) => {
        if (err) { console.log(err); }
        else if (result.affectedRows > 0) {
            res.send({ error: false, message: 'Record Deleted', data: result[0] })
        }

    })
}

module.exports = {
    getAllInstituteData: getAllInstituteData,
    findInstituteByID: findInstituteByID,
    insertInstitute: insertInstitute,
    updateInstitutebyID: updateInstitutebyID,
    deleteInstitute: deleteInstitute
}


