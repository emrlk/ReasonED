const nodemailer = require("nodemailer");
require("dotenv").config();

/**
 * Function to send user's verification code.
 * @param {string} email - Email address of the recipient.
 * @param {string} verificationCode - Verification code to be sent.
 */
async function sendConfirmationEmail(email, confirmationLink) {
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
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Define email options
  const mailOptions = {
    // Sender's email address
    from: process.env.SMTP_USER,
    // Recipient's email address
    to: email,
    // Email subject
    subject: "Confirm Your Account",
    html: `
            <p>Dear User,</p>
            <p>Thank you for signing up with ReasonED.io! Before you can start using your account, you need to confirm your email address.</p>
            <p>Please click the link below to confirm your account:</p>
            <p><a href="${confirmationLink}">Confirm Account</a></p>
            <p>If the above link does not work, you can copy and paste the URL below into your browser's address bar:</p>
            <p>${confirmationLink}</p>
            <p>If you did not sign up for an account, please disregard this email.</p>
            <p>Thank you for joining us, and we look forward to seeing you soon!</p>
            <p>Best regards,</p>
            <p>The ReasonED team</p>
        `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent successfully.");
  } catch (error) {
    console.error("Error sending confirmation email:", error);

    // Throw the error to handle it in the calling function
    throw error;
  }
}

module.exports = { sendConfirmationEmail };
