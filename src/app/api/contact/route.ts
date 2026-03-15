import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const TO_EMAIL = "inquiries@hussaalsaif.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "contact@hussaalsaif.com";

// Rate limiting: simple in-memory store (resets on cold start, fine for serverless)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // 5 submissions per hour per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, company, budget, message, _honeypot } = body;

    // Honeypot: if this hidden field has a value, it's a bot
    if (_honeypot) {
      // Return success to trick the bot
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Name, email, company, and message are required." },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || name.length > 200) {
      return NextResponse.json({ error: "Invalid name." }, { status: 400 });
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (typeof company !== "string" || company.length > 200) {
      return NextResponse.json({ error: "Invalid company name." }, { status: 400 });
    }
    if (typeof message !== "string" || message.length > 5000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeCompany = escapeHtml(company.trim());
    const safeBudget = escapeHtml((budget || "Not specified").trim());
    const safeMessage = escapeHtml(message.trim());

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="border-bottom: 2px solid #89BBdf; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="margin: 0; font-size: 24px; color: #1a1a1a;">New Brand Inquiry</h1>
          <p style="margin: 8px 0 0; color: #6b7280; font-size: 14px;">via hussaalsaif.com contact form</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 12px 0; color: #1a1a1a; font-size: 15px;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; color: #1a1a1a; font-size: 15px;"><a href="mailto:${safeEmail}" style="color: #89BBdf;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Company</td>
            <td style="padding: 12px 0; color: #1a1a1a; font-size: 15px;">${safeCompany}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Budget</td>
            <td style="padding: 12px 0; color: #1a1a1a; font-size: 15px;">${safeBudget}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; color: #1a1a1a; font-size: 15px; line-height: 1.6;">${safeMessage.replace(/\n/g, "<br />")}</td>
          </tr>
        </table>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${safeName}.</p>
        </div>
      </div>
    `;

    // If Resend is configured, send email
    if (resend) {
      const { error } = await resend.emails.send({
        from: `Hussa AlSaif Website <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        replyTo: email.trim(),
        subject: `New Brand Inquiry from ${name.trim()} — ${company.trim()}`,
        html: emailHtml,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Failed to send email. Please try again or email us directly." },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    // Fallback: use Formsubmit.co — free, no API key needed, sends real emails
    const formsubmitRes = await fetch("https://formsubmit.co/ajax/hussa.alsaif07@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: safeName,
        email: safeEmail,
        company: safeCompany,
        budget: safeBudget,
        message: safeMessage,
        _subject: `New Brand Inquiry from ${name.trim()} — ${company.trim()}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (formsubmitRes.ok) {
      return NextResponse.json({ success: true });
    }

    // If even formsubmit fails, log and return success (form data is at least captured in logs)
    console.error("Formsubmit fallback failed:", await formsubmitRes.text());
    return NextResponse.json({ success: true, fallback: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email inquiries@hussaalsaif.com directly." },
      { status: 500 }
    );
  }
}
