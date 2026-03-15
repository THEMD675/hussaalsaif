# OUTREACH AUTOMATION PLAN -- hussaalsaif.com

**Purpose:** Scale brand outreach from manual one-off emails to automated sequences with tracking, follow-ups, and CRM integration.

---

## Architecture Overview

```
[Resend]                          [Instantly.ai OR Lemlist]
  |                                    |
  Website contact form emails          Cold outreach sequences
  Transactional (auto-replies)         Follow-up automation
  100 emails/day free                  Warmup network built-in
  |                                    |
  v                                    v
[ImprovMX]                        [Reply tracking]
  |                                    |
  Forwards to Gmail                    Opens, clicks, replies
  |                                    |
  v                                    v
[Gmail]                           [CRM: Notion or HubSpot]
  Hussa reads + replies                Pipeline tracking
```

**Resend stays as the website email sender.** A dedicated cold outreach tool handles automated sequences separately -- this protects the domain reputation by keeping transactional and cold email on different sending paths.

---

## Tool Recommendations

### For Cold Outreach Sequences: Instantly.ai

| Feature | Instantly.ai | Lemlist | Woodpecker |
|---------|:------------:|:-------:|:----------:|
| Price | $37/mo (Growth) | $39/mo (Email Starter) | $29/mo |
| Email accounts | Unlimited | 1 (Starter), 3 (Pro) | 2 |
| Warmup included | Yes (unlimited) | Yes (Lemwarm) | Yes |
| Sequences | Unlimited | 3 (Starter) | Unlimited |
| Leads/month | 1,000 (Growth) | Unlimited | 500 |
| AI personalization | Yes | Yes | No |
| Reply detection | Yes | Yes | Yes |
| CRM integration | Built-in basic CRM | HubSpot, Salesforce, Pipedrive | HubSpot, Pipedrive |
| Best for | Volume outreach, multiple accounts | Personalized creative sequences | Simple cold email |

**Recommendation: Instantly.ai at $37/month.** It bundles warmup + cold outreach + basic CRM + lead database in one tool. The unlimited warmup alone is worth it -- replaces the need for a separate Warmbox subscription ($15/month).

**Alternative: Lemlist at $39/month** if you want more creative email sequences with dynamic images, video embeds, or LinkedIn steps. Better for high-touch luxury brand outreach.

### For CRM: Notion (Primary) or HubSpot Free (If scaling)

Already covered in `CRM_SETUP.md`. Use Notion for the first 6 months. Switch to HubSpot Free if deal volume exceeds 50 active conversations.

---

## Setting Up Instantly.ai

### Step 1: Create Account
1. Go to https://instantly.ai/signup
2. Sign up with your management email
3. Choose **Growth plan** ($37/month, cancel anytime)

### Step 2: Connect Email Account
1. Go to **Settings > Email Accounts > Add Account**
2. Connect `inquiries@hussaalsaif.com` via:
   - If using Gmail (via ImprovMX SMTP forwarding): Connect Gmail with app password
   - If using Zoho Mail: Connect via IMAP/SMTP credentials
   - If using a dedicated sending account: Use SMTP credentials
3. Set daily sending limit: **30 emails/day** (start low, increase after warmup)
4. Set sending window: **9:00 AM - 2:00 PM AST (UTC+3)**
5. Set minimum delay between emails: **3-5 minutes**

### Step 3: Enable Warmup
1. Go to **Email Accounts > Warmup Settings**
2. Enable warmup for `inquiries@hussaalsaif.com`
3. Settings:
   - Daily warmup emails: **30/day** (ramp up automatically)
   - Reply rate: **40%**
   - Warmup tag: Auto
4. Let warmup run for **14 days minimum** before sending campaigns

### Step 4: Configure Sending Settings
1. **Custom tracking domain:** Go to **Settings > Tracking Domain**
   - Add a subdomain: `track.hussaalsaif.com`
   - Add CNAME record in Vercel DNS:
     - Type: CNAME
     - Name: `track`
     - Value: `tracking.instantly.ai` (or whatever Instantly provides)
   - This prevents tracking links from triggering spam filters
2. **Signature:** Add the HTML email signature from `EMAIL_WARMUP.md`
3. **Unsubscribe link:** Enable one-click unsubscribe (required by Gmail/Yahoo as of Feb 2024)

---

## Email Sequence Structure

### Sequence 1: Brand Collaboration Outreach (4-email sequence)

**Use for:** Cold outreach to brands Hussa has NOT worked with.

#### Email 1: Initial Outreach (Day 0)
**Subject:** `Collaboration Inquiry -- Hussa AlSaif x {{companyName}}`
**Send time:** 9:30 AM AST, Sunday-Thursday

```
Hi {{firstName}},

I'm Hussa AlSaif, a beauty and curly hair content creator from Saudi Arabia
with 330K+ combined followers across Instagram and TikTok (10.6M+ TikTok likes).

I've been following {{companyName}} closely -- {{personalized_line}}.

My niche is curly hair and beauty in the Saudi/GCC market. I hold a degree
in Public Relations and have partnered with Sephora, Fendi, Dyson Arabia,
Kerastase, and Too Faced.

I'd love to explore a collaboration with {{companyName}}. My media kit is
at hussaalsaif.com. Would you be open to a brief conversation this week?

Best,
Hussa AlSaif
```

**Variables to personalize per lead:**
- `{{firstName}}` -- PR contact's first name
- `{{companyName}}` -- brand name
- `{{personalized_line}}` -- reference a specific product, campaign, or social post (this is what makes the email work; never skip this)

---

#### Email 2: Follow-Up (Day 3)
**Subject:** `Re: Collaboration Inquiry -- Hussa AlSaif x {{companyName}}`
**Send time:** 10:00 AM AST

```
Hi {{firstName}},

Following up on my note from Sunday. I know your inbox is busy so I'll
keep this short.

I recently {{recent_achievement}} and thought the timing could work well
for a {{companyName}} collaboration.

Happy to share specific content ideas if there's interest. A 15-minute
call works for me anytime this week.

Best,
Hussa
```

**Variables:**
- `{{recent_achievement}}` -- a recent viral post, follower milestone, event, or brand campaign Hussa completed

---

#### Email 3: Value Add (Day 7)
**Subject:** `Quick idea for {{companyName}}`
**Send time:** 9:00 AM AST

```
Hi {{firstName}},

One last thought -- I noticed {{observation_about_brand}} and had an idea:

{{specific_content_idea}}

This format has driven strong engagement for me with similar brands. My
curly hair audience in the GCC is highly engaged and actively purchases
based on my recommendations.

No pressure at all -- just wanted to share the idea in case it resonates.

Best,
Hussa
```

**Variables:**
- `{{observation_about_brand}}` -- something specific about their recent campaign, product launch, or social strategy
- `{{specific_content_idea}}` -- a concrete proposal (e.g., "a curly hair routine video featuring [Product X] paired with a styling tutorial")

---

#### Email 4: Break-Up (Day 14)
**Subject:** `Closing the loop -- Hussa AlSaif`
**Send time:** 10:30 AM AST

```
Hi {{firstName}},

I've reached out a few times about a potential {{companyName}} x Hussa AlSaif
collaboration and I respect your time, so this will be my last note.

If the timing isn't right now, no problem at all. My inbox is always open
at inquiries@hussaalsaif.com if anything changes down the line.

Wishing {{companyName}} a great quarter.

Best,
Hussa
```

**This email typically gets the highest reply rate** because it creates urgency without pressure. Many people reply to break-up emails to keep the door open.

---

### Sequence 2: Warm Re-Engagement (3-email sequence)

**Use for:** Brands Hussa has worked with before (Sephora, Too Faced, Kerastase, Dyson, Fendi, etc.)

#### Email 1: Reconnect (Day 0)
**Subject:** `{{firstName}}, great working with {{companyName}} -- next steps?`

```
Hi {{firstName}},

Hope you've been well. I really enjoyed our collaboration on
{{past_campaign}} and the response from my audience was fantastic.

I've grown to {{current_follower_count}} followers since then and have
some fresh content ideas that could work well for {{companyName}}'s
upcoming season.

Would love to reconnect and explore what's next. Free for a call this week?

Best,
Hussa
```

#### Email 2: Follow-Up (Day 5)
**Subject:** `Re: {{firstName}}, great working with {{companyName}} -- next steps?`

```
Hi {{firstName}},

Just circling back on this. I have availability in {{month}} for
content projects and wanted to make sure {{companyName}} is on my radar
if there's something in the pipeline.

My updated media kit is at hussaalsaif.com. Happy to share specific
proposals if helpful.

Best,
Hussa
```

#### Email 3: Soft Close (Day 10)
```
Hi {{firstName}},

Totally understand if the timing doesn't work right now. I'll keep
{{companyName}} in mind for future content and feel free to reach
out anytime at inquiries@hussaalsaif.com.

Looking forward to working together again.

Best,
Hussa
```

---

### Sequence 3: PR Agency Outreach (3-email sequence)

**Use for:** Reaching out to PR agencies like Niche Arabia, ArabyAds, Starfish Influencers, Koraspond.

#### Email 1: Introduction (Day 0)
**Subject:** `{{agencyName}} -- Saudi beauty/curly hair creator for your roster`

```
Hi {{firstName}},

I'm Hussa AlSaif, a content creator and PR professional from
Al Khobar, Saudi Arabia. I'm reaching out because {{agencyName}}
represents brands I'd love to partner with.

Quick stats:
- 330K+ combined following (Instagram + TikTok)
- 10.6M+ TikTok likes
- Saudi Arabia's leading curly hair content creator
- Previous partners: Fendi, Sephora, Dyson Arabia, Kerastase, Too Faced

I hold a BA in Media & Communication and work as a PR specialist,
so I approach partnerships strategically -- not just as content placements.

Would {{agencyName}} be open to a conversation about representation
or connecting me with relevant brand partners?

Media kit: hussaalsaif.com

Best,
Hussa AlSaif
```

#### Email 2: Follow-Up with Social Proof (Day 5)
```
Hi {{firstName}},

Following up -- I wanted to share a recent example of my work:

{{link_to_recent_content}}

This piece generated {{engagement_metric}} and demonstrates the kind
of results I deliver for brand partners.

Happy to jump on a quick call to discuss how we might work together.

Best,
Hussa
```

#### Email 3: Close (Day 10)
```
Hi {{firstName}},

Last note from me -- I understand agencies receive many inquiries.
If the fit isn't right, no hard feelings at all.

My inbox is always open at inquiries@hussaalsaif.com for future
opportunities. Thanks for your time.

Best,
Hussa
```

---

## Tracking Opens, Clicks, and Replies

### Built-in Tracking (Instantly.ai)

Instantly.ai tracks these automatically:
- **Opens:** Pixel-based open tracking (shows who opened and how many times)
- **Clicks:** Link click tracking (shows who clicked which link)
- **Replies:** Automatic reply detection (moves lead to "Replied" status)
- **Bounces:** Automatic bounce detection and removal

View all metrics at: **Instantly.ai Dashboard > Analytics**

### Custom Tracking Domain Setup

Required to prevent tracking links from being flagged by spam filters.

1. In Instantly.ai, go to **Settings > Tracking Domain**
2. Enter subdomain: `track.hussaalsaif.com`
3. Add this DNS record in Vercel:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | `track` | Value provided by Instantly.ai | Auto |

4. Verify in Instantly.ai

### What to Track in CRM

After each outreach batch, update these fields in Notion CRM:

| Field | Source | Update Frequency |
|-------|--------|-----------------|
| Deal Stage | Manually after each reply | Real-time |
| Open rate | Instantly.ai dashboard | Weekly |
| Reply rate | Instantly.ai dashboard | Weekly |
| Bounce rate | Instantly.ai auto-detection | After each campaign |
| Follow-up date | Set when moving to Outreach stage | Per-deal |
| Notes | Log reply content and next steps | Per interaction |

### Key Metrics to Watch

| Metric | Healthy Range | Action if Outside Range |
|--------|:------------:|------------------------|
| Open rate | 40-60% | Below 40%: Improve subject lines. Above 80%: Suspicious, check tracking. |
| Reply rate | 5-15% (cold), 20-40% (warm) | Below 5%: Rewrite email copy, improve personalization. |
| Bounce rate | <3% | Above 3%: Verify email addresses before sending. Clean your list. |
| Spam complaint rate | <0.1% | Above 0.1%: STOP campaign immediately. Review content and list quality. |
| Unsubscribe rate | <1% | Above 1%: Targeting wrong audience or sending too frequently. |

---

## CRM Integration

### Option A: Notion CRM (Manual, Free)

If using Notion CRM (recommended in `CRM_SETUP.md`):

1. After each outreach batch in Instantly.ai, manually update Notion:
   - Create/update brand entry with deal stage
   - Log reply content in Notes
   - Set next follow-up date
   - Update deal value when negotiation begins

2. Weekly sync routine (every Sunday):
   - Export Instantly.ai campaign stats
   - Update pipeline board in Notion
   - Move deals between stages based on replies

### Option B: HubSpot Free (Automated)

If using HubSpot Free CRM:

1. Instantly.ai has native HubSpot integration:
   - Go to **Instantly.ai > Settings > Integrations > HubSpot**
   - Connect your HubSpot account
   - Map fields: Email > Contact Email, Company > Company Name, Status > Deal Stage

2. Replies automatically create/update HubSpot contacts
3. Deal stages sync between platforms
4. Set up HubSpot email notifications for replies

### Option C: Zapier Bridge (Notion + Instantly.ai)

If you want automated sync between Instantly.ai and Notion:

1. Create a Zapier account at https://zapier.com (free tier: 100 tasks/month)
2. Create a Zap:
   - Trigger: Instantly.ai > New Reply
   - Action: Notion > Update Database Item
3. Map fields appropriately
4. This automates the manual sync from Option A

---

## Weekly Operating Rhythm

| Day | Action | Tool |
|-----|--------|------|
| **Sunday** | Review pipeline. Launch new outreach sequences for the week. | Instantly.ai + Notion |
| **Monday** | Check replies from Sunday sends. Respond within 2 hours. | Gmail + Notion |
| **Tuesday** | Mid-week reply check. Follow up on warm leads. | Gmail + Notion |
| **Wednesday** | Content production day. No new outreach. | -- |
| **Thursday** | Check Instantly.ai analytics. Adjust sequences if needed. | Instantly.ai |
| **Thursday** | Respond to all outstanding replies. | Gmail + Notion |
| **Friday** | No outreach (KSA weekend). Review next week's target list. | Notion |
| **Saturday** | Weekly metrics review. Update CRM pipeline. Plan next week. | Notion + Instantly.ai |

---

## Budget Summary

| Tool | Monthly Cost | Purpose |
|------|:----------:|---------|
| Resend (Free tier) | $0 | Website contact form emails |
| ImprovMX (Free tier) | $0 | Email forwarding to Gmail |
| Instantly.ai (Growth) | $37 | Cold outreach sequences + warmup |
| Notion (Free) | $0 | CRM and pipeline tracking |
| Zapier (Free tier) | $0 | Optional automation bridge |
| **Total** | **$37/month** | |

### Upgrade Path:
- If volume exceeds Instantly.ai Growth limits: Scale plan at $97/month (30,000 leads)
- If Resend free tier is exhausted: Pro plan at $20/month (50,000 emails)
- If CRM needs grow: HubSpot Free (no cost) or Notion Plus ($10/month)

---

## Email Deliverability Protection Rules

These are non-negotiable to protect hussaalsaif.com's sender reputation:

1. **Never send more than 50 cold emails per day** from inquiries@hussaalsaif.com
2. **Never send cold outreach and contact form emails from the same Resend API key** -- Resend handles the website, Instantly.ai handles cold outreach
3. **Always use a custom tracking domain** (track.hussaalsaif.com) for open/click tracking
4. **Always include an unsubscribe link** in cold outreach emails
5. **Remove bounced addresses immediately** -- never re-send to a bounced address
6. **Stop all outreach if spam rate exceeds 0.3%** on Google Postmaster Tools
7. **Personalize every email** -- never send identical copy to multiple recipients
8. **Space emails 3-5 minutes apart** -- never blast 20 emails in 2 minutes
9. **Keep warmup running permanently** -- even after the initial 4-week warmup period
10. **Verify email addresses before adding to campaigns** -- use a tool like NeverBounce ($8/1,000 verifications) or ZeroBounce
