const mongoose =require('mongoose');
const studentSchema = new mongoose.Schema({},{strict:false});
const student = mongoose.model('student',studentSchema);
module.exports = student;