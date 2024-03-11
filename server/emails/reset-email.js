const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Function for sending the 'Password Reser Request'
async function sendPasswordResetEmail(email, token) {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.SMTP_USER, // SMTP username
            pass: process.env.SMTP_PASSWORD  // SMTP password
        }
    });

    // Define email options
    const mailOptions = {
        from: process.env.SMTP_USER, 
        to: email, 
        subject: 'Password Reset Request', 
        text: `You are receiving this email because a password reset request was received. Please click on the following link to reset your password: http://localhost:3000/reset-password?token=${token}` 
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Password reset email sent successfully.');
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw error;
    }
}

module.exports = { sendPasswordResetEmail };