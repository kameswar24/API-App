require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
        pass: process.env.EPASSWORD || '1234' // TODO: your gmail password
    }
});

let mailOptions = {
    from: 'abc@gmail.com', // TODO: email sender
    to: 'cba@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});