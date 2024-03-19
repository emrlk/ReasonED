const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Function for sending the 'Password Reset Request' email.
 * @param {string} email - Email address of the recipient.
 * @param {string} token - JWT token for password reset.
 */
async function sendPasswordResetEmail(email, token) {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        // SMTP host
        host: "smtp.gmail.com",
        // SMTP port
        port: 587,
        // Disable TLS
        secure: false,
        // Require TLS
        requireTLS: true,
        auth: {
            // SMTP username
            user: process.env.SMTP_USER,
            // SMTP password
            pass: process.env.SMTP_PASSWORD
        }
    });

    // Define email options
    const mailOptions = {
        // Sender email address
        from: process.env.SMTP_USER,
        // Recipient email address
        to: email,
        // Email subject
        subject: 'Password Reset Request',
        // Plain text email content
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