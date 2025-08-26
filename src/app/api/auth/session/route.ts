import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    // Debug logging
    console.log('Session data:', JSON.stringify(session, null, 2));

    if (session?.user) {
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ session: null });
    }
  } catch (error) {
    console.error('Session retrieval error:', error);
    return NextResponse.json({ session: null });
  }
}
