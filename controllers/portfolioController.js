
'use strict';

const nodemailer = require('nodemailer');
const mailjetTransport = require('nodemailer-mailjet-transport');


//transport
const transport = nodemailer.createTransport(mailjetTransport(
  mailjetTransport({
    auth: {
      api_key: process.env.API_MAILJET,
    },
  })
));

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;
  
      //validation
      if (!name || !email || !msg) {
        return res.status(500).send({
          success: false,
          message: "Please Provide All Fields",
        });
      }
      //email matter
      transport.sendMail({
        to: "tancan2002@gmail.com",
        from: "tancan2002@gmail.com",
        subject: "Regarding Mern Portfolio App",
        html: `
          <h5>Detail Information</h5>
          <ul>
            <li><p>Name : ${name}</p></li>
            <li><p>Email : ${email}</p></li>
            <li><p>Message : ${msg}</p></li>
          </ul>
        `,
      });
  
      return res.status(200).send({
        success: true,
        message: "Your Message Send Successfully",
      });
  } catch (err) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};


module.exports = { sendEmailController };