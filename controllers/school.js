const School = require ('../models/school')

exports.list = async (req,res)=>{
    var data = await School.find()
    res.send(data)
}
exports.registerSchool =async (req,res)=>{

    var {school,email,phoneNo,address,city,state,contry,profilePicture,about}=req.body;

    await School.findOne({school}).exec(async(err,success)=>{
         if(err){
            return res.send({
                code:"failued to register",
                error:err,
                message:"Sorry for inconvenience please it it again.",
                status:406
            })
         }else if(success){
                     
            return res.send({
                code:"school exits",
                error:"school is tacken",
                message:"failure",
                status:406
            })
            
                }else{
                    let newSchool=  new School ({school,email,phoneNo,address,city,state,contry,profilePicture,about})

                await  newSchool.save((err,suc)=>{
                 
                    if(err){

                        return res.send({
                                    message:"error",
                                    code:"server_error",
                                    status:404,
                                    error:err
                                    })
                          }else{
                            res.send({
                                message:"school registered successfully",
                                status:200,
                                code:"success"
                            })
                          }
                    })
                }
    })

}
exports.updateSchool = async (req,res)=>{
 try {
    var {school,email,phoneNo,address,city,state,contry,profilePicture,about}=req.body;
    await School.findOneAndUpdate({school},req.body,{new:true})
    res.send({
       message:"Data Updated successfully",
       status:200,
       code:"success"
    })
 } catch (error) {
    return res.send({
        message:"error",
        code:"server_error",
        status:404,
        error:error
        })
 }
    }

