import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Resend, ConvertKit, Mailchimp, etc.)
    // For now, log the subscription
    console.log(`Newsletter subscription: ${email}`);

    return NextResponse.json(
      { message: "Thanks for subscribing! We'll be in touch." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
