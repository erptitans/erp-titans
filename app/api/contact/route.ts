import { NextResponse } from "next/server";
import { sendContactEmail } from "@/services/emailService";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic Validation
    if (
      !body.fullName?.trim() ||
      !body.email?.trim() ||
      !body.phone?.trim() ||
      !body.companyName?.trim() ||
      !body.industry?.trim() ||
      !body.message?.trim()
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Attempt to send email via Azure
    await sendContactEmail(body);

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact Form API Error:", error);
    
    // Return detailed error in development mode
    if (process.env.NODE_ENV !== "production") {
      const message = error instanceof Error ? error.message : "An unknown error occurred during email dispatch.";
      return NextResponse.json(
        { success: false, error: message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: "Unable to send message. Please try again." },
      { status: 500 }
    );
  }
}
