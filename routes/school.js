const express = require('express');

const router = express.Router();

const {list,registerSchool,updateSchool}= require('../controllers/school');

router.get('/list',list);

router.post('/register',registerSchool);

router.put('/update',updateSchool);

module.exports = router;
