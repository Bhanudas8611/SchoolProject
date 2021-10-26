const connection = require('./mysql.connection');
const { validationResult } = require('express-validator');
const express = require('express');
const bcrypt = require('bcrypt');


//Show all location Data
let getAllLocationData = (req, res, next) => {
    connection.query(`SELECT * FROM tbl_location`, (err, result) => {
        if (err) console.log(err);
        else res.send({ error: false, data: result });
    })
}

//Find location details by location id
let findLocationByID = (req, res, next) => {
    connection.query(`SELECT Loc_Id, Loc_Name, Loc_State FROM tbl_location WHERE Loc_Id='${req.params.id}'`, (err, result) => {
        if (err) { console.log(err); }
        else { res.send({ error: false, data: result }); }
    })
}

//Insert Record in Location Table
let insertLocation = (req, res, next) => {
    let loc_Name = req.body.Loc_Name;
    let loc_State = req.body.Loc_State;
    

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).jsonp({ error: true, data: errors.array() });
    }
    else {
        let qry=`INSERT INTO tbl_location(Loc_Name, Loc_State) VALUES ('${loc_Name}','${loc_State}')`;
         connection.query(qry, (err, result) => {
            if (err) { console.log(err); }
            else if (result.affectedRows > 0) {
                res.send({ error: false, message: "Recored Inserted Sucessfully" });
            }
        });
    }

}

//Update Location details by using location ID
let updatelocationbyID = (req, res, next) => {

    let loc_Name = req.body.Loc_Name;
    let loc_State = req.body.Loc_State;
    let qry=`UPDATE tbl_location SET Loc_Name='${loc_Name}',Loc_State='${loc_State}' WHERE Loc_Id='${req.params.id}'`;
    connection.query(qry, (err, result) => {
        if (err) { console.log(err); }
        else if (result.affectedRows > 0) {
            res.send({ error: false, message: 'Record Updated', data: result[0] })
        }

    })
}

//Delete location record by location id
let deleteLocation = (req, res, next) => {
    connection.query(`DELETE FROM tbl_location WHERE Loc_Id=${req.params.id}`, (err, result) => {
        if (err) { console.log(err); }
        else if (result.affectedRows > 0) {
            res.send({ error: false, message: 'Record Deleted', data: result[0] })
        }

    })
}

module.exports = {
    getAllLocationData: getAllLocationData,
    findLocationByID: findLocationByID,
    insertLocation: insertLocation,
    updatelocationbyID: updatelocationbyID,
    deleteLocation: deleteLocation
}


