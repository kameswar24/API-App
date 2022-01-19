const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({},{strict:false});
const user = mongoose.model('school',userSchema);
module.exports = user;