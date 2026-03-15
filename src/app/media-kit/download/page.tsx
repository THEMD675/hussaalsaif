"use client";

import { useEffect } from "react";

const BRANDS = [
  "Sephora", "Fendi", "Too Faced", "Estée Lauder",
  "Herbal Essences", "MAC", "Wella", "P&G", "Oral-B",
  "Level Shoes", "Sol de Janeiro", "Denman",
];

export default function MediaKitDownload() {
  useEffect(() => {
    const timer = setTimeout(() => window.print(), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx global>{`
        @page {
          size: A4;
          margin: 0.6in 0.7in;
        }
        html, body {
          background: #fff !important;
          color: #111 !important;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
          font-size: 11px;
          line-height: 1.5;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .mk { max-width: 720px; margin: 0 auto; padding: 40px 20px; }
        .accent { color: #89BBdf; }
        .bg-accent { background: #89BBdf; }
        h1 { font-size: 28px; font-weight: 700; letter-spacing: -0.5px; line-height: 1.1; margin-bottom: 4px; }
        h2 { font-size: 15px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 14px; padding-bottom: 6px; border-bottom: 2px solid #89BBdf; }
        h3 { font-size: 12px; font-weight: 700; margin-bottom: 2px; }
        .subtitle { font-size: 13px; color: #666; font-weight: 500; margin-bottom: 6px; }
        .contact-line { font-size: 11px; color: #999; }
        .divider { border: none; border-top: 1px solid #e5e7eb; margin: 20px 0; }
        .section { margin-bottom: 26px; page-break-inside: avoid; }

        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .stat-box {
          text-align: center; padding: 14px 8px;
          border: 1px solid #e5e7eb; border-radius: 8px;
        }
        .stat-value { font-size: 20px; font-weight: 700; color: #89BBdf; }
        .stat-label { font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-top: 2px; }

        .platform-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .platform-box {
          padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px;
        }
        .platform-name { font-size: 12px; font-weight: 700; margin-bottom: 2px; }
        .platform-followers { font-size: 18px; font-weight: 700; color: #89BBdf; }
        .platform-detail { font-size: 10px; color: #888; }

        .audience-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
        .audience-item {
          padding: 10px 12px; border-left: 3px solid #89BBdf;
          background: #f8fbfe; border-radius: 0 6px 6px 0;
        }
        .audience-title { font-size: 12px; font-weight: 700; }
        .audience-desc { font-size: 10px; color: #666; }

        .brands-list {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .brand-tag {
          font-size: 10px; font-weight: 600; padding: 5px 12px;
          border: 1px solid #d1d5db; border-radius: 20px; color: #333;
        }

        .tiers-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .tier-box {
          padding: 12px 14px; border: 1px solid #e5e7eb; border-radius: 8px;
        }
        .tier-name { font-size: 12px; font-weight: 700; }
        .tier-desc { font-size: 10px; color: #666; margin: 4px 0; }
        .tier-price { font-size: 10px; font-weight: 600; color: #89BBdf; }

        .footer-contact {
          text-align: center; padding: 16px 0; margin-top: 10px;
          border-top: 2px solid #89BBdf;
        }
        .footer-email { font-size: 14px; font-weight: 700; color: #89BBdf; }
        .footer-site { font-size: 11px; color: #888; margin-top: 2px; }

        @media print {
          .mk { padding: 0; }
          .no-print { display: none !important; }
        }

        @media screen {
          .print-btn {
            position: fixed; top: 20px; right: 20px; z-index: 100;
            background: #89BBdf; color: #fff; border: none;
            padding: 10px 24px; border-radius: 24px; font-size: 13px;
            font-weight: 600; cursor: pointer;
          }
          .print-btn:hover { background: #6ea8d4; }
        }
      `}</style>

      <button className="print-btn no-print" onClick={() => window.print()}>
        Save as PDF
      </button>

      <div className="mk">
        {/* HEADER */}
        <div className="section" style={{ textAlign: "center", marginBottom: 20 }}>
          <h1>Hussa AlSaif</h1>
          <p className="subtitle">Beauty &amp; Culture Icon &mdash; Saudi Arabia</p>
          <p className="contact-line">inquiries@hussaalsaif.com &nbsp;|&nbsp; hussaalsaif.com</p>
        </div>

        <hr className="divider" />

        {/* STATS */}
        <div className="section">
          <h2>At a Glance</h2>
          <div className="stats-grid">
            {[
              { value: "530K+", label: "Combined Reach" },
              { value: "191K", label: "YouTube Subs" },
              { value: "4.8%", label: "Avg Engagement" },
              { value: "12", label: "Brand Partners" },
            ].map((s) => (
              <div key={s.label} className="stat-box">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PLATFORMS */}
        <div className="section">
          <h2>Platform Breakdown</h2>
          <div className="platform-grid">
            {[
              { name: "Instagram", followers: "141K", detail: "4.8% engagement" },
              { name: "TikTok", followers: "198K", detail: "4.5M likes" },
              { name: "YouTube", followers: "191K", detail: "2.5M views" },
              { name: "Snapchat", followers: "Active", detail: "Daily stories" },
            ].map((p) => (
              <div key={p.name} className="platform-box">
                <div className="platform-name">{p.name}</div>
                <div className="platform-followers">{p.followers}</div>
                <div className="platform-detail">{p.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AUDIENCE */}
        <div className="section">
          <h2>Audience</h2>
          <div className="audience-grid">
            {[
              { title: "Primarily Women", desc: "Young Saudi women who set beauty and fashion trends" },
              { title: "Gen Z & Millennials", desc: "18-34 demographic with highest purchasing power in the Gulf" },
              { title: "Saudi-First", desc: "Rooted in Saudi Arabia with strong reach across the wider GCC" },
              { title: "High Purchase Intent", desc: "Audience that discovers, trusts, and buys based on recommendations" },
            ].map((a) => (
              <div key={a.title} className="audience-item">
                <div className="audience-title">{a.title}</div>
                <div className="audience-desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BRAND PARTNERS */}
        <div className="section">
          <h2>Brand Partners</h2>
          <div className="brands-list">
            {BRANDS.map((b) => (
              <span key={b} className="brand-tag">{b}</span>
            ))}
          </div>
        </div>

        {/* PARTNERSHIP TIERS */}
        <div className="section">
          <h2>Partnership Tiers</h2>
          <div className="tiers-grid">
            {[
              { tier: "Single Post", desc: "One Instagram Reel or TikTok with Stories coverage.", price: "Available on request" },
              { tier: "Campaign", desc: "3-5 posts across 2+ platforms for sustained brand storytelling.", price: "Available on request" },
              { tier: "Brand Ambassador", desc: "Quarterly or annual partnership with category exclusivity.", price: "Available on request" },
              { tier: "Custom", desc: "Event appearances, creative direction, long-form content.", price: "Let's talk" },
            ].map((t) => (
              <div key={t.tier} className="tier-box">
                <div className="tier-name">{t.tier}</div>
                <div className="tier-desc">{t.desc}</div>
                <div className="tier-price">{t.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer-contact">
          <div className="footer-email">inquiries@hussaalsaif.com</div>
          <div className="footer-site">hussaalsaif.com</div>
        </div>
      </div>
    </>
  );
}
