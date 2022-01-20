const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();
var password = process.env.password
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
// importing routes
const school = require ('./routes/school')
const Quiz = require ('./routes/quiz')
const Payment = require ('./routes/payment')
const student = require ('./routes/student')
// mongodb uri
const dbURI=`mongodb+srv://kameswar:${password}@cluster0.2ltyf.mongodb.net/Data?retryWrites=true&w=majority`

const options = {
    useUnifiedTopology:true,
    useNewUrlParser:true
}
mongoose.connect(dbURI,options).then(()=>{
    console.log('db connected successfully')
})
.catch((e)=>{
    console.log(e)
})
 
// basic root to call api
app.use('/api/school',school)
app.use('/api/student',student)
app.use('/api/quiz',Quiz)

app.use('/api/payment',Payment)

app.get('/', (req, res) => {
    res.json({ message: "Server is running" })
})


//Invalid route handling 
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 404)
    res.json({
        error: error.message
    })
})

// Server start
app.listen(process.env.PORT ||'3000', () => {
    console.log(`Server is running on `);
});