const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user:'ivancardona435@gmail.com',
        pass:'oqed yswm xxcj fmvv'
    }
})



module.exports = transporter
