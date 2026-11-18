# TutorEx Academy — Student / Parent Form Website Update

## New form

- **Student / Parent Form:** https://docs.google.com/forms/d/e/1FAIpQLScwABVijfLi9bQEjt8SHaHfzI7JJkVzPiqELvLZkhjODi9Nng/viewform
- **Tutor Registration Form (unchanged):** https://docs.google.com/forms/d/e/1FAIpQLSfGRAcjdH4v39WPVcRm1gAviBbFYbMjp8lRxBKbrgA7t-4OOQ/viewform
- **Official email:** tutorexacademy@gmail.com

## Integrated in the website

- Central published parent form URL in `src/lib/site.ts`, with optional environment override.
- Homepage primary Find a Tutor button opens the parent Google Form.
- Desktop and mobile header CTA, footer direct link, Contact page CTA and final banner lead to the Google Form.
- `/find-a-tutor` is a branded information/registration page with prominent direct buttons.
- Program detail routes still link through `/find-a-tutor?program=...`; the user must select the intended program in the actual Google Form, because no verified prefill URL exists.
- Free FAQ chatbot provides Student / Parent Form links, including O Level, A Level and IELTS questions.
- Privacy draft updated to reflect use of a separate Google Form and Google Sheets. Review policies before public launch.

## How it works

1. Parent clicks Find a Tutor -> the new Google Form opens in a separate tab.
2. Parent fills and submits. Submission and data storage happen at Google, **not** in Next.js or the planned Supabase backend.
3. Founder verifies the response inside the separate Parent Leads Google Sheet. No automatic Admin Dashboard sync exists yet.
4. Tutors continue to apply using the unchanged Tutor Registration form.

## Testing to do in Antigravity

1. `npm install`
2. `npm run check:content`
3. `npm run typecheck`
4. `npm run lint`
5. `npm run build`
6. `npm run dev` and open `http://localhost:3000`
7. Check homepage, Find a Tutor page, mobile menu, Contact, footer and chatbot link.
8. Open Google Form in an incognito browser. Submit a clearly labeled TEST inquiry and confirm its row appears in the **Student Leads** Sheet. Remove test data safely afterward.
9. Confirm Tutor Registration Form link still opens and email links use tutorexacademy@gmail.com.

> Do not change Namecheap DNS or expose Google Sheets response data. WhatsApp CTA remains hidden until your official business number is configured.
