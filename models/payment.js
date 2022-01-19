const mongoose =require('mongoose');
const paymentSchema = new mongoose.Schema({},{strict:false});
const Payment = mongoose.model('Payment',paymentSchema);
module.exports = Payment;