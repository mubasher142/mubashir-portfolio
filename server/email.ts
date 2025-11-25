import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-gmail-app-password",
  },
});

router.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: "your-email@gmail.com",
    subject: `New message from ${name}`,
    text: message,
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).json({ success: false, message: "Email send failed" });
    }
    res.status(200).json({ success: true, message: "Email sent" });
  });
});

export default router;
