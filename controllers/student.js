const Student = require('../models/student');

exports.StudentData = async (req, res) => {
    try {
        var data = await Student.find()
        res.send({
            data: data
        })
    } catch (error) {
        res.json({
            message: "server error",
            error: error,
            status: 400
        })

    }
}

exports.StudentDataUpdate = async (req, res) => {
    try {
        var id = req.params.productId
        var data = await Student.findOneAndUpdate({ id: id }, req.body, { new: true })
        res.send({
            message: "success",
            status: 200,
            data: data
        })
    } catch (error) {
        res.send({
            message: error,
            status: 400,
        })
    }
}
exports.StudentLogin = async (req,res)=>{
    try {
        var { userName,password } = req.body
   await Student.findOne({$or:[{'email':userName}, {'phone':userName}]}).exec((err, suc) => {
          if(err){
            return res.json({
                status: 400,
                code: 'server probem',
                message: err
            })
          }   else if (!suc) {

                return res.json({
                    status: 302,
                    code: 'user_not_exists',
                    message: "Email doesn't exists.",
                    status:suc
                })
    
            } else {
                if(suc.password === password){
                    return res.json({
                            token,
                            user:{
                                ...suc,
                                password:null
                            },
                            status: 200,
                            code: 'success'
                        })
    
                }else{
                    return res.json({
                        message: "Invalid credentials",
                        code: 'invalid_credential',
                        status: 406
                    });
                } 
            }
            
        })
       
    } catch (error) {
         res.json({
            message:error
        })
    }
}