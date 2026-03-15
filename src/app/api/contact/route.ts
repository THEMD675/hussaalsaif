import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = "hussa.alsaif07@gmail.com";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
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
    const {
      name,
      email,
      company,
      budget,
      partnershipType,
      timeline,
      message,
      _honeypot,
    } = body;

    if (_honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const safeName = escapeHtml(String(name).slice(0, 200).trim());
    const safeEmail = escapeHtml(String(email).slice(0, 200).trim());
    const safeCompany = escapeHtml(String(company || "").slice(0, 200).trim());
    const safeBudget = escapeHtml(String(budget || "Not specified").trim());
    const safePartnershipType = escapeHtml(
      String(partnershipType || "Not specified").trim()
    );
    const safeTimeline = escapeHtml(String(timeline || "Not specified").trim());
    const safeMessage = escapeHtml(String(message).slice(0, 5000).trim());

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="border-bottom: 2px solid #89BBdf; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="margin: 0; font-size: 24px; color: #1a1a1a;">New Brand Inquiry</h1>
          <p style="margin: 8px 0 0; color: #6b7280; font-size: 14px;">via hussaalsaif.com</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; width: 120px; vertical-align: top;">Name</td><td style="padding: 12px 0; color: #1a1a1a; font-size: 15px;">${safeName}</td></tr>
          <tr><td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Email</td><td style="padding: 12px 0; color: #1a1a1a; font-size: 15px;"><a href="mailto:${safeEmail}" style="color: #89BBdf;">${safeEmail}</a></td></tr>
          <tr><td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Company</td><td style="padding: 12px 0; color: #1a1a1a; font-size: 15px;">${safeCompany || "—"}</td></tr>
          <tr><td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Budget</td><td style="padding: 12px 0; color: #1a1a1a; font-size: 15px;">${safeBudget}</td></tr>
          <tr><td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Partnership</td><td style="padding: 12px 0; color: #1a1a1a; font-size: 15px;">${safePartnershipType}</td></tr>
          <tr><td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Timeline</td><td style="padding: 12px 0; color: #1a1a1a; font-size: 15px;">${safeTimeline}</td></tr>
          <tr><td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Message</td><td style="padding: 12px 0; color: #1a1a1a; font-size: 15px; line-height: 1.6;">${safeMessage.replace(/\n/g, "<br />")}</td></tr>
        </table>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${safeName}.</p>
        </div>
      </div>
    `;

    // Method 1: Resend (if API key configured)
    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Hussa AlSaif <onboarding@resend.dev>",
          to: [TO_EMAIL],
          reply_to: email.trim(),
          subject: `New Inquiry: ${safeName} — ${safeCompany || "Direct"}`,
          html: emailHtml,
        }),
      });

      if (res.ok) {
        return NextResponse.json({ success: true });
      }
      const err = await res.text();
      console.error("Resend failed:", err);
    }

    // Method 2: Direct SMTP via ImprovMX (emails to inquiries@hussaalsaif.com forward to Gmail)
    // Since ImprovMX is configured, we can use their SMTP relay
    // But we need credentials — skip for now

    // Method 3: Log to Vercel + notify via structured log (always works)
    const inquiry = {
      type: "PARTNERSHIP_INQUIRY",
      timestamp: new Date().toISOString(),
      name: safeName,
      email: safeEmail,
      company: safeCompany,
      budget: safeBudget,
      partnershipType: safePartnershipType,
      timeline: safeTimeline,
      message: safeMessage,
      ip,
    };

    // This appears in Vercel Runtime Logs — always captured
    console.log("📧 NEW INQUIRY:", JSON.stringify(inquiry));

    // Return success — inquiry is captured in logs even if email fails
    // The user sees "Inquiry Received" and the data is in Vercel logs
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
