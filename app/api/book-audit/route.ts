import { NextResponse } from "next/server";
import { sendAuditBookingEmail } from "@/services/emailService";
// import { createTeamsMeeting } from "@/lib/graphClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic Validation
    if (
      !body.fullName?.trim() ||
      !body.email?.trim() ||
      !body.phone?.trim() ||
      !body.companyName?.trim() ||
      !body.selectedDate?.trim() ||
      !body.selectedTime?.trim()
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 1. Convert Date & Time to ISO format for Microsoft Graph API
    // body.selectedDate from frontend is typically a toDateString() like "Mon Jun 22 2026"
    const parsedBaseDate = new Date(body.selectedDate);
    if (isNaN(parsedBaseDate.getTime())) {
      return NextResponse.json(
        { success: false, error: "Invalid date format provided." },
        { status: 400 }
      );
    }

    const year = parsedBaseDate.getFullYear();
    const month = parsedBaseDate.getMonth();
    const date = parsedBaseDate.getDate();

    console.log("=== TIME PARSING CHECK ===");
    console.log("Raw Date Received:", body.selectedDate);
    console.log("Raw Time Received:", body.selectedTime);

    let hours = 0;
    let minutes = 0;
    const timeMatch = body.selectedTime.trim().match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
    
    if (!timeMatch) {
      return NextResponse.json(
        { success: false, error: "Invalid time format provided." },
        { status: 400 }
      );
    }

    hours = parseInt(timeMatch[1], 10);
    minutes = parseInt(timeMatch[2], 10);
    const ampm = timeMatch[3] ? timeMatch[3].toUpperCase() : null;
    
    if (ampm === "PM" && hours < 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;

    console.log("Normalized Hours:", hours);
    console.log("Normalized Minutes:", minutes);
    console.log("==========================");

    const startDate = new Date(year, month, date, hours, minutes);
    if (isNaN(startDate.getTime())) {
      return NextResponse.json(
        { success: false, error: "Resulting start date is invalid." },
        { status: 400 }
      );
    }

    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour

    const startDateTimeStr = startDate.toISOString();
    const endDateTimeStr = endDate.toISOString();
    const subject = `ERP Health Audit Consultation for ${body.companyName}`;

    console.log("=== GRAPH API PRE-FLIGHT CHECK ===");
    console.log("Selected Date:", body.selectedDate);
    console.log("Selected Time:", body.selectedTime);
    console.log("Parsed Date object:", startDate);
    console.log("Generated startDateTime:", startDateTimeStr);
    console.log("Generated endDateTime:", endDateTimeStr);
    console.log("Timezone Offset (mins):", startDate.getTimezoneOffset());
    console.log("Complete Graph request payload:", { subject, startDateTime: startDateTimeStr, endDateTime: endDateTimeStr });
    console.log("==================================");

    // 2. Create the Real Microsoft Teams Meeting
    // ------------------------------------------------------------------------------------------------
    // TODO: RE-ENABLE MICROSOFT GRAPH INTEGRATION ONCE "APPLICATION ACCESS POLICY" IS CONFIGURED
    // Once the Office 365 Administrator has granted the `OnlineMeetings.ReadWrite.All` policy to this 
    // App Registration using Teams PowerShell, uncomment the block below to restore dynamic Teams meeting generation.
    // ------------------------------------------------------------------------------------------------
    const joinWebUrl = process.env.TEAMS_MEETING_URL || "";
    
    if (!joinWebUrl) {
      console.warn("WARNING: TEAMS_MEETING_URL is missing from environment variables.");
    }
    
    /*
    try {
      joinWebUrl = await createTeamsMeeting(subject, startDateTimeStr, endDateTimeStr);
    } catch (graphError: any) {
      console.error("Microsoft Graph Error, falling back...", graphError);
      throw new Error("Failed to generate Microsoft Teams meeting: " + (graphError.message || "Unknown error"));
    }
    */

    body.joinWebUrl = joinWebUrl;

    // 3. Send Emails via Outlook (Nodemailer) + iCalendar invites
    await sendAuditBookingEmail(body);

    return NextResponse.json(
      { success: true, message: "Meeting scheduled successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Audit Booking API Error:", error);
    
    // Return detailed error in development mode
    if (process.env.NODE_ENV !== "production") {
      const message = error instanceof Error ? error.message : "An unknown error occurred during dispatch.";
      return NextResponse.json(
        { success: false, error: message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: "Unable to schedule meeting. Please try again." },
      { status: 500 }
    );
  }
}
