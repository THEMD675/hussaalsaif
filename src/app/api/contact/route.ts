import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = "inquiries@hussaalsaif.com";

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

    const labelStyle = "padding: 14px 0; color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; width: 130px; vertical-align: top; border-bottom: 1px solid #f3f4f6;";
    const valueStyle = "padding: 14px 0; color: #111827; font-size: 14px; border-bottom: 1px solid #f3f4f6;";

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 640px; margin: 0 auto; padding: 0;">
        <div style="background: linear-gradient(135deg, #89BBdf 0%, #a8d4f0 100%); padding: 40px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="margin: 0; font-size: 22px; color: #ffffff; font-weight: 700; letter-spacing: -0.01em;">New Partnership Inquiry</h1>
          <p style="margin: 6px 0 0; color: rgba(255,255,255,0.8); font-size: 13px;">hussaalsaif.com &middot; ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
        </div>
        <div style="padding: 32px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="${labelStyle}">Contact</td><td style="${valueStyle}"><strong>${safeName}</strong></td></tr>
            <tr><td style="${labelStyle}">Email</td><td style="${valueStyle}"><a href="mailto:${safeEmail}" style="color: #89BBdf; text-decoration: none;">${safeEmail}</a></td></tr>
            <tr><td style="${labelStyle}">Brand</td><td style="${valueStyle}">${safeCompany || "—"}</td></tr>
            <tr><td style="${labelStyle}">Partnership</td><td style="${valueStyle}">${safePartnershipType}</td></tr>
            <tr><td style="${labelStyle}">Budget</td><td style="${valueStyle}">${safeBudget}</td></tr>
            <tr><td style="${labelStyle}">Timeline</td><td style="${valueStyle}">${safeTimeline}</td></tr>
            <tr><td style="${labelStyle}">Message</td><td style="padding: 14px 0; color: #111827; font-size: 14px; line-height: 1.7;">${safeMessage.replace(/\n/g, "<br />")}</td></tr>
          </table>
          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb; display: flex; gap: 16px;">
            <a href="mailto:${safeEmail}?subject=Re: Partnership Inquiry — Hussa AlSaif" style="display: inline-block; background: #89BBdf; color: #fff; padding: 10px 24px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none;">Reply to ${safeName}</a>
          </div>
          <p style="color: #d1d5db; font-size: 11px; margin: 20px 0 0;">Hussa AlSaif Management &middot; hussaalsaif.com</p>
        </div>
      </div>
    `;

    // Send via Resend if API key is configured
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
          subject: `New Partnership Inquiry — ${safeCompany || safeName}`,
          html: emailHtml,
        }),
      });

      if (res.ok) {
        return NextResponse.json({ success: true });
      }
      const err = await res.text();
      console.error("Resend failed:", err);
    }

    // Fallback: log to Vercel Runtime Logs (always captured)
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

    console.log("NEW INQUIRY:", JSON.stringify(inquiry));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
