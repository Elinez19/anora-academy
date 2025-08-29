import { Resend } from 'resend';

const resendClient = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const result = await resendClient.emails.send({
      from: 'onboarding@resend.dev',
    to: 'elijahndenwa19@gmail.com',
      subject: data.subject,
      html: data.html,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

export const generateOTPEmail = (otp: string, email: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your OTP Code</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .otp-code {
          background: #fff;
          border: 2px dashed #667eea;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          margin: 20px 0;
          font-size: 24px;
          font-weight: bold;
          color: #667eea;
          letter-spacing: 5px;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          color: #666;
          font-size: 14px;
        }
        .button {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 5px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🔐 Your OTP Code</h1>
        <p>Complete your sign-in process</p>
      </div>
      
      <div class="content">
        <h2>Hello!</h2>
        <p>You've requested to sign in to your Anora Academy account. Use the OTP code below to complete your sign-in:</p>
        
        <div class="otp-code">
          ${otp}
        </div>
        
        <p><strong>Important:</strong></p>
        <ul>
          <li>This code will expire in 10 minutes</li>
          <li>Never share this code with anyone</li>
          <li>If you didn't request this code, please ignore this email</li>
        </ul>
        
        <p>If you're having trouble, you can also copy and paste this code into the sign-in form.</p>
        
        <div style="text-align: center;">
          <a href="#" class="button">Sign In Now</a>
        </div>
        
        <p>Best regards,<br>The Anora Academy Team</p>
      </div>
      
      <div class="footer">
        <p>This is an automated email. Please do not reply to this message.</p>
        <p>&copy; ${new Date().getFullYear()} Anora Academy. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
};

export const generateWelcomeEmail = (name: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Anora Academy!</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .feature {
          background: #fff;
          padding: 15px;
          margin: 10px 0;
          border-radius: 5px;
          border-left: 4px solid #667eea;
        }
        .button {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 5px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎉 Welcome to Anora Academy!</h1>
        <p>Your learning journey begins now</p>
      </div>
      
      <div class="content">
        <h2>Hello ${name}!</h2>
        <p>Welcome to Anora Academy! We're thrilled to have you join our community of learners.</p>
        
        <p>Here's what you can do to get started:</p>
        
        <div class="feature">
          <h3>📚 Explore Our Courses</h3>
          <p>Browse through our extensive collection of courses designed to help you master new skills.</p>
        </div>
        
        <div class="feature">
          <h3>🎯 Set Learning Goals</h3>
          <p>Define your learning objectives and track your progress as you advance through your courses.</p>
        </div>
        
        <div class="feature">
          <h3>👥 Join the Community</h3>
          <p>Connect with fellow learners, share experiences, and get support when you need it.</p>
        </div>
        
        <div style="text-align: center;">
          <a href="/courses" class="button">Start Learning</a>
        </div>
        
        <p>If you have any questions or need assistance, our support team is here to help!</p>
        
        <p>Happy learning!<br>The Anora Academy Team</p>
      </div>
    </body>
    </html>
  `;
};

export const generatePasswordResetEmail = (resetLink: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .button {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 5px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🔑 Reset Your Password</h1>
        <p>Secure your account access</p>
      </div>
      
      <div class="content">
        <h2>Password Reset Request</h2>
        <p>We received a request to reset your password for your Anora Academy account.</p>
        
        <p>Click the button below to create a new password:</p>
        
        <div style="text-align: center;">
          <a href="${resetLink}" class="button">Reset Password</a>
        </div>
        
        <p><strong>Important:</strong></p>
        <ul>
          <li>This link will expire in 1 hour</li>
          <li>If you didn't request this reset, please ignore this email</li>
          <li>Your password will remain unchanged until you click the link above</li>
        </ul>
        
        <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
        <p style="word-break: break-all; color: #667eea;">${resetLink}</p>
        
        <p>Best regards,<br>The Anora Academy Team</p>
      </div>
    </body>
    </html>
  `;
};
