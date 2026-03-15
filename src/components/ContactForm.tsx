"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { trackFormSubmission, getUTMParams, type UTMParams } from "@/lib/analytics";

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "Under 10K SAR", label: "Under 10K SAR" },
  { value: "10K - 50K SAR", label: "10K - 50K SAR" },
  { value: "50K - 100K SAR", label: "50K - 100K SAR" },
  { value: "100K+ SAR", label: "100K+ SAR" },
];

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

function validateForm(data: {
  name: string;
  email: string;
  company: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email";
  }

  if (!data.company.trim()) {
    errors.company = "Company or brand name is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Please provide a bit more detail";
  }

  return errors;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [utmParams, setUtmParams] = useState<UTMParams>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setUtmParams(getUTMParams());
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      company: (formData.get("company") as string) || "",
      budget: (formData.get("budget") as string) || "",
      message: (formData.get("message") as string) || "",
      _honeypot: (formData.get("_honeypot") as string) || "",
    };

    // Client-side validation
    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...utmParams }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        trackFormSubmission({
          budget: data.budget,
          company: data.company,
        });
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
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
        <p className="text-gray-400 text-[14px] leading-relaxed mb-6">
          Thank you for your interest. Hussa&apos;s team will review your inquiry and respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-[#89BBdf] text-[13px] font-medium hover:text-[#6ea8d4] transition-colors underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="contact-form-card rounded-2xl p-8 sm:p-10 text-left space-y-5"
      noValidate
    >
      {/* Honeypot -- hidden from real users, bots fill it */}
      <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="cf-hp">Leave this empty</label>
        <input
          id="cf-hp"
          name="_honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

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
            className={`contact-input w-full ${errors.name ? "contact-input-error" : ""}`}
            onChange={() => errors.name && setErrors((prev) => ({ ...prev, name: undefined }))}
          />
          {errors.name && (
            <p className="text-red-400 text-[12px] mt-1.5">{errors.name}</p>
          )}
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
            className={`contact-input w-full ${errors.company ? "contact-input-error" : ""}`}
            onChange={() => errors.company && setErrors((prev) => ({ ...prev, company: undefined }))}
          />
          {errors.company && (
            <p className="text-red-400 text-[12px] mt-1.5">{errors.company}</p>
          )}
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
            className={`contact-input w-full ${errors.email ? "contact-input-error" : ""}`}
            onChange={() => errors.email && setErrors((prev) => ({ ...prev, email: undefined }))}
          />
          {errors.email && (
            <p className="text-red-400 text-[12px] mt-1.5">{errors.email}</p>
          )}
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
          className={`contact-input w-full resize-none ${errors.message ? "contact-input-error" : ""}`}
          onChange={() => errors.message && setErrors((prev) => ({ ...prev, message: undefined }))}
        />
        {errors.message && (
          <p className="text-red-400 text-[12px] mt-1.5">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#89BBdf] hover:bg-[#6ea8d4] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide shadow-lg shadow-[#89BBdf]/15 cursor-pointer flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </button>

      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
          <p className="text-red-400 text-[13px] mb-1">
            {errorMessage}
          </p>
          <p className="text-red-400/70 text-[12px]">
            Or email{" "}
            <a href="mailto:inquiries@hussaalsaif.com" className="underline underline-offset-2 hover:text-red-300 transition-colors">
              inquiries@hussaalsaif.com
            </a>
            {" "}directly.
          </p>
        </div>
      )}

      <p className="text-gray-500/50 text-[11px] text-center pt-1">
        Your information is never shared. Expect a response within 24 hours.
      </p>
    </form>
  );
}
