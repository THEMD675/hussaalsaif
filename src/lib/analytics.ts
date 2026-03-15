import { track } from "@vercel/analytics";

// ---------------------------------------------------------------------------
// UTM helpers
// ---------------------------------------------------------------------------

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

/** Read UTM params from the current URL and sessionStorage (persisted on first visit). */
export function getUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};

  const STORAGE_KEY = "hussaalsaif_utm";

  // On first load, capture from URL and persist for the session
  const url = new URL(window.location.href);
  const fromURL: UTMParams = {};
  (["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const).forEach((key) => {
    const val = url.searchParams.get(key);
    if (val) fromURL[key] = val;
  });

  if (Object.keys(fromURL).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromURL));
    } catch {
      // storage blocked
    }
    return fromURL;
  }

  // Fall back to previously stored values
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as UTMParams;
  } catch {
    // storage blocked
  }

  return {};
}

// ---------------------------------------------------------------------------
// Core tracking helpers
// ---------------------------------------------------------------------------

/** Track a CTA button click. */
export function trackCTA(label: string, section: string) {
  track("cta_click", { label, section, ...getUTMParams() });
}

/** Track a social link click. */
export function trackSocial(platform: string) {
  track("social_click", { platform, ...getUTMParams() });
}

/** Track an email link click. */
export function trackEmail(email: string, section: string) {
  track("email_click", { email, section, ...getUTMParams() });
}

/** Track contact form submission. */
export function trackFormSubmission(data: Record<string, string>) {
  track("form_submission", { ...data, ...getUTMParams() });
}

/** Track a page/section view. */
export function trackPageView(page: string) {
  track("page_view", { page, ...getUTMParams() });
}

/** Track nav link click. */
export function trackNav(label: string) {
  track("nav_click", { label, ...getUTMParams() });
}

// ---------------------------------------------------------------------------
// Scroll depth tracking
// ---------------------------------------------------------------------------

const SCROLL_THRESHOLDS = [25, 50, 75, 100] as const;
const firedThresholds = new Set<number>();

export function initScrollDepthTracking() {
  if (typeof window === "undefined") return;

  const handler = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);

    for (const threshold of SCROLL_THRESHOLDS) {
      if (percent >= threshold && !firedThresholds.has(threshold)) {
        firedThresholds.add(threshold);
        track("scroll_depth", { depth: `${threshold}%`, ...getUTMParams() });
      }
    }
  };

  window.addEventListener("scroll", handler, { passive: true });
  return () => window.removeEventListener("scroll", handler);
}
