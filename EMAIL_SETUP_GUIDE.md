# Professional Email Setup for hussaalsaif.com

## Current DNS State (as of 2026-03-15)

```
Nameservers:  ns1.vercel-dns.com, ns2.vercel-dns.com (Vercel manages DNS)
MX Records:   10 mx1.improvmx.com, 20 mx2.improvmx.com (ImprovMX already configured)
SPF:          "v=spf1 include:spf.improvmx.com ~all"
DKIM:         Not configured
DMARC:        Not configured
```

---

## Options Comparison

| Option | Cost | Send From Domain | DKIM/DMARC | Notes |
|--------|------|-------------------|------------|-------|
| **Zoho Mail Free** | $0 | Yes (webmail/app only) | Yes | No IMAP. Web + Zoho app only. 5GB storage. |
| **ImprovMX Premium** | $7.50/mo | Yes (via Gmail/Apple Mail) | Yes | Already half-configured. SMTP relay included. |
| **Cloudflare Email Routing + Gmail SMTP** | $0 | Hacky (via Gmail app password) | No DKIM for custom domain | Breaks often. Gmail shows "sent via" warning. |
| **iCloud+ Custom Domain** | $0.99/mo | Yes | Yes (SPF+DKIM) | Requires iCloud+ subscription. Max 3 addresses/domain. |
| **Google Workspace** | $7-8.40/mo | Yes (full Gmail) | Yes | Overkill for one mailbox. Best deliverability. |
| **ImprovMX Free + Gmail workaround** | $0 | Sort of (via Gmail SMTP) | No DKIM | Already set up for forwarding. Sending is janky. |

---

## RECOMMENDATION: Zoho Mail Free Plan

**Why Zoho wins for this use case:**

1. **$0/month** - Budget conscious
2. **Full send + receive** from inquiries@hussaalsaif.com
3. **Proper SPF + DKIM + DMARC** - No "sent via gmail.com" footer
4. **Professional webmail + mobile app** (Zoho Mail app on iOS/Android)
5. **5GB storage per user, up to 5 users** on free plan
6. **No "sent from" footer** - Emails look fully professional

**The one trade-off:** No IMAP/POP on the free plan. You use Zoho's webmail (mail.zoho.com) or the Zoho Mail mobile app. No connecting to Apple Mail or Gmail. For a business inquiry address, this is perfectly fine -- she checks it in the Zoho app or browser.

If IMAP access in Apple Mail is a hard requirement, upgrade to **Zoho Mail Lite at $1/mo/user** or use **iCloud+ at $0.99/mo**.

---

## SETUP INSTRUCTIONS (Zoho Mail Free)

### Step 1: Remove Existing ImprovMX Records

Go to **Vercel Dashboard > Domains > hussaalsaif.com > DNS Records** and delete:

| Type | Name | Value | Action |
|------|------|-------|--------|
| MX | @ | mx1.improvmx.com | DELETE |
| MX | @ | mx2.improvmx.com | DELETE |
| TXT | @ | v=spf1 include:spf.improvmx.com ~all | DELETE |

### Step 2: Sign Up for Zoho Mail

1. Go to https://www.zoho.com/mail/zohomail-pricing.html
2. Click **"Forever Free Plan"** (bottom of page, or direct: https://www.zoho.com/mail/signup.html)
3. Choose **"Sign up with your existing domain"**
4. Enter domain: `hussaalsaif.com`
5. Create admin account: `inquiries@hussaalsaif.com`
6. Set a strong password
7. Complete signup

### Step 3: Verify Domain Ownership

Zoho will give you a **TXT verification record**. Add it in Vercel:

1. Go to **Vercel Dashboard > Domains > hussaalsaif.com > DNS Records**
2. Add the record Zoho provides:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | @ | `zoho-verification=zb########.zmverify.zoho.com` | Auto |

(The exact value will be shown in Zoho's setup wizard)

3. Click **Verify** in Zoho's admin panel (may take 1-5 minutes to propagate)

### Step 4: Add MX Records

After verification, add these MX records in **Vercel Dashboard > Domains > hussaalsaif.com > DNS Records**:

| Type | Name | Priority | Value | TTL |
|------|------|----------|-------|-----|
| MX | @ | 10 | mx.zoho.com | Auto |
| MX | @ | 20 | mx2.zoho.com | Auto |
| MX | @ | 50 | mx3.zoho.com | Auto |

**IMPORTANT:** Zoho's admin console may show slightly different MX values depending on region (e.g., mx.zoho.eu for EU). Use the exact values shown in YOUR Zoho setup wizard.

### Step 5: Configure SPF Record

Add this TXT record in Vercel:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | @ | `v=spf1 include:zohomail.com ~all` | Auto |

### Step 6: Configure DKIM

1. In Zoho Mail Admin Console, go to **Mail Administration > Domains > hussaalsaif.com > Email Authentication > DKIM**
2. Click **"Add Selector"** (use default selector name, e.g., `zoho`)
3. Zoho generates a public key. Copy the CNAME or TXT record value.
4. Add in Vercel:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | `zoho._domainkey` | `v=DKIM1; k=rsa; p=MIGfMA0GCS...` (paste the full key from Zoho) | Auto |

5. Go back to Zoho and click **Verify**

### Step 7: Configure DMARC

Add this TXT record in Vercel:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | _dmarc | `v=DMARC1; p=quarantine; rua=mailto:inquiries@hussaalsaif.com; pct=100; adkim=s; aspf=s` | Auto |

This tells receiving servers to quarantine (spam-folder) emails that fail authentication, and send aggregate reports to the inquiries address.

### Step 8: Verify Everything Works

1. **Check DNS propagation:** Go to https://mxtoolbox.com/SuperTool.aspx
   - Enter `hussaalsaif.com` and check MX, SPF, DKIM, DMARC
   - All should show green/pass

2. **Send a test email:**
   - Log into https://mail.zoho.com with inquiries@hussaalsaif.com
   - Send an email to a Gmail address
   - Check it arrives without spam warnings
   - Check email headers for DKIM pass

3. **Receive a test email:**
   - From Gmail, send an email to inquiries@hussaalsaif.com
   - Verify it arrives in Zoho inbox

4. **Check authentication:** Send to https://www.mail-tester.com for a deliverability score (aim for 9-10/10)

### Step 9: Install Zoho Mail App (Mobile)

1. Download **Zoho Mail** from App Store (iOS) or Google Play
2. Sign in with inquiries@hussaalsaif.com
3. Enable push notifications for instant email alerts

---

## Final DNS Records Summary

After setup, hussaalsaif.com DNS should have these email-related records:

```
TYPE    NAME              VALUE                                          PRIORITY
MX      @                 mx.zoho.com                                    10
MX      @                 mx2.zoho.com                                   20
MX      @                 mx3.zoho.com                                   50
TXT     @                 v=spf1 include:zohomail.com ~all               -
TXT     zoho._domainkey   v=DKIM1; k=rsa; p=<key from Zoho>             -
TXT     _dmarc            v=DMARC1; p=quarantine; rua=mailto:...         -
TXT     @                 zoho-verification=<value from Zoho>            -
```

---

## Optional: Additional Email Addresses

On the free plan, you can create up to 5 users. Useful addresses to consider:

- `inquiries@hussaalsaif.com` (primary - business/brand inquiries)
- `hussa@hussaalsaif.com` (personal brand)
- `press@hussaalsaif.com` (media inquiries)

Create these in Zoho Mail Admin Console > Users > Add User.

---

## If She Wants Apple Mail / Gmail Integration (Upgrade Path)

If webmail-only becomes a problem later:

- **Zoho Mail Lite:** $1/user/month - adds IMAP/POP, use with Apple Mail, Gmail, Outlook
- **iCloud+ Custom Domain:** $0.99/month - native Apple Mail integration, up to 3 addresses
- **Google Workspace Starter:** $7/user/month - full Gmail experience, best deliverability

The Zoho Free plan can be upgraded to Lite at any time without losing data or re-doing DNS.

---

## Where to Add DNS Records

All DNS records go in: **Vercel Dashboard > Settings > Domains > hussaalsaif.com > DNS Records**

The domain uses Vercel nameservers (ns1.vercel-dns.com, ns2.vercel-dns.com), so Vercel is the only place to manage DNS. Do NOT try to add records at a domain registrar -- they won't take effect since nameservers point to Vercel.
