import * as ics from "ics";
import { sendEmail } from "@/lib/email";

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "sales@erptitans.com";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  erpSystem?: string;
  message: string;
}

interface AuditFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  selectedDate: string;
  selectedTime: string;
  joinWebUrl?: string;
}

const generateAdminEmail = (title: string, data: Record<string, string | undefined>, messageText?: string, joinWebUrl?: string) => {
  const rows = Object.entries(data)
    .filter(([, value]) => value)
    .map(([key, value]) => `
      <div style="margin-bottom: 8px;">
        <span style="font-weight: bold; color: #334155;">${key}:</span> <span style="color: #0F172A;">${value}</span>
      </div>
    `).join("");

  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #0F3B84; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #FFFFFF; margin: 0; font-size: 24px;">ERP Titans</h1>
      </div>
      
      <div style="border: 1px solid #E2E8F0; border-top: none; padding: 30px; border-radius: 0 0 8px 8px; background-color: #FFFFFF;">
        <h2 style="color: #0F3B84; margin-top: 0; margin-bottom: 20px; font-size: 20px;">
          ${title}
        </h2>
        
        <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; font-size: 14px; margin-bottom: 20px;">
          ${rows}
          <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #E2E8F0; color: #64748B; font-size: 12px;">
            Timestamp: ${new Date().toISOString()}
          </div>
        </div>
        
        ${joinWebUrl ? `
          <h3 style="color: #0F3B84; font-size: 16px; margin-bottom: 10px;">Generated Teams Meeting:</h3>
          <div style="background-color: #F0FDF4; border-left: 4px solid #22C55E; padding: 15px; border-radius: 4px; font-size: 14px; margin-bottom: 20px;">
            <a href="${joinWebUrl}" style="color: #2563EB; font-weight: bold; text-decoration: none;">Click here to join meeting</a>
          </div>
        ` : ''}

        ${messageText ? `
          <h3 style="color: #0F3B84; font-size: 16px; margin-bottom: 10px;">Message:</h3>
          <div style="background-color: #F0F9FF; border-left: 4px solid #0F3B84; padding: 15px; border-radius: 4px; font-size: 14px; color: #334155; white-space: pre-wrap;">
            ${messageText}
          </div>
        ` : ''}
      </div>
    </div>
  `;
};

const generateCustomerConfirmationEmail = (name: string, data: Record<string, string | undefined>) => {
  const rows = Object.entries(data)
    .filter(([, value]) => value)
    .map(([key, value]) => `
      <div style="margin-bottom: 8px;">
        <span style="font-weight: bold; color: #334155;">${key}:</span> <span style="color: #0F172A;">${value}</span>
      </div>
    `).join("");

  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #334155;">
      <div style="background-color: #0F3B84; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #FFFFFF; margin: 0; font-size: 22px;">Thank You for Your Inquiry</h1>
      </div>
      
      <div style="border: 1px solid #E2E8F0; border-top: none; padding: 30px; border-radius: 0 0 8px 8px; background-color: #FFFFFF;">
        <p style="font-size: 14px; margin-top: 0;">Dear ${name},</p>
        <p style="font-size: 14px; line-height: 1.6;">
          Thank you for reaching out to <strong>ERP Titans</strong>. We appreciate your interest in our ERP recovery and optimization services.
        </p>
        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 25px;">
          We have received your inquiry and our team is reviewing the details you provided. We understand that ERP challenges can impact your business operations, and we're committed to providing you with a thoughtful and comprehensive response.
        </p>
        
        <div style="background-color: #F0F9FF; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #0F3B84; font-size: 16px; margin-top: 0; margin-bottom: 10px;">What to Expect:</h3>
          <p style="font-size: 13px; line-height: 1.6; margin: 0; color: #475569;">
            Our specialists will analyze your situation and reach out within <strong>24 hours</strong> with initial insights and next steps tailored to your specific needs. If you have any urgent questions in the meantime, please don't hesitate to contact us directly at <a href="mailto:sales@erptitans.com" style="color: #2563EB; text-decoration: none;">sales@erptitans.com</a>.
          </p>
        </div>
        
        <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
          <h3 style="color: #0F3B84; font-size: 16px; margin-top: 0; margin-bottom: 10px;">Your Information:</h3>
          <div style="font-size: 13px;">
            ${rows}
          </div>
        </div>
        
        <p style="font-size: 14px; line-height: 1.6;">
          We look forward to partnering with you to unlock your ERP system's full potential and drive your business forward.
        </p>
        
        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 30px;">
          Best regards,
        </p>
        
        <div style="border-top: 1px solid #E2E8F0; padding-top: 20px; font-size: 12px; color: #64748B; line-height: 1.6;">
          <strong>ERP Titans</strong><br/>
          ERP Recovery Specialists for Global SMEs<br/>
          ✉ <a href="mailto:sales@erptitans.com" style="color: #2563EB; text-decoration: none;">sales@erptitans.com</a><br/>
          🌐 <a href="https://www.erptitans.com" style="color: #2563EB; text-decoration: none;">www.erptitans.com</a>
        </div>
      </div>
    </div>
  `;
};

// NEW: Generates the exact "Meeting Confirmed" visual email matching the screenshots
const generateCustomerAuditEmail = (name: string, dateStr: string, timeStr: string, company: string, joinWebUrl?: string) => {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ERP Titans Meeting Confirmation</title>
</head>
<body style="font-family:Arial,Helvetica,sans-serif;padding:40px;background:#f5f5f5;">

<div style="max-width:600px;margin:auto;background:#ffffff;border:1px solid #cccccc;border-radius:8px;overflow:hidden;">

<div style="background-color:#163A63;padding:30px;text-align:center;color:#ffffff;">
  <h1 style="margin:0;font-size:24px;">✅ Meeting Confirmed!</h1>
  <p style="margin:5px 0 0 0;font-size:14px;color:#cbd5e1;">Your ERP Health Audit has been scheduled.</p>
</div>

<div style="padding:30px;">

<p style="font-size:14px;color:#334155;">Dear ${name},</p>
<p style="font-size:14px;color:#334155;line-height:1.6;margin-bottom:25px;">
  Thank you for scheduling a consultation with ERP Titans. We look forward to discussing your ERP requirements with you.
</p>

<div style="background-color:#163A63;padding:25px;border-radius:8px;color:#ffffff;margin-bottom:20px;">
  <div style="font-size:12px;font-weight:bold;color:#93C5FD;margin-bottom:10px;text-transform:uppercase;letter-spacing:1px;">YOUR MEETING IS CONFIRMED FOR</div>
  <div style="font-size:20px;font-weight:bold;margin-bottom:8px;">📅 ${dateStr}</div>
  <div style="font-size:16px;">🕒 ${timeStr} MT (Mountain Time)</div>
</div>

<div style="background-color:#f8fafc;padding:25px;border-radius:8px;margin-bottom:20px;color:#334155;font-size:14px;">
  <h3 style="color:#0F3B84;font-size:16px;margin-top:0;margin-bottom:15px;">Meeting Details</h3>
  <div style="margin-bottom:10px;"><strong>Date:</strong> ${dateStr}</div>
  <div style="margin-bottom:10px;"><strong>Time:</strong> ${timeStr}</div>
  <div style="margin-bottom:10px;"><strong>Company:</strong> ${company}</div>
  <div style="margin-bottom:10px;"><strong>Name:</strong> ${name}</div>
  <div style="margin-bottom:15px;"><strong>Format:</strong> Microsoft Teams Meeting</div>
  ${joinWebUrl ? `
  <a href="${joinWebUrl}" style="background-color:#2563EB;color:#ffffff;padding:12px 20px;text-decoration:none;border-radius:6px;display:inline-block;font-weight:bold;font-size:14px;">
  Join Teams Meeting
  </a>
  ` : `<div style="color:#64748B;font-style:italic;font-size:13px;">Meeting link will be provided separately.</div>`}
</div>

<div style="background-color:#FEF9C3;padding:25px;border-radius:8px;margin-bottom:25px;border:1px solid #FEF08A;color:#713F12;">
  <h3 style="color:#854D0E;font-size:16px;margin-top:0;margin-bottom:10px;">💡 What to Prepare</h3>
  <ul style="font-size:14px;line-height:1.6;margin:0;padding-left:20px;">
    <li style="margin-bottom:5px;">Current ERP system limitations</li>
    <li style="margin-bottom:5px;">Major business challenges</li>
    <li style="margin-bottom:5px;">Key business processes</li>
    <li>Team members attending</li>
  </ul>
</div>

<p style="font-size:14px;color:#334155;line-height:1.6;margin-bottom:30px;">
  <strong>Need to Reschedule?</strong><br>
  Reply to this email or contact <a href="mailto:sales@erptitans.com" style="color:#2563EB;text-decoration:none;">sales@erptitans.com</a>.
</p>

<div style="border-top:1px solid #E2E8F0;padding-top:20px;font-size:12px;color:#64748B;line-height:1.6;">
  <strong>ERP Titans</strong><br>
  ERP Recovery Specialists for Global SMEs<br>
  ✉ <a href="mailto:sales@erptitans.com" style="color:#2563EB;text-decoration:none;">sales@erptitans.com</a><br>
  🌐 <a href="https://www.erptitans.com" style="color:#2563EB;text-decoration:none;">www.erptitans.com</a>
</div>

</div>
</div>

</body>
</html>`;
};

// Helper to convert date strings (YYYY-MM-DD, HH:MM AM/PM) into ICS format
const generateIcsEvent = (data: AuditFormData) => {
  const parsedDate = new Date(data.selectedDate);
  if (isNaN(parsedDate.getTime())) return null;

  const year = parsedDate.getFullYear();
  const month = parsedDate.getMonth() + 1;
  const day = parsedDate.getDate();
  
  let hours = 0;
  let minutes = 0;
  const timeMatch = data.selectedTime.trim().match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
  if (timeMatch) {
    hours = parseInt(timeMatch[1], 10);
    minutes = parseInt(timeMatch[2], 10);
    const ampm = timeMatch[3] ? timeMatch[3].toUpperCase() : null;
    if (ampm === "PM" && hours < 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;
  }

  const start: ics.DateArray = [year, month, day, hours, minutes];

  const event: ics.EventAttributes = {
    start,
    duration: { hours: 1, minutes: 0 },
    title: 'ERP Health Audit Consultation',
    description: `ERP Health Audit for ${data.companyName}\nJoin Meeting: ${data.joinWebUrl || ''}`,
    location: data.joinWebUrl || 'Online Microsoft Teams Meeting',
    url: data.joinWebUrl,
    status: 'CONFIRMED',
    busyStatus: 'BUSY',
    organizer: { name: 'ERP Titans', email: NOTIFICATION_EMAIL },
    attendees: [
      { name: data.fullName, email: data.email, rsvp: true, partstat: 'NEEDS-ACTION', role: 'REQ-PARTICIPANT' }
    ]
  };

  const { error, value } = ics.createEvent(event);
  if (error || !value) {
    console.error("Error creating ICS event:", error);
    return null;
  }
  return value;
};


export const sendContactEmail = async (data: ContactFormData) => {
  try {
    const adminHtml = generateAdminEmail("New Contact Form Submission", {
      "Name": data.fullName,
      "Email": data.email,
      "Phone": data.phone,
      "Company": data.companyName,
      "Industry": data.industry,
      "Current ERP": data.erpSystem || "Not specified",
    }, data.message);

    const customerHtml = generateCustomerConfirmationEmail(data.fullName.split(' ')[0], {
      "Name": data.fullName,
      "Email": data.email,
      "Phone": data.phone,
      "Company": data.companyName,
      "Industry": data.industry,
    });

    await Promise.all([
      sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: "New ERP Titans Contact Form Submission",
        html: adminHtml,
      }),
      sendEmail({
        to: data.email,
        subject: "Thank You for Contacting ERP Titans",
        html: customerHtml,
      })
    ]);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("OUTLOOK EMAIL SEND ERROR (Contact Form):", message);
    throw error;
  }
};

export const sendAuditBookingEmail = async (data: AuditFormData) => {
  try {
    const adminHtml = generateAdminEmail("New ERP Audit Booking", {
      "Name": data.fullName,
      "Email": data.email,
      "Phone": data.phone,
      "Company": data.companyName,
      "Preferred Date": data.selectedDate,
      "Preferred Time": data.selectedTime,
    }, undefined, data.joinWebUrl);

    const displayDate = new Date(data.selectedDate).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const customerHtml = generateCustomerAuditEmail(
      data.fullName.split(' ')[0],
      displayDate,
      data.selectedTime,
      data.companyName,
      data.joinWebUrl
    );


    const icsContent = generateIcsEvent(data);

    const attachments = icsContent ? [{
      name: 'invite.ics',
      contentType: 'text/calendar; method=REQUEST',
      contentBytes: Buffer.from(icsContent).toString('base64')
    }] : [];

    await Promise.all([
      sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: "URGENT: New ERP Audit Booking | ERP Titans",
        html: adminHtml,
        attachments: attachments
      }),
      sendEmail({
        to: data.email,
        subject: "Your ERP Health Audit Confirmation",
        html: customerHtml,
      })
    ]);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("OUTLOOK EMAIL SEND ERROR (Audit Booking):", message);
    throw error;
  }
};
