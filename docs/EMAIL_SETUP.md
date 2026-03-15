# EMAIL SETUP -- hussaalsaif.com x Resend

**Purpose:** Enable the website contact form (`/api/contact/route.ts`) to send real emails via Resend, with proper DKIM authentication so emails land in inbox, not spam.

**Current state:**
- Resend SDK already installed (`resend` package in `package.json`)
- API route (`src/app/api/contact/route.ts`) already uses Resend -- just needs `RESEND_API_KEY`
- `.env.local` has placeholder vars but no actual API key
- Fallback is Formsubmit.co (works but no brand control, no custom "from" address)
- MX records: ImprovMX (forwarding `*@hussaalsaif.com` to `hussa.alsaif07@gmail.com`)
- SPF: `v=spf1 include:spf.improvmx.com ~all`
- DMARC: `v=DMARC1; p=none; rua=mailto:hussa.alsaif07@gmail.com`
- DKIM: Not configured
- DNS managed via: **Vercel** (nameservers: `ns1.vercel-dns.com`, `ns2.vercel-dns.com`)

---

## STEP 1: Create Resend Account

1. Go to https://resend.com/signup
2. Sign up with email (use `hussa.alsaif07@gmail.com` or your management email)
3. Verify your email address via the confirmation link
4. You are now on the **Free tier**: 100 emails/day, 3,000/month, 1 custom domain

---

## STEP 2: Add hussaalsaif.com Domain in Resend

1. Go to https://resend.com/domains
2. Click **"Add Domain"**
3. Enter: `hussaalsaif.com`
4. Select region: **us-east-1** (default, fine for all regions)
5. Click **"Add"**

Resend will now display DNS records you need to add. You will see:
- 3 DKIM CNAME records
- 1 SPF TXT record (you will merge this with your existing SPF)
- 1 DMARC TXT record (you already have one, will update it)

**Do NOT close this page.** Keep it open -- you need these records for the next steps.

---

## STEP 3: Add DKIM Records to Vercel DNS

Resend provides 3 CNAME records for DKIM. They look like this (exact values come from your Resend dashboard):

| Type | Name | Value |
|------|------|-------|
| CNAME | `resend._domainkey` | `<value from Resend>` |
| CNAME | `s1._domainkey` | `<value from Resend>` |
| CNAME | `s2._domainkey` | `<value from Resend>` |

**Where to add them:**

1. Go to https://vercel.com/dashboard
2. Click your project (hussaalsaif)
3. Go to **Settings** > **Domains** > click `hussaalsaif.com`
4. Scroll to **DNS Records**
5. For each DKIM record:
   - Type: **CNAME**
   - Name: copy the name from Resend (e.g., `resend._domainkey`)
   - Value: copy the value from Resend (e.g., `resend._domainkey.hussaalsaif.com.af.12345.smtp.resend.com`)
   - TTL: leave as Auto
   - Click **Add**

**Repeat for all 3 CNAME records.**

---

## STEP 4: Update SPF Record

You currently have:
```
v=spf1 include:spf.improvmx.com ~all
```

You need to add Resend's SPF include. The updated record:
```
v=spf1 include:spf.improvmx.com include:send.resend.com ~all
```

**In Vercel DNS:**
1. Find the existing TXT record for `@` that contains `v=spf1`
2. **Delete it**
3. Add a new TXT record:
   - Type: **TXT**
   - Name: `@`
   - Value: `v=spf1 include:spf.improvmx.com include:send.resend.com ~all`
   - TTL: Auto
   - Click **Add**

**Important:** There must be only ONE SPF record per domain. Do not create a second one -- delete the old one first, then add the new one.

---

## STEP 5: Update DMARC Record

You currently have:
```
v=DMARC1; p=none; rua=mailto:hussa.alsaif07@gmail.com
```

Update to a stricter policy now that DKIM will be configured:
```
v=DMARC1; p=quarantine; rua=mailto:hussa.alsaif07@gmail.com; pct=100
```

**In Vercel DNS:**
1. Find the existing TXT record for `_dmarc`
2. **Delete it**
3. Add a new TXT record:
   - Type: **TXT**
   - Name: `_dmarc`
   - Value: `v=DMARC1; p=quarantine; rua=mailto:hussa.alsaif07@gmail.com; pct=100`
   - TTL: Auto
   - Click **Add**

---

## STEP 6: Verify Domain in Resend

1. Go back to https://resend.com/domains
2. Click on `hussaalsaif.com`
3. Click **"Verify DNS Records"**
4. Wait 1-5 minutes for DNS propagation
5. All records should show green checkmarks

If verification fails, wait 15 minutes and try again. DNS propagation can take up to 1 hour in rare cases.

**Troubleshooting:**
- If CNAME records fail: Make sure you did NOT include the full domain in the Name field. In Vercel, enter only the subdomain part (e.g., `resend._domainkey`, not `resend._domainkey.hussaalsaif.com`)
- If SPF fails: Make sure there is only ONE TXT record containing `v=spf1` on the `@` host

---

## STEP 7: Create API Key

1. Go to https://resend.com/api-keys
2. Click **"Create API Key"**
3. Name: `hussaalsaif-website`
4. Permission: **Sending access**
5. Domain: `hussaalsaif.com`
6. Click **"Add"**
7. **Copy the API key immediately** -- it starts with `re_` and is shown only once

The key looks like: `re_AbCdEfGh_1234567890abcdef`

---

## STEP 8: Add Environment Variables to Vercel

1. Go to https://vercel.com/dashboard
2. Click your project (hussaalsaif)
3. Go to **Settings** > **Environment Variables**
4. Add these two variables:

| Key | Value | Environments |
|-----|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` (paste your actual key) | Production, Preview, Development |
| `RESEND_FROM_EMAIL` | `inquiries@hussaalsaif.com` | Production, Preview, Development |

5. Click **Save** for each

---

## STEP 9: Redeploy

The environment variables only take effect on new deployments.

1. Go to your project in Vercel
2. Go to **Deployments** tab
3. Find the latest Production deployment
4. Click the **...** menu > **Redeploy**
5. Confirm

Or from terminal:
```bash
cd /Users/abdullahalameer/projects/hussaalsaif-v3
vercel --prod
```

---

## STEP 10: Test Everything

### Test 1: Contact Form
1. Go to https://hussaalsaif.com
2. Fill out the contact form with a test submission
3. Check that the email arrives at `inquiries@hussaalsaif.com` (which forwards to `hussa.alsaif07@gmail.com` via ImprovMX)
4. The email should come from `inquiries@hussaalsaif.com` and should NOT have any spam warnings

### Test 2: Email Authentication
1. Go to https://www.mail-tester.com
2. Copy the test email address shown
3. Use the Resend dashboard to send a test email to that address:
   - Go to https://resend.com/emails
   - Click **"Send Test Email"**
   - From: `inquiries@hussaalsaif.com`
   - To: the mail-tester address
   - Subject: `Test`
   - Body: `Testing email deliverability for hussaalsaif.com`
4. Go back to mail-tester.com and click **"Then check your score"**
5. Aim for **9/10 or higher**

### Test 3: DNS Verification
Go to https://mxtoolbox.com/SuperTool.aspx and check:
- **MX Lookup** for `hussaalsaif.com` -- should show ImprovMX records
- **SPF Record Lookup** for `hussaalsaif.com` -- should show both `spf.improvmx.com` and `send.resend.com`
- **DKIM Lookup** for `resend._domainkey.hussaalsaif.com` -- should return valid DKIM record
- **DMARC Lookup** for `hussaalsaif.com` -- should show `p=quarantine`

---

## STEP 11: Update Local .env.local

Update your local development environment:

```bash
# In /Users/abdullahalameer/projects/hussaalsaif-v3/.env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=inquiries@hussaalsaif.com
```

---

## Final DNS Records Summary

After completing all steps, `hussaalsaif.com` should have these email-related DNS records:

```
TYPE    NAME                VALUE
MX      @                   10 mx1.improvmx.com
MX      @                   20 mx2.improvmx.com
TXT     @                   v=spf1 include:spf.improvmx.com include:send.resend.com ~all
TXT     _dmarc              v=DMARC1; p=quarantine; rua=mailto:hussa.alsaif07@gmail.com; pct=100
CNAME   resend._domainkey   <value from Resend dashboard>
CNAME   s1._domainkey       <value from Resend dashboard>
CNAME   s2._domainkey       <value from Resend dashboard>
```

---

## How It All Fits Together

```
[Visitor fills contact form on hussaalsaif.com]
    |
    v
[POST /api/contact]
    |
    v
[Resend API sends email]
    From: inquiries@hussaalsaif.com (authenticated via DKIM + SPF)
    To: inquiries@hussaalsaif.com
    ReplyTo: visitor's email
    |
    v
[ImprovMX receives email at inquiries@hussaalsaif.com]
    |
    v
[Forwards to hussa.alsaif07@gmail.com]
    |
    v
[Hussa sees email in Gmail, replies directly to visitor]
```

**Resend handles SENDING.** ImprovMX handles RECEIVING and FORWARDING. They work together.

---

## Cost

- Resend Free Tier: $0/month (100 emails/day, 3,000/month)
- ImprovMX Free Tier: $0/month (email forwarding)
- Total: **$0/month**

If volume exceeds 3,000 emails/month, Resend Pro is $20/month for 50,000 emails/month.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Contact form still uses Formsubmit fallback | Check that `RESEND_API_KEY` is set in Vercel env vars and you redeployed |
| Emails land in spam | Check SPF/DKIM/DMARC with mxtoolbox.com. Run mail-tester.com. Follow the warmup plan in `EMAIL_WARMUP.md` |
| "Domain not verified" error in Resend | DNS records not propagated yet. Wait 15-60 minutes and re-verify in Resend dashboard |
| "The from address is not verified" | Make sure `RESEND_FROM_EMAIL` matches the verified domain in Resend (must be `something@hussaalsaif.com`) |
| Resend returns 429 error | You hit the free tier rate limit (100/day). Wait until next day or upgrade to Pro |
