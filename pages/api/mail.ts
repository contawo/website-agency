import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: "magnasitebusiness@gmail.com",
      pass: "dpbftqxodobdopqv"
  }
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.authId && !data.businessName && !data.email && !data.description) {
      return res.status(400).json({ message: "Bad Request" })
    }
    try {
      await transporter.sendMail({
        from: "magnasitebusiness@gmail.com",
        to: data.email,
        subject: "Thank you for joining us",
        text: "Please click on the link to schedule a call: https://calendly.com/magnasitebusiness/consulting-meeting ",
        html: `<h1>Hello, ${data.businessName}</h1>
              <p>We would like to extend our warmest welcome to you as our newest client. We are thrilled that you have chosen our company to provide you with the services you need.</p>
              <h3>Let us talk:</h3>    
              <p>Please click on the link to schedule for a call: https://calendly.com/magnasitebusiness/consulting-meeting </p>  
              <br />
              <p>Thank you again for your business, and we look forward to working with you.</p>
              <p>Thank you</p>
              <a href="https://magnasite.co.za/">MagnaSite</a>
        `
      }) 

      return res.status(200).json({ message: "Success" })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: "Bad Request" })
    }
  }
  return res.status(400).json({ message: "Bad Request" })
}
