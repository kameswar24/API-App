const express = require('express');

const router = express.Router();

const {StudentData,StudentDataUpdate,StudentLogin}= require('../controllers/student');

router.get('/list',StudentData);

router.put('/update',StudentDataUpdate);

router.post('/login',StudentLogin);

module.exports = router;
