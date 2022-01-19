const mongoose =require('mongoose');
const schoohSchema = new mongoose.Schema({},{strict:false});
const school = mongoose.model('school',schoohSchema);
module.exports = school;