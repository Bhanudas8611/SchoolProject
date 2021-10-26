const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const connection = require('./MySql.Connection');
module.exports={
    login:(req,res,next)=>{
        let Email= req.body.Email;
        let Password=req.body.Password;
        connection.query(`SELECT * FROM student WHERE Email='${Email}'`, async(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                const issame=await bcrypt.compare(Password,result[0].password)
                if(issame){
                    let token=jwt.sign({id:result[0].Id,name:result[0].name},"secret",{algorithm:"HS256",expiresIn:6000*60})
                    res.send({error:false,token:token});
                    console.log(token);
                }else{
                    res.send({error:true,Message:'Invalid User Name or password'});
                }

            }
        })
    }
}