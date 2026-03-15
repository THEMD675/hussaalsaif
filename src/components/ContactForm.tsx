"use client";

import { useState, type FormEvent } from "react";

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "Under 10K SAR", label: "Under 10K SAR" },
  { value: "10K - 50K SAR", label: "10K - 50K SAR" },
  { value: "50K - 100K SAR", label: "50K - 100K SAR" },
  { value: "100K+ SAR", label: "100K+ SAR" },
];

// Web3Forms free tier endpoint
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "New Brand Inquiry — hussaalsaif.com");
    data.append("from_name", "HussaAlSaif.com Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="contact-form-card rounded-2xl p-8 sm:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#89BBdf]/15 flex items-center justify-center mx-auto mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-bold text-white mb-2">Inquiry Received</h3>
        <p className="text-gray-400 text-[14px] leading-relaxed">
          Thank you for your interest. Hussa&apos;s team will review your inquiry and respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-card rounded-2xl p-8 sm:p-10 text-left space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block text-gray-400 text-[12px] font-medium tracking-wide uppercase mb-2">
            Name *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="contact-input w-full"
          />
        </div>
        <div>
          <label htmlFor="cf-company" className="block text-gray-400 text-[12px] font-medium tracking-wide uppercase mb-2">
            Company *
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            required
            placeholder="Brand or agency"
            className="contact-input w-full"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-email" className="block text-gray-400 text-[12px] font-medium tracking-wide uppercase mb-2">
            Email *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="contact-input w-full"
          />
        </div>
        <div>
          <label htmlFor="cf-budget" className="block text-gray-400 text-[12px] font-medium tracking-wide uppercase mb-2">
            Budget Range
          </label>
          <select
            id="cf-budget"
            name="budget"
            className="contact-input contact-select w-full"
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-gray-400 text-[12px] font-medium tracking-wide uppercase mb-2">
          Brief Message *
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about the campaign, timeline, and goals..."
          className="contact-input w-full resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#89BBdf] hover:bg-[#6ea8d4] disabled:opacity-60 text-white px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide shadow-lg shadow-[#89BBdf]/15 cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send Inquiry"}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-[13px] text-center">
          Something went wrong. Please email <a href="mailto:inquiries@hussaalsaif.com" className="underline">inquiries@hussaalsaif.com</a> directly.
        </p>
      )}
    </form>
  );
}
