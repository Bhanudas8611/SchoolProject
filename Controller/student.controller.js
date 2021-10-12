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

    module.exports={
        getAllStudentData:getAllStudentData,
        getStudentByID:getStudentByID
    
    }
    

}