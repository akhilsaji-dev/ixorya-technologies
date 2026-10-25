import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON format in request body." },
      { status: 400 }
    );
  }

  try {
    const { name, email, phone, subject, category, message } = body;

    // Server-side validation
    if (typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a message with at least 5 characters." },
        { status: 400 }
      );
    }

    const cleanedName: string = name.trim();
    const cleanedEmail: string = email.trim();
    const cleanedMessage: string = message.trim();
    const cleanedPhone: string = typeof phone === "string" ? phone.trim() : "";
    let enquirySubject = "General Consultation";
    if (typeof subject === "string" && subject.trim().length > 0) {
      enquirySubject = subject.trim();
    } else if (typeof category === "string" && category.trim().length > 0) {
      enquirySubject = category.trim();
    }

    // Read server-only environment variables
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const recipientEmail = process.env.CONTACT_EMAIL?.trim();
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL?.trim() || "Ixoria Technologies <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("[Contact API Error] RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is temporarily unavailable. Please try again later or reach out directly." },
        { status: 503 }
      );
    }

    if (!recipientEmail || !isValidEmail(recipientEmail)) {
      console.error("[Contact API Error] CONTACT_EMAIL is missing or invalid.");
      return NextResponse.json(
        { error: "Recipient contact email is not properly configured. Please contact us directly." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: cleanedEmail,
      subject: `New Enquiry from ${cleanedName}: ${enquirySubject}`,
      text: `New Enquiry Received\n\nName: ${cleanedName}\nEmail: ${cleanedEmail}\nPhone: ${cleanedPhone || "Not provided"}\nSubject/Category: ${enquirySubject}\n\nMessage:\n${cleanedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0f172a;">
          <h2 style="color: #0284c7; margin-bottom: 16px;">New Contact Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(cleanedName)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${escapeHtml(cleanedEmail)}" style="color: #0284c7;">${escapeHtml(cleanedEmail)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(cleanedPhone || "Not provided")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Category/Subject:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(enquirySubject)}</td>
            </tr>
          </table>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 16px;">
            <p style="color: #64748b; margin-bottom: 8px;"><strong>Message:</strong></p>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; white-space: pre-wrap; color: #334155;">${escapeHtml(cleanedMessage)}</div>
          </div>

          <p style="font-size: 12px; color: #94a3b8; margin-top: 32px; border-top: 1px solid #f1f5f9; padding-top: 12px;">
            Sent automatically via Ixoria Technologies Website Contact System.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact API Error] Resend failed to send email:", error);
      return NextResponse.json(
        { error: error.message || "Failed to deliver enquiry through email service." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully.", id: data?.id },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[Contact API Error] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
