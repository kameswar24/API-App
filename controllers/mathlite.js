const Quiz = require ('../models/quiz');

exports.mathliteList = async ( req,res ) => {
    var data = await Quiz.find()
    res.send(data)
}

exports.addQuestion = async ( req,res ) => {
    const {question,ans,correct} = req.body;
    await Quiz.findOne({question}).exec(async(err,success)=>{
        if(err){
           return res.send({
               code:"failued ",
               error:err,
               message:"Sorry for inconvenience please it it again.",
               status:406
           })
        }else if(success){
                    
           return res.send({
               code:"question exits",
               error:"question is tacken",
               message:"failure",
               status:406
           })
           
               }else{
                   let newQuiz=  new Quiz ({question,ans,correct})

               await  newQuiz.save((err,suc)=>{
                
                   if(err){

                       return res.send({
                                   message:"error",
                                   code:"server_error",
                                   status:404,
                                   error:err
                                   })
                         }else{
                           res.send({
                               message:"Question added  successfully",
                               status:200,
                               code:"success"
                           })
                         }
                   })
               }
   })
}

exports.updateQuestion = async (req,res)=>{
    try {
       var {question}=req.body;
       await Quiz.findOneAndUpdate({question},req.body,{new:true})
       res.send({
          message:"Question Updated successfully",
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
   