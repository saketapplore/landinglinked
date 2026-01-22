import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env vars from root .env
dotenv.config({ path: join(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST?.trim(),
  port: parseInt(process.env.SMTP_PORT?.trim() || "587"),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER?.trim(),
    pass: process.env.SMTP_PASS?.trim(),
  },
});


app.post('/api/submit-form', async (req, res) => {
  const { fullName, schoolName, email } = req.body;
  console.log(`Received form submission from: ${fullName} (${email})`);

  const mailOptions = {
    from: process.env.SMTP_FROM?.trim(),
    to: 'saket.kakkar@applore.in',
    subject: `Test subject`,
    text: `
      New registration received:
      
      Full Name: ${fullName}
      School / Institution: ${schoolName}
      Email Address: ${email}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p>A new interest registration has been submitted from the LinkEdtohome website.</p>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #003049;">
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>School / Institution:</strong> ${schoolName}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully", mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
