const { query } = require('express');
const connection=require('./mysql.connection');

let getAllStudentData=(req,res,next)=>{
    connection.query(`SELECT * FROM student`,(err,result)=>{
        if(err)console.log(err);
        else res.send({error:false,data:result});
    })
    

}

let getStudentByID=(req,res,next)=>{
    connection.query(`SELECT Id, Name, Email, Age, Mobile, password FROM student WHERE Id='${req.params.id}'`,(err,result)=>{
        if(err){console.log(err);}
        else {res.send({error:false,data:result});}
    })

    let insertStudent=(req,res,next)=>{
        let Name=req.body.Name;
        let Email=req.body.Email;
        let Age=req.body.Age;
        let Mobile=req.body.Mobile;
        connection.query(`INSERT INTO student(Name, Email, Age, Mobile) VALUES ('${Name}','${Name}','${Age}','${Mobile}')`,(err,result)=>{
            if(err){console.log(err);}
            else {res.send({error:false,data:result});}
        })

    module.exports={
        getAllStudentData:getAllStudentData,
        getStudentByID:getStudentByID,
        insertStudent:insertStudent
    
    }
    

}