import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Redirect to the main auth handler which will handle OTP
    return NextResponse.redirect(new URL('/api/auth/email-otp', request.url));
  } catch (error) {
    console.error('Failed to send OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}
