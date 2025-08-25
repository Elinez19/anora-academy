import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins";
import { prisma } from "./db";
import { env } from "./env";
import { sendEmail, generateOTPEmail } from "./email";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    socialProviders: {
        github: {
          clientId: env.AUTH_GITHUB_CLIENT_ID, 
          clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
          // Request access to user's email
          scope: ["user:email"],
          // Ensure we get the user's profile information
          profile: (profile: { id: string; email: string; name?: string; login: string; avatar_url: string }) => ({
            id: profile.id,
            email: profile.email,
            name: profile.name || profile.login,
            image: profile.avatar_url,
          }),
        },
        google: {
          clientId: env.AUTH_GOOGLE_CLIENT_ID,
          clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
          // Optional: Always ask to select an account
          prompt: "select_account",
          // Optional: Always get refresh token
          accessType: "offline",
        },
    },
    baseURL: env.BETTER_AUTH_URL,
    secret: env.BETTER_AUTH_SECRET,
    plugins: [
        emailOTP({
            async sendVerificationOTP({ email, otp, type }) {
                try {
                    const emailContent = generateOTPEmail(email, otp, type);
                    const result = await sendEmail(emailContent);
                    
                    if (!result.success) {
                        throw new Error('Failed to send email');
                    }
                } catch (error) {
                    console.error('Failed to send OTP email:', error);
                    throw new Error('Failed to send OTP email');
                }
            },
            otpLength: 6,
            expiresIn: 300, 
            allowedAttempts: 3,
            disableSignUp: false, 
        }),
    ],
    // Add debugging for OAuth flows
    debug: process.env.NODE_ENV === 'development',
});