export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Using Resend (recommended for Vercel)
    if (process.env.RESEND_API_KEY) {
      return await sendWithResend(name, email, message, res);
    }
    
    // Fallback: Using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      return await sendWithSendGrid(name, email, message, res);
    }

    // If no email service configured
    return res.status(500).json({ 
      message: 'Email service not configured. Please contact site admin.',
      success: false 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      message: 'Failed to send message. Please try again.',
      success: false,
      error: error.message 
    });
  }
}

async function sendWithResend(name, email, message, res) {
  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  const result = await resend.emails.send({
    from: 'noreply@designsbydevesh.me',
    to: process.env.CONTACT_EMAIL || 'workbydevesh@gmail.com',
    subject: `New Enquiry from ${name}`,
    html: `
      <h2>New Project Enquiry</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr />
      <h3>Project Brief:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
    reply_to: email,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return res.status(200).json({ 
    message: 'Thank you! Your enquiry has been sent. I\'ll respond within 48 hours.',
    success: true 
  });
}

async function sendWithSendGrid(name, email, message, res) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.CONTACT_EMAIL || 'workbydevesh@gmail.com',
    from: process.env.SENDGRID_FROM_EMAIL || 'noreply@designsbydevesh.me',
    subject: `New Enquiry from ${name}`,
    html: `
      <h2>New Project Enquiry</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr />
      <h3>Project Brief:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
    replyTo: email,
  };

  await sgMail.send(msg);

  return res.status(200).json({ 
    message: 'Thank you! Your enquiry has been sent. I\'ll respond within 48 hours.',
    success: true 
  });
}
