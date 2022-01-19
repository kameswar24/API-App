const express = require('express');

const router = express.Router();

const {mathliteList,addQuestion,updateQuestion} = require('../controllers/mathlite');

router.get('/mQuizList',mathliteList);

router.post('/addQuestion',addQuestion);

router.put('/update',updateQuestion);

module.exports = router;
