
// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const formData = req.body;

//     try {
//       await sendEmail(formData);
//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Failed to send email' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

// const sendEmail = async (formData: any) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'ahmadmidlaj313@gmail.com', // Replace with your Gmail address
//       pass: 'feos dvtx hrbi xlre', // Replace with the generated app password
//     },
//   });

//   const message = {
//     from: 'ahmadmidlaj313@gmail.com',
//     to: 'ahmadmidlaj313@gmail.com',
//     subject: 'New Form Submission',
//     text: `
//       Name: ${formData.name}
//       Phone Number: ${formData.phoneNumber}
//       City: ${formData.city}
//     `,
//   };

//   await transporter.sendMail(message);
// };



import nodemailer from 'nodemailer';

export async function POST(request) {
  const formData = await request.json();

  try {
    await sendEmail(formData);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Failed to send email', { status: 500 });
  }
}

const sendEmail = async (formData) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ahmadmidlaj313@gmail.com', // Replace with your Gmail address
          pass: 'feos dvtx hrbi xlre', // Replace with the generated app password
        },
      });

  const message = {
    from: 'ahmadmidlaj313@gmail.com',
    to: 'ahmadmidlaj313@gmail.com',
    subject: 'New Form Submission',
    text: `
      Name: ${formData.name}
      Phone Number: ${formData.phoneNumber}
      City: ${formData.city}
    `,
  };

  await transporter.sendMail(message);
};