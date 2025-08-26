
import resend from "./resend";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(options: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'AnoraTech Academy <onboarding@resend.dev>', // Update this with your verified domain
      to: [options.to],
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}

export function generateOTPEmail(email: string, otp: string, type: 'sign-in' | 'email-verification' | 'forget-password') {
  const subject = getEmailSubject(type);
  const html = getEmailHTML(email, otp, type);
  const text = getEmailText(email, otp, type);

  return {
    to: email,
    subject,
    html,
    text,
  };
}

function getEmailSubject(type: 'sign-in' | 'email-verification' | 'forget-password'): string {
  switch (type) {
    case 'sign-in':
      return 'Your Sign-In Code';
    case 'email-verification':
      return 'Verify Your Email Address';
    case 'forget-password':
      return 'Reset Your Password';
    default:
      return 'Your Verification Code';
  }
}

function getEmailHTML(email: string, otp: string, type: 'sign-in' | 'email-verification' | 'forget-password'): string {
  const actionText = getActionText(type);
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${getEmailSubject(type)}</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; text-align: center;">
        <h1 style="color: #2c3e50; margin-bottom: 20px;">${getEmailSubject(type)}</h1>
        
        <p style="font-size: 16px; margin-bottom: 30px;">
          Hi there!<br>
          ${actionText} for <strong>${email}</strong>
        </p>
        
        <div style="background: #fff; padding: 20px; border-radius: 8px; border: 2px solid #e9ecef; margin: 30px 0;">
          <h2 style="color: #495057; margin: 0; font-size: 32px; letter-spacing: 5px; font-family: monospace;">
            ${otp}
          </h2>
        </div>
        
        <p style="font-size: 14px; color: #6c757d; margin-bottom: 20px;">
          This code will expire in 5 minutes for security reasons.
        </p>
        
        <p style="font-size: 14px; color: #6c757d;">
          If you didn't request this code, please ignore this email.
        </p>
      </div>
    </body>
    </html>
  `;
}

function getEmailText(email: string, otp: string, type: 'sign-in' | 'email-verification' | 'forget-password'): string {
  const actionText = getActionText(type);
  
  return `
${getEmailSubject(type)}

Hi there!
${actionText} for ${email}

Your verification code is: ${otp}

This code will expire in 5 minutes for security reasons.

If you didn't request this code, please ignore this email.
  AnoraTech Academy. Copyright ${new Date().getFullYear()}
  `.trim();
}

function getActionText(type: 'sign-in' | 'email-verification' | 'forget-password'): string {
  switch (type) {
    case 'sign-in':
      return 'Here\'s your sign-in code';
    case 'email-verification':
      return 'Here\'s your email verification code';
    case 'forget-password':
      return 'Here\'s your password reset code';
    default:
      return 'Here\'s your verification code';
  }
}
