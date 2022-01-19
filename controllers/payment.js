const Payment = require('../models/payment');

exports.paymentList = async ( req,res ) => {
    const {email} = req.body;
    // email = email.trim().toLowerCase();
    console.log(email)
    Payment.findOne({email}).exec(async(err,suc)=>{
        if(err) {
            return res.json({
                error: err,
                message: "error",
                code: 'server_error',
                status: 404
            });
        }else{
            return res.json({
                data: suc,
                status: 200,
                code: 'success'
            })
        }
    })

}
exports.storePaymentData = async (req,res) =>{
    
        let newPayment = await Payment({...req.body})
        newPayment.save((err,suc)=>{
            if(err){
                return res.json({
                    error: err,
                    message: "error",
                    code: 'server_error',
                    status: 404
                });
            }else{
                res.json({
                    message: ' payment Id Stored successfully',
                    status: 200,
                    code: 'success'
                });
            }
        })
    
}