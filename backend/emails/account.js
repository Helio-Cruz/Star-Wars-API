const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail =  (email, name) => {
    sgMail.send({
        to: email,
        from: 'helio-cruz@hotmail.com',
        subject: 'Welcome to the Api Star Wars Swapi ',
     // text: `Welcome to the Api Star Wars Swapi `,
        html: '<h1>Hello</h1> <br> <p>Thank you for  SingUp.</p> <br> <p>In this website you\'ll find some data of Characters and films from Star Wars</p>  <br> <strong> Enjoy!!</strong>'
    })
}

module.exports = sendWelcomeEmail;
 