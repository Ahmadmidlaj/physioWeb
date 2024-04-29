import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Create Nodemailer transporter and send email
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Upgrade later with STARTTLS
        auth: {
          user: 'ahmadmidlaj313@gmail.com',
          pass: 'wmtj zxqy cmjw gspv',
        },
      });

      // Send email using Nodemailer
      const info = await transporter.sendMail({
        from: 'ahmadmidlaj313@gmail.com',
        to: 'ahmadmidlaj313@gmail.com',
        subject: 'Subject of your email',
        text: 'Content of your email',
      });

      console.log('Message sent:', info.messageId);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
