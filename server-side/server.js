const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer setup
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Environment variable for email
    pass: process.env.EMAIL_PASS, // Environment variable for password
  },
});

// Verify email transporter
contactEmail.verify((error) => {
  if (error) {
    console.error("Nodemailer Error:", error);
  } else {
    console.log("Nodemailer is ready to send emails.");
  }
});

// Routes
app.post('/contact', (req, res) => {
  const { fullName, email, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const mail = {
    from: fullName,
    to: process.env.EMAIL_USER, // Sending to your email
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${fullName}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
    res.status(200).json({code: 200, message: "Message sent successfully!" });
  });
});

// Serve React app (for other routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-portfolio/dist', 'index.html'));
});

// Export as serverless function for Vercel
module.exports = app;
