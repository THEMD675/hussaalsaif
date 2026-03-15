# hussaalsaif.com — DNS & Email Status Report

**Date:** 2026-03-15

---

## DNS Overview

| Record | Value |
|--------|-------|
| **NS** | `ns1.vercel-dns.com`, `ns2.vercel-dns.com` |
| **A** | `216.150.16.129`, `216.150.16.193` |
| **CNAME** | None (root domain, A records used) |
| **MX** | `10 mx1.improvmx.com`, `20 mx2.improvmx.com` |
| **SPF** | `v=spf1 include:spf.improvmx.com ~all` |
| **DMARC** | `v=DMARC1; p=none; rua=mailto:hussa.alsaif07@gmail.com` |

---

## Hosting

- **Nameservers:** Vercel DNS
- **Server:** Vercel (confirmed via `server: Vercel` header)
- **Framework:** Next.js (confirmed via `x-nextjs-prerender` header)
- **SSL:** Active (HSTS enabled, HTTP/2)
- **Status:** Fully operational, serving traffic

---

## Email Setup

### MX Records — ImprovMX (FREE tier)
MX records point to ImprovMX, a free email forwarding service. This forwards emails sent to `*@hussaalsaif.com` to a real inbox (likely `hussa.alsaif07@gmail.com` based on the DMARC config).

**Status: WORKING** — Inbound email forwarding is configured.

### SPF — Configured
SPF record authorizes ImprovMX to send on behalf of the domain. The `~all` softfail policy is fine for forwarding.

**Status: WORKING**

### DMARC — Configured (but weak)
DMARC is set to `p=none` which means it only monitors — it does not reject or quarantine spoofed emails. Reports go to `hussa.alsaif07@gmail.com`.

**Status: WORKING but should be tightened to `p=quarantine` or `p=reject` once everything is stable.**

---

## Contact Form Analysis

**File:** `src/components/ContactForm.tsx`

### CRITICAL ISSUE: Form is BROKEN

The contact form uses Web3Forms API but the access key is a **placeholder**:

```
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";
```

This means:
- Every form submission sends `access_key=YOUR_ACCESS_KEY_HERE` to web3forms.com
- Web3Forms rejects it (invalid key)
- Users see the error state with a fallback email link to `inquiries@hussaalsaif.com`
- That fallback email probably works via ImprovMX forwarding, but the form itself does NOT work

### Fix Required
1. Go to https://web3forms.com — sign up (free, no account needed, just enter the destination email)
2. Get an access key
3. Replace `"YOUR_ACCESS_KEY_HERE"` with the real key
4. Redeploy

---

## Recommendations

### Email Provider — Keep ImprovMX (Free)
ImprovMX free tier is already set up and works. It handles:
- Forwarding `*@hussaalsaif.com` to Gmail
- No cost
- SPF already configured

If Hussa needs to **send** emails as `hussa@hussaalsaif.com` (not just receive), options:
1. **ImprovMX free** — allows SMTP sending via Gmail "Send mail as" (free, already set up)
2. **Zoho Mail free** — 5 users, 5GB, full mailbox (free but requires MX change)
3. **Google Workspace** — $6/mo (overkill for a portfolio site)

**Recommendation: Stick with ImprovMX.** It's free, already configured, and handles forwarding + sending via Gmail alias.

### Immediate Action Items
1. **Fix the contact form** — get a Web3Forms access key and replace the placeholder
2. **Tighten DMARC** — change `p=none` to `p=quarantine` after confirming email works end-to-end
3. **Test inbound email** — send a test to `inquiries@hussaalsaif.com` and confirm it arrives in Gmail
