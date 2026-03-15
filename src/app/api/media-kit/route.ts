import { NextResponse } from "next/server";

// Serve the media kit page as a downloadable PDF via print-to-PDF
// For now, redirect to the media kit page with a print trigger
export async function GET() {
  // Redirect to media kit page — the page has a "Download as PDF" button
  // that triggers window.print() which uses the print CSS styles
  return NextResponse.redirect(new URL("/media-kit", "https://hussaalsaif.com"), {
    status: 302,
  });
}
