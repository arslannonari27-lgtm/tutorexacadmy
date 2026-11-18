# TutorEx Academy — Phase 1 Website

**Brand:** TutorEx Academy · Learn Beyond Borders  
**Domain (owned):** `tutorexacademy.com`  
**Architecture:** Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn-style UI primitives, Lucide icons.  
**Scope:** Public marketing website with client-only FAQ chatbot. Not an admin dashboard or tutor/parent portal yet.

## Project structure

```
public/images/             Replaceable, local illustrative SVG image placeholders
src/app/                   15 public routes including program pages, metadata, robots & sitemap
src/components/            Header/footer, FAQ chatbot, cards and page sections (legacy unused inquiry composer included)
src/components/ui/         shadcn-style Button, Card, Input, Label, Textarea
src/lib/site.ts            Central brand, contact configuration, subjects and FAQ
src/lib/programs.ts        O Level, A Level and IELTS program definitions
scripts/content-check.mjs  Structural and content assertions
.env.example               Contact setup placeholders (not credentials)
```

## Setup in Antigravity / VS Code

1. Extract the ZIP. Open the folder `tutorex-academy` in Antigravity.
2. Use a terminal in the project folder. Node.js 20+ recommended.
3. Run `npm install` (requires internet access to install open-source dependencies).
4. Run `cp .env.example .env.local` (Windows PowerShell: `Copy-Item .env.example .env.local`).
5. The official contact email defaults to `tutorexacademy@gmail.com`. Optionally set `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local` to override it. Leave WhatsApp empty until a dedicated business number is confirmed. Example: `NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567`.
6. Run `npm run dev` and open `http://localhost:3000`.
7. Run `npm run lint`, `npm run typecheck`, `npm run check:content`, `npm run build` before release.

## Inquiry handling — important

The **Find a Tutor** page explains school subjects, Cambridge O Level, Cambridge International AS & A Level, and IELTS inquiries. The external Google Form is where visitors enter their actual requirements; its fields are managed separately in Google Forms. The **Find a Tutor** page now leads to the published Student / Parent Google Form for actual submissions, **not a Next.js submission endpoint**. Google Forms handles its own fields, required validations and confirmation. Any responses appear in the separately linked Parent Leads Google Sheet after successful Google Form submission; this Next.js site does not store or forward submissions. The unused legacy inquiry composer remains in source code, but is no longer visible on the Find a Tutor page.

The official **Student / Parent Registration Google Form** is now the primary inquiry channel: `https://docs.google.com/forms/d/e/1FAIpQLScwABVijfLi9bQEjt8SHaHfzI7JJkVzPiqELvLZkhjODi9Nng/viewform`. It is linked from the homepage, `/find-a-tutor`, header, footer, chatbot and Contact page. The parent form stores responses through Google Forms/Google Sheets, **not** Next.js or Supabase. The earlier local inquiry composer component remains in the source for reference but is not used on the public `/find-a-tutor` page. Do not substitute the existing **tutor** form for parent requests. See `STUDENT-FORM-UPDATE.md`.

**Become a Tutor** links to the confirmed existing Google Forms public responder URL. Do not expose Google Sheets response data on the site.

## Free on-page chatbot and email

A floating FAQ assistant appears at the bottom-right of every page. It uses local, predefined responses about finding tutors, O Level, A Level, IELTS, fees, demos, applications and contact details. **It is not a live agent or AI integration.** Chat entries are not sent, saved or used as leads; the visitor follows a provided link to submit a request or email the official inbox. See `CHATBOT-AND-EMAIL-UPDATE.md`.

The Contact page and footer display the provided `tutorexacademy@gmail.com` with working mailto links. Visitors can send a manual email, or submit their parent/learner request through the separate official Google Form.

## Images

Replace `public/images/hero-placeholder.svg`, `about-placeholder.svg`, `logo-placeholder.svg`, and `og-placeholder.png` with actual approved assets. You can keep the same filenames (or change references in the code) and preserve aspect ratios. The current SVG images are labeled illustrations, not representations of real TutorEx tutors or parents. See `IMAGE-PROMPTS.md` for ready-made generation prompts.

## Pages

- `/` Home
- `/subjects` Subject categories
- `/programs` Exam support overview
- `/programs/o-level` O Level inquiries
- `/programs/a-level` A Level inquiries
- `/programs/ielts` IELTS Academic / General Training inquiries
- `/how-it-works` Matching process
- `/about` Agency description
- `/find-a-tutor` Parent/Student Google Form landing page
- `/become-a-tutor` External registration link
- `/contact` Official contact channels, if configured
- `/faq` FAQs
- `/privacy` Draft privacy information — **review before launch**
- `/terms` Draft service terms — **review before launch**
- `/safeguarding` Draft safeguards — **review before launch**

### Specialist program screening checklist

- [ ] O Level: independently confirm which exact subject, syllabus and exam-board experience a tutor has.
- [ ] A Level: assess advanced subject knowledge and demonstrated AS/A Level teaching, not just a degree.
- [ ] IELTS: assess Academic vs General Training familiarity, all four skills, feedback quality and appropriate specialist teaching experience. Never guarantee a score.
- [ ] Until these checks are complete, these are inquiry categories rather than confirmed available specialist courses.
- [ ] Verify the dedicated **parent inquiry Google Form** includes appropriate Program, IELTS Type, Exam Board and exam goals fields if needed. Website code changes cannot update Google Forms automatically.

### Must-do before public launch

- [ ] Confirm and configure actual business email.
- [ ] Manually test the dedicated parent Google Form submission and confirm the response appears in the private Student Leads Google Sheet.
- [ ] Review and approve Privacy, Terms, and Safeguarding pages with appropriate expertise, then remove `DRAFT` notices and allow indexing if appropriate.
- [ ] Establish tutor verification / child-safety procedures before accepting paid enrollments.
- [ ] Replace or approve logo and illustrative images.
- [ ] Test a tutor application, parent inquiry, email opening and mobile navigation manually.
- [ ] Run lint, typecheck, build and deploy to a preview deployment before production.
- [ ] Keep Namecheap MX/SPF/DKIM/DMARC records and existing nameservers unchanged unless specifically reviewed.
- [ ] Connect the domain only after confirming host-provided DNS records and existing email configuration.

## Deployment

Deploy via GitHub + Vercel after dependencies and tests pass. In the Vercel project settings, add the same non-secret `NEXT_PUBLIC_*` configuration values. Contact values are public on the website; do **not** use them for API secrets.

Add the root domain and `www` within Vercel, then copy exact DNS entries it provides into the authoritative DNS provider. Do **not** assume Namecheap Advanced DNS is authoritative if third-party nameservers are enabled. Do not change MX, TXT (SPF/DKIM/DMARC), email verification, or nameserver settings while adding website records.

## Future phases (not implemented)

**Phase 2:** Supabase Auth, RLS, secure Admin Dashboard, tutor application review, parent lead management, demo scheduling, matching and an audit log.  
**Phase 3:** Guardian-managed parent dashboard and approved tutor portal. Separate permissions, guardian consent and secure records.  
**Phase 4:** Verified payment integration, invoices, payouts, retention analytics, localization and additional launch security tests.

Do not treat placeholder UI, screenshots or future feature plans as completed product functionality.
