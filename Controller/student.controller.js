const express = require('express');
const connection=require('./mysql.connection');


//Show all Student Data
let getAllStudentData=(req,res,next)=>{
    connection.query(`SELECT * FROM student`,(err,result)=>{
        if(err)console.log(err);
        else res.send({error:false,data:result});
    })
    

}

//Find Student details by student id
let getStudentByID=(req,res,next)=>{
    connection.query(`SELECT Id, Name, Email, Age, Mobile, password FROM student WHERE Id='${req.params.id}'`,(err,result)=>{
        if(err){console.log(err);}
        else {res.send({error:false,data:result});}
    })
}

//Insert Record in student Table
    let insertStudent=(req,res,next)=>{
        let Name=req.body.Name;
        let Email=req.body.Email;
        let Age=req.body.Age;
        let Mobile=req.body.Mobile;
        connection.query(`INSERT INTO student(Name, Email, Age, Mobile) VALUES ('${Name}','${Email}','${Age}','${Mobile}')`,(err,result)=>{
            if(err){console.log(err);}
            else {res.send({error:false,data:result});}
        })
    }

    //Update Student details by using student ID
    let updateStudent=(req,res,next)=>{
        
        let Email=req.body.Email;
        let Age=req.body.Age;
        let Mobile=req.body.Mobile;
        connection.query(`UPDATE student SET Email='${Email}',Age='${Age}',Mobile='${Mobile}' WHERE Id=${req.body.id}`,(err,result)=>{
            if(err){console.log(err);}
            else if(result.affectedRows>0)
            {
                res.send({error:false, message:'Record Updated', data:result[0]})
            }
                      
        })
    }

    let deleteStudent=(req,res,next)=>{
         connection.query(`DELETE FROM student WHERE Id=${req.params.id}`,(err,result)=>{
            if(err){console.log(err);}
            else if(result.affectedRows>0)
            {
                res.send({error:false, message:'Record Deleted', data:result[0]})
            }
                      
        })
    }

    module.exports={
        getAllStudentData:getAllStudentData,
        getStudentByID:getStudentByID,
        insertStudent:insertStudent,
        updateStudent:updateStudent,
        deleteStudent:deleteStudent  
        }
    

