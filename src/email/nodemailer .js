import nodemailer from 'nodemailer'
import { html } from './html.email.js';
import JWT from 'jsonwebtoken'


const seneMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: 'youssef',
    to: options.email,
    subject: "confirm",
    text: "Hello world?", // plain‑text body
    html: html(`http://localhost:3000/user/verify/${JWT.sign({ email: options.email }, process.env.SECRETKEY_EMAIL)}`, options.name), // HTML body
  })

  return info ? true : false

}

export default seneMail