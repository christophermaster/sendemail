'use strict'
import nodemailer from 'nodemailer';

class controller_email {

    static async sendEmail(req, res) {

        const body = req.body.to;
        console.log(body);

        // Definimos el transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.mailgun.org', 
            port: 587, 
            secure: false, 
            tls: { ciphers: 'SSLv3' }, 
            auth: {
                user: 'christopherfacyt@gmail.com',
                pass: 'computer3264.'
            }
        });
        // Definimos el email
        var mailOptions = {
            from: 'Remitente',
            to: body,
            subject: 'Asunto',
            html: { path: 'public/3-validacion-cuenta.html' },
            attachments: [{
                filename: 'facebook.png',
                path:  'public/images/facebook.png',
                cid: 'facebook' //same cid value as in the html img src
            },{
                filename: 'twitter.png',
                path:  'public/images/twitter.png',
                cid: 'twitter' //same cid value as in the html img src
            },{
                filename: 'linkedin.png',
                path:  'public/images/linkedin.png',
                cid: 'linkedin' //same cid value as in the html img src
            },{
                filename: 'youtube.png',
                path:  'public/images/youtube.png',
                cid: 'youtube' //same cid value as in the html img src
            },{
                filename: 'google.png',
                path:  'public/images/google.png',
                cid: 'google' //same cid value as in the html img src
            }
        ]
        };
        // Enviamos el email
        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
                return res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    error
                })
            } else {
                console.log("Email sent");
                res.status(200).json(req.body);
            }
        });
    }

}

export default controller_email
