import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Validate the email
    // 2. Add it to your email service (Mailchimp, ConvertKit, etc.)
    // 3. Store it in your database
    // 4. Send a welcome email

    // For now, we'll just log it and simulate success
    console.log('New subscription:', email);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!',
      email
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
