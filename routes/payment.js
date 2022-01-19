const express = require('express');

const router = express.Router();

const {paymentList,storePaymentData} = require('../controllers/payment');

router.post('/paymentData',paymentList);

router.post('/storePaymentData',storePaymentData);


module.exports = router;
