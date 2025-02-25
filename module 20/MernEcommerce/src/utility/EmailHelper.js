const nodemailer = require('nodemailer');



const EmailSend = async (EmailTo, EmailText, EmailSubject)=>{

    let transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
            user: "mdabid1152@gmail.com",
            pass: ""
        }
    })

    let mailOption = {
        from: "Practice Ecommerce <mdabid1152@gmail.com>",
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText,
        html: EmailSubject,

    }
    return await transport.sendMail(mailOption);
}
module.exports= EmailSend;