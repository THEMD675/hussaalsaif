# HUSSA ALSAIF -- EMAIL WARMUP & BRAND OUTREACH STRATEGY

**Email:** inquiries@hussaalsaif.com
**Date:** March 15, 2026

---

## TABLE OF CONTENTS

1. [Email Warmup Strategy](#1-email-warmup-strategy)
2. [Brand Outreach Templates](#2-brand-outreach-templates)
3. [Target Brand List (30+)](#3-target-brand-list)
4. [PR Pitch](#4-pr-pitch)

---

## 1. EMAIL WARMUP STRATEGY

### Why Warmup Matters

A brand-new custom domain email (inquiries@hussaalsaif.com) has zero sender reputation. Without warmup, emails will land in spam or get bounced entirely. Email providers like Gmail, Outlook, and Yahoo judge your domain based on sending history, engagement rates, and authentication records. A proper warmup builds trust with these providers over time.

---

### 1.1 Email Authentication Setup (Do This FIRST)

Before sending a single email, configure these three DNS records for hussaalsaif.com:

**SPF (Sender Policy Framework)**
- Add a TXT record to your domain's DNS
- Example: `v=spf1 include:_spf.google.com ~all` (if using Google Workspace)
- Only ONE SPF record per domain allowed
- Maximum 10 DNS lookups

**DKIM (DomainKeys Identified Mail)**
- Use 2048-bit keys (industry standard in 2026)
- Rotate keys every 6 months
- Generated through your email provider (Google Workspace, Zoho, etc.)

**DMARC (Domain-based Message Authentication)**
- Start with monitoring mode: `v=DMARC1; p=none; rua=mailto:dmarc@hussaalsaif.com`
- After 2-4 weeks of clean data, upgrade to: `v=DMARC1; p=quarantine`
- Final goal: `v=DMARC1; p=reject`

**Setup Order:** SPF first, then DKIM, then DMARC last.

**Verification:** Send a test email to mail-tester.com to check your score. Aim for 9/10 or higher.

---

### 1.2 Best Warmup Services (Ranked)

| Service | Price | Best For | Network Size | Key Feature |
|---------|-------|----------|-------------|-------------|
| **Warmbox** | $15/mo per inbox | Best value, Gmail/Outlook specific | 35,000+ inboxes | GPT-4 powered realistic emails, ESP-specific warmup |
| **Instantly.ai** | $37/mo (includes CRM + leads) | All-in-one outreach platform | Large network | Warmup + cold outreach + CRM in one tool |
| **Lemwarm** | $24/mo (Essential) / $40/mo (Smart) | Industry-specific warmup | Curated clusters | Assigns you to email clusters matching your industry |
| **Warmy.io** | $49/mo | Advanced deliverability monitoring | 50,000+ inboxes | Deepest customization, real-time reputation tracking |
| **Mailreach** | $25/mo per inbox | Simple dedicated warmup | 20,000+ inboxes | Clean UI, spam score monitoring |
| **TrulyInbox** | $9/mo per inbox | Budget option | Growing network | Cheapest option with decent results |

**Recommendation for Hussa:** Start with **Warmbox** ($15/mo) for the warmup phase. It is the best value, supports Gmail/Google Workspace specifically, and uses AI-generated realistic emails. If scaling to cold outreach campaigns later, switch to **Instantly.ai** which bundles warmup + outreach tools together.

---

### 1.3 Warmup Timeline & Settings

**Week 0 (Day 1-2): Setup Only**
- Do NOT send any emails for 48 hours after domain setup
- Configure SPF, DKIM, DMARC
- Connect warmup tool
- Set warmup tool to: 2-3 emails/day

**Week 1 (Days 3-7): Initial Warmup**
- Warmup tool sends 5-10 emails/day automatically
- Send 2-3 real personal emails per day (to people you know)
- Reply to every email you receive
- Do NOT send any cold outreach yet

**Week 2 (Days 8-14): Building Momentum**
- Warmup tool ramps to 15-20 emails/day
- Send 5-8 real emails per day
- Start subscribing to newsletters (creates inbound engagement)
- Reply to inbound emails promptly

**Week 3 (Days 15-21): Establishing Reputation**
- Warmup tool at 25-30 emails/day
- Send 10-15 real emails per day
- You can start sending 2-3 cold outreach emails per day (to warm leads only)
- Monitor spam placement rate -- must stay below 2%

**Week 4 (Days 22-28): Scaling**
- Warmup tool at 30-40 emails/day
- Begin regular cold outreach (5-8 per day max)
- Never exceed 50 total emails/day in the first month
- Keep warmup tool running permanently (even after ramp-up)

**Weeks 5-8: Full Operation**
- Gradually increase cold outreach to 15-20 per day
- Keep warmup tool running at 20-30 emails/day background
- Monitor deliverability weekly

**Weeks 9-12: Mature Domain**
- Domain reputation should be established
- Can send 30-50 outreach emails per day safely
- Continue warmup at reduced rate (10-15/day) for maintenance

**Total warmup period: 4-8 weeks minimum. Full maturity: 90 days.**

---

### 1.4 How to Avoid the Spam Folder

**Technical Requirements:**
- SPF, DKIM, DMARC properly configured (non-negotiable)
- Custom tracking domain for any email tracking links
- Avoid URL shorteners (bit.ly, etc.) in emails
- Use a professional email signature with plain text (not heavy HTML)

**Content Rules:**
- No ALL CAPS in subject lines
- No excessive exclamation marks (!!!)
- Avoid spam trigger words: "free," "guarantee," "act now," "limited time," "click here"
- Keep image-to-text ratio low (mostly text, minimal images)
- Never attach large files -- use Google Drive or Dropbox links
- Personalize every email (use the recipient's name, reference their brand)
- Keep emails under 200 words for cold outreach

**Behavioral Rules:**
- Never send more than 50 emails in a single day during the first 2 months
- Space emails out (use scheduling -- do not blast 20 emails in 5 minutes)
- Send between 9 AM - 12 PM recipient's local time (highest open rates)
- Maintain a reply rate above 10% (respond to every reply you get)
- Remove bounced emails immediately
- Never buy email lists -- only use verified, researched contacts
- Keep your bounce rate below 3%
- Unsubscribe/remove contacts who do not engage after 3 attempts

**Ongoing Monitoring:**
- Check sender score at senderscore.org weekly
- Test deliverability at mail-tester.com before campaigns
- Use Google Postmaster Tools if sending to Gmail addresses
- Monitor open rates -- below 20% signals spam placement issues

---

## 2. BRAND OUTREACH TEMPLATES

### Important Notes Before Sending
- Personalize every email -- never send these as-is
- Research the brand contact's name and role before emailing
- Reference a specific campaign, product, or post from the brand
- Send from inquiries@hussaalsaif.com
- Include links to media kit, Instagram, and TikTok in signature

**Standard Email Signature:**
```
Hussa AlSaif
Content Creator & PR Specialist
Instagram: @hussa.ss (141K+) | TikTok: @hussa.502 (195K+)
inquiries@hussaalsaif.com | hussaalsaif.com
```

---

### TEMPLATE 1: Cold Outreach to Beauty Brands

**Subject:** Collaboration Inquiry -- Hussa AlSaif x [Brand Name]

Hi [First Name],

I'm Hussa AlSaif, a beauty and curly hair content creator based in Al Khobar, Saudi Arabia, with a combined audience of 330K+ across Instagram and TikTok (10.6M+ TikTok likes).

I've been a genuine fan of [Brand Name] -- I recently featured [specific product/campaign] in my content and the response from my audience was incredible. My followers actively seek out my product recommendations, especially in skincare, haircare, and beauty.

My niche is curly hair and beauty in the Saudi/GCC market -- a space that is underrepresented and highly engaged. I hold a degree in Public Relations and bring a professional, brand-safe approach to every collaboration.

I'd love to explore a partnership with [Brand Name] for [specific idea: product review, campaign, event coverage, etc.]. I've previously worked with Sephora, Too Faced, Fendi, Dyson Arabia, Kerastase, and Wella Professionals.

I've attached my media kit for your reference. Would you be open to a quick call this week?

Best regards,
Hussa AlSaif

---

### TEMPLATE 2: Cold Outreach to Fashion/Luxury Brands

**Subject:** Partnership Opportunity -- Hussa AlSaif x [Brand Name]

Hi [First Name],

I'm reaching out because [Brand Name]'s [specific collection/campaign/store opening] resonated deeply with my personal style and my audience's interests.

I'm Hussa AlSaif -- a content creator and PR professional from Saudi Arabia with 330K+ followers across Instagram and TikTok. I create curated beauty, fashion, and lifestyle content with a focus on the Saudi and GCC audience. My content style is elevated yet approachable, which aligns well with [Brand Name]'s positioning in the region.

Some of my recent brand work includes Fendi FW25, Sephora Middle East, and Dyson Arabia. I also organized TEDxYU Khobar and have a background in media and communications, so I approach every partnership with a strategic, professional lens.

I'd love to discuss how we could collaborate -- whether it's event coverage, styling content, campaign participation, or an ambassador role. I've included my media kit below.

Looking forward to hearing from you.

Best regards,
Hussa AlSaif

---

### TEMPLATE 3: Follow-Up Email

**Subject:** Following Up -- Hussa AlSaif Collaboration

Hi [First Name],

I wanted to follow up on my email from [date] regarding a potential collaboration between [Brand Name] and myself.

I understand your team is busy, so I'll keep this brief: I recently [mention a relevant recent achievement -- new campaign, follower milestone, viral post, event attendance] and thought it would be a great time to revisit the conversation.

I'm flexible on format -- whether it's a product feature, event attendance, a campaign integration, or something custom. Happy to jump on a quick 15-minute call at your convenience.

My media kit is here: [link]

Thanks for your time,
Hussa AlSaif

**Timing:** Send follow-ups 5-7 days after the initial email. Maximum 2 follow-ups per contact. If no response after the second follow-up, move on and revisit in 3-6 months.

---

### TEMPLATE 4: Responding to Inbound Brand Inquiries

**Subject:** Re: [Their Subject Line]

Hi [First Name],

Thank you for reaching out -- I'm excited about the possibility of working with [Brand Name].

To make sure we're aligned, I'd love to understand a few things about the collaboration:

1. **Campaign goals** -- What are you hoping to achieve? (awareness, conversions, event coverage, etc.)
2. **Deliverables** -- What content format and platforms are you envisioning?
3. **Timeline** -- When does the campaign need to go live?
4. **Budget** -- Do you have an allocated budget for this collaboration, or would you like me to share my rate card?

I've attached my media kit with audience demographics, engagement rates, and examples of past brand work for your reference.

I'm available for a call this week if that works on your end. Looking forward to learning more.

Best regards,
Hussa AlSaif

---

### TEMPLATE 5: Rate Card / Media Kit Request Response

**Subject:** Re: Hussa AlSaif -- Rate Card & Media Kit

Hi [First Name],

Thanks for your interest in working together. I've attached my media kit, which includes:

- Audience demographics and engagement metrics
- Platform breakdown (Instagram, TikTok, YouTube, Snapchat)
- Past brand collaborations and case studies
- Content examples across beauty, fashion, and lifestyle

Here's a summary of my packages:

| Deliverable | Rate |
|-------------|------|
| Instagram Reel (Feed) | [Rate] |
| Instagram Story Package (3-5 frames) | [Rate] |
| TikTok Video | [Rate] |
| YouTube Integration | [Rate] |
| Event Attendance + Coverage | [Rate] |
| Full Campaign Package (multi-platform) | [Rate] |
| Brand Ambassador (monthly retainer) | [Rate] |

All packages include usage rights for [duration]. Additional usage, whitelisting, or exclusivity can be discussed separately.

I'm happy to customize a package based on your campaign goals. Would you like to schedule a call to discuss further?

Best regards,
Hussa AlSaif

**Note:** Fill in actual rates before sending. Rates should be based on CPM (cost per thousand impressions), engagement rates, and market benchmarks for Saudi/GCC creators at the 100K-300K follower tier.

---

## 3. TARGET BRAND LIST

### BEAUTY & COSMETICS

| # | Brand | Instagram | Contact Approach | Why Good Fit |
|---|-------|-----------|-----------------|-------------|
| 1 | **Sephora Middle East** | @sepaboramiddleeast | PR team via sephora.me contact page; existing relationship | Already collaborated -- deepen to ambassador level |
| 2 | **Charlotte Tilbury ME** | @charlottetilbury | Influencer@charlottetilbury.com | Premium beauty, strong ME presence, aligns with Hussa's elevated aesthetic |
| 3 | **MAC Cosmetics Arabia** | @maccosmetics_arabia | Via Estee Lauder Companies ME PR team | Major beauty brand, active influencer program in KSA |
| 4 | **Too Faced** | @toofaced | Existing relationship via ME distributor | Already collaborated -- expand scope |
| 5 | **Benefit Cosmetics ME** | @benefitcosmeticsmiddleeast | Via LVMH ME PR team | Fun, playful brand -- matches Hussa's warm tone |
| 6 | **NARS Middle East** | @narsissist | Via Shiseido Group ME PR | Premium beauty, strong GCC presence |
| 7 | **Urban Decay** | @urbandecaycosmetics | Via L'Oreal ME PR team | Active in Saudi influencer campaigns |
| 8 | **Fenty Beauty** | @fentybeauty | Via Kendo / LVMH ME PR | Inclusive beauty brand, curly hair diversity angle |
| 9 | **Rare Beauty** | @rarebeauty | Via Sephora ME (exclusive retail partner) | Hugely popular in GCC, authentic brand story resonates |
| 10 | **Givenchy Beauty** | @givenchybeauty | Via LVMH ME PR team | Luxury beauty, aligns with Hussa's luxury-tier brand work |

### HAIRCARE & CURLY HAIR (Hussa's Core Niche)

| # | Brand | Instagram | Contact Approach | Why Good Fit |
|---|-------|-----------|-----------------|-------------|
| 11 | **Kerastase ME** | @kerastase_official | Via L'Oreal ME PR -- existing relationship | Already tagged -- formalize into paid partnership |
| 12 | **Dyson Arabia** | @dyson_arabia | Via Dyson ME PR team -- existing relationship | Already tagged -- high-value tech brand, curly hair tools |
| 13 | **Olaplex** | @olaplex | Available at Faces SA; contact via PR agency | Bond-building technology, popular for curly/damaged hair |
| 14 | **Wella Professionals** | @wellahair | Via Wella ME distributor -- existing relationship | Already tagged -- professional haircare |
| 15 | **Moroccanoil** | @moroccanoil | Via Moroccanoil ME distributor | Iconic curly hair brand, strong ME presence |
| 16 | **DevaCurl** | @devacurl | Via US PR team + KSA retailers (CosmoStore) | The curly hair brand -- direct niche alignment |
| 17 | **Redken** | @redken | Via L'Oreal ME PR team -- existing relationship | Already tagged -- salon-professional haircare |
| 18 | **Umberto Giannini** | @umbertogiannini | Via UK PR team | Already tagged -- curly hair specialist brand |
| 19 | **Herbal Essences** | @haboralessences | Via P&G ME PR team -- existing relationship | Already collaborated on sulfate-free campaign |
| 20 | **Schwarzkopf Professional** | @schwarzkopfpro | Via Henkel ME PR team | Professional haircare, active in KSA salons |

### FASHION & LUXURY

| # | Brand | Instagram | Contact Approach | Why Good Fit |
|---|-------|-----------|-----------------|-------------|
| 21 | **Fendi** | @fendi | Existing relationship via ME PR team | Already collaborated on FW25 -- expand to ambassador |
| 22 | **Dior ME** | @dlorid | Via LVMH ME PR / Niche Arabia agency | Flagship presence in Riyadh, active ME campaigns |
| 23 | **Valentino** | @maisonvalentino | Via Valentino ME PR team | Strong Saudi retail presence, fashion event collaborations |
| 24 | **Level Shoes** | @levelshoes | Via Level Shoes marketing team (Dubai HQ) | GCC luxury footwear destination, active influencer program |
| 25 | **Ounass** | @ounass | marketing@ounass.com (via website) | The GCC luxury e-commerce platform, frequent influencer collabs |
| 26 | **Charles & Keith ME** | @charleskeithofficial | Via Charles & Keith ME PR | Accessible luxury, popular with GCC audience |
| 27 | **Tory Burch ME** | @toryburch | Via Tory Burch ME distributor | Active Saudi influencer program, aligns with Hussa's style |

### LIFESTYLE & RETAIL

| # | Brand | Instagram | Contact Approach | Why Good Fit |
|---|-------|-----------|-----------------|-------------|
| 28 | **Faces (Beauty Retailer)** | @facesbeauty | Via Faces KSA marketing team | Largest beauty retailer in KSA, massive influencer budget |
| 29 | **Namshi** | @namshi | Via Namshi PR team (Noon Group) | GCC fashion e-commerce, Gen Z/millennial audience overlap |
| 30 | **Amazon Beauty KSA** | @amazonksa | Via Amazon ME influencer program | Growing beauty vertical in KSA |
| 31 | **Noon** | @noon | Via Noon influencer marketing team | Major KSA e-commerce, beauty + fashion verticals |
| 32 | **Shein ME** | @shein_ar | Via Shein ME influencer program | Massive reach, high volume of influencer campaigns in GCC |

### FRAGRANCE & WELLNESS

| # | Brand | Instagram | Contact Approach | Why Good Fit |
|---|-------|-----------|-----------------|-------------|
| 33 | **Diptyque ME** | @diptyque | Via Diptyque ME distributor | Luxury fragrance, lifestyle alignment |
| 34 | **Jo Malone Arabia** | @jaboramalone | Via Estee Lauder Companies ME PR | Luxury fragrance, strong GCC gift culture alignment |
| 35 | **Byredo** | @byredo | Via Byredo ME distributor | Niche luxury fragrance, Saudi flagship stores |

### PR & TALENT AGENCIES TO CONTACT

These agencies represent brands and can connect Hussa to multiple clients at once:

| Agency | Focus | Why Contact |
|--------|-------|------------|
| **Niche Arabia** | Luxury brand PR in KSA | Founded by Marriam Mossalli, represents 150+ luxury clients in Saudi |
| **Starfish Influencers** | Influencer talent agency (Dubai/Riyadh) | Can represent Hussa for inbound brand deals |
| **ArabyAds** | L'Oreal ME influencer marketing partner | Single contact = access to Garnier, L'Oreal Paris, YSL, Kerastase, La Roche Posay |
| **Koraspond** | Digital communication + influencer marketing (KSA) | Specializes in beauty, lifestyle sectors |
| **Vamp (ME)** | Influencer marketing platform | Self-service platform for brand deals |

---

## 4. PR PITCH

### About Hussa AlSaif -- Press/Brand Pitch

---

**HUSSA ALSAIF**
Content Creator | PR Specialist | Curly Hair Authority | Book Club Host

**Al Khobar, Saudi Arabia**
inquiries@hussaalsaif.com | hussaalsaif.com
Instagram: @hussa.ss | TikTok: @hussa.502 | YouTube: @hussaalsaif | Snapchat: @hussa.alsaif

---

**THE SHORT VERSION**

Hussa AlSaif is a Saudi content creator and PR professional who has built a 330,000+ following by being the thing most influencers are not: genuinely trusted. With 10.6 million TikTok likes, a curated Instagram presence (141K followers across just 25 posts), and a roster that spans Fendi to Herbal Essences, Hussa occupies a rare space -- she is credible in luxury and accessible in approach.

Her signature: curly hair. In a market historically dominated by straightened, styled looks, Hussa has become the authority on curly hair in the GCC, turning a personal identity into a content empire that haircare brands actively seek out.

---

**WHAT MAKES HUSSA DIFFERENT**

**1. The Curly Hair Authority**
Hussa is the go-to voice for curly hair in the Saudi/GCC market. Her curly hair routines, product recommendations, and styling tutorials drive purchases. In a region where the natural curly hair movement is still gaining momentum, she is the creator defining the category. Brands like Kerastase, Dyson Arabia, Wella Professionals, Redken, and Herbal Essences have already recognized this.

**2. PR Professional, Not Just an Influencer**
Hussa holds a Bachelor's degree in Media & Communication from Imam Abdulrahman Bin Faisal University and works as a Public Relations Specialist. She organized TEDxYU Khobar and "The Founders" event. She understands brand strategy, messaging, and ROI -- making her a strategic partner, not just a content placement.

**3. Extreme Curation = Premium Value**
25 Instagram posts. 141K followers. That ratio is almost unheard of. Every piece of content Hussa publishes is intentional, which means every brand she features gets maximum attention and credibility. She does not dilute her feed -- a partnership with Hussa is a statement.

**4. Cross-Tier Brand Credibility**
Hussa's brand roster spans luxury (Fendi), premium beauty (Kerastase, Dyson, Too Faced), mid-range (Sephora Collection, Redken), and mass-market (Herbal Essences). This versatility means she can authentically represent brands at any price point without losing audience trust.

**5. Intellectual Depth**
Hussa hosts "The Reading Room with Hussa" -- a book club on the Fable platform. This sets her apart from the crowded beauty/lifestyle creator space and gives brands access to an audience that values substance alongside style.

**6. Multi-Platform Reach**
- **Instagram:** 141K followers (@hussa.ss) -- curated, high-impact posts
- **TikTok:** 195K+ followers, 10.6M+ likes (@hussa.502) -- viral short-form content
- **YouTube:** @hussaalsaif -- long-form tutorials, vlogs, hair routines
- **Snapchat:** @hussa.alsaif -- daily content, high Saudi engagement
- **Combined reach:** 330K+ followers across platforms

---

**AUDIENCE PROFILE**

- **Primary demographic:** Women 18-34, Saudi Arabia and GCC
- **Key interests:** Beauty, haircare, fashion, lifestyle, wellness, books
- **Language:** English-dominant content (with bilingual Saudi audience)
- **Engagement style:** High trust, product-driven -- followers actively purchase based on Hussa's recommendations
- **Geography:** Al Khobar / Eastern Province base with pan-Saudi and GCC reach

---

**COLLABORATION HISTORY**

| Brand | Type |
|-------|------|
| Fendi | Fashion event content (FW25) |
| Sephora Collection / Sephora Middle East | Product launch, beauty content |
| Too Faced / Too Faced Middle East | Product feature, beauty content |
| Kerastase | Haircare routine integration |
| Dyson Arabia | Hair tools feature |
| Wella Professionals | Haircare routine integration |
| Redken | Haircare routine integration |
| Herbal Essences | Sponsored haircare campaign |
| Umberto Giannini | Curly hair product feature |
| Denman Brush | Styling tools feature |
| Reviveregrow | Hair health feature |

---

**COLLABORATION OPTIONS**

- Sponsored content (Instagram Reels, TikTok, YouTube)
- Event attendance and coverage
- Product launches and reviews
- Brand ambassador / long-term partnerships
- Campaign creative direction
- Curly hair category sponsorship (exclusive or category-level)

---

**PRESS FEATURES & CREDENTIALS**

- Organized TEDxYU Khobar
- Organized "The Founders" event
- Bachelor's in Media & Communication, Imam Abdulrahman Bin Faisal University
- Host of "The Reading Room with Hussa" book club on Fable
- Active across 5+ social platforms with tailored content strategies

---

**CONTACT**

For collaborations, PR inquiries, and partnerships:
**inquiries@hussaalsaif.com**

Media kit available upon request.

---

## APPENDIX: OUTREACH EXECUTION CHECKLIST

### Week 1-2 (Warmup Phase -- No Cold Outreach)
- [ ] Set up SPF, DKIM, DMARC for hussaalsaif.com
- [ ] Sign up for Warmbox ($15/mo) and connect inquiries@hussaalsaif.com
- [ ] Set warmup to 5 emails/day, ramp gradually
- [ ] Send personal emails to people Hussa knows (friends, existing brand contacts)
- [ ] Set up professional email signature
- [ ] Test deliverability at mail-tester.com

### Week 3-4 (Begin Light Outreach)
- [ ] Continue warmup (25-30 emails/day via Warmbox)
- [ ] Send 2-3 outreach emails per day to warm leads (brands Hussa already works with)
- [ ] Reach out to existing brand contacts (Sephora, Too Faced, Dyson, Kerastase) from new email
- [ ] Monitor open rates and deliverability

### Week 5-8 (Scale Cold Outreach)
- [ ] Ramp cold outreach to 5-10 emails per day
- [ ] Target beauty brands first (Template 1) -- Charlotte Tilbury, MAC, Benefit, NARS, Fenty
- [ ] Target fashion brands second (Template 2) -- Dior, Valentino, Level Shoes, Ounass
- [ ] Send follow-ups after 5-7 days (Template 3)
- [ ] Contact PR agencies: Niche Arabia, Starfish, ArabyAds

### Week 9-12 (Full Operation)
- [ ] 15-20 outreach emails per day
- [ ] Work through full brand list
- [ ] Track responses in a spreadsheet (brand, date sent, follow-up date, status, notes)
- [ ] Refine templates based on what gets responses
- [ ] Maintain warmup at 10-15/day for ongoing domain health

### Ongoing
- [ ] Keep warmup tool running permanently
- [ ] Monitor sender reputation monthly
- [ ] Update media kit quarterly
- [ ] Refresh brand list every quarter with new targets
- [ ] Maintain bounce rate below 3%, spam rate below 0.1%
