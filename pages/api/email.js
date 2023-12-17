// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import { getHtml } from "../../utils/contact_template";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export default async function handler(req, res) {
  const { email, name, message } = req.body;
  const mailOptions = {
    from: email, // sender address
    to: process.env.EMAIL,
    subject: `Message from - ${name}`, // Subject line
    html: getHtml(req.body),
  };
  const result = await transporter.sendMail(mailOptions);
  res.status(200).json({ result });
}
