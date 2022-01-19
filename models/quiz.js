const mongoose =require('mongoose');
const quizSchema = new mongoose.Schema({},{strict:false});
const quiz = mongoose.model('quiz',quizSchema);
module.exports = quiz;