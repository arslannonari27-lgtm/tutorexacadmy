import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpenCheck, CalendarClock, HeartHandshake, Mail, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Find an Online Tutor | Parent & Student Registration',
  description: 'Request a suitable online tutor for Maths, English, Science, Quran, O Level, A Level or IELTS. Submit the official parent or adult learner inquiry form.',
  alternates: { canonical: '/find-a-tutor' },
};

const whatToPrepare = [
  'Parent or guardian contact details (or adult learner details)',
  'Student grade, subject, curriculum or exam preparation program',
  'Country, local time zone and preferred class schedule',
  'Learning goals, approximate budget and preferred demo arrangements',
];
const reassurance = [
  { icon: HeartHandshake, title: 'A suitable match', description: 'We review your requirements before discussing available tutors.' },
  { icon: ShieldCheck, title: 'Screening before approval', description: 'Tutor applicants must complete appropriate assessment and checks.' },
  { icon: CalendarClock, title: 'Clear arrangements', description: 'Availability, fees and any demo are discussed before enrollment.' },
];

export default function FindTutor({ searchParams }: { searchParams?: { program?: string } }) {
  const requestedProgram = searchParams?.program;
  const supportedPrograms = ['School Subject Tutoring', 'Cambridge O Level', 'Cambridge International AS & A Level', 'IELTS Preparation'];
  const program = requestedProgram && supportedPrograms.includes(requestedProgram) ? requestedProgram : null;

  return <>
    <PageHero
      eyebrow="Parent & student registration"
      title="Find an online tutor that fits your learning needs"
      description="Submit your tutoring requirements through the official TutorEx Academy Google Form. Our team can then review potential matches, subject to tutor screening and availability."
    >
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button asChild size="lg"><a href={site.parentFormUrl} target="_blank" rel="noopener noreferrer">Open Student / Parent Form <ArrowUpRight size={17} /></a></Button>
        <Link href="/how-it-works" className="text-sm font-semibold text-navy underline underline-offset-4 hover:text-teal">How matching works</Link>
      </div>
      <p className="mt-3 text-sm text-ink/65">Opens our Google Form in a new tab. Your request is recorded only after you complete and submit that form.</p>
    </PageHero>
    <section className="section-pad bg-white"><div className="container grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)]">
      <div className="rounded-3xl border border-navy/10 bg-cloud p-6 shadow-card sm:p-9">
        <p className="eyebrow">One easy form</p>
        <h2 className="heading mt-3 text-3xl">Tell us what your learner needs</h2>
        {program && <p className="mt-4 rounded-xl border border-teal/20 bg-white p-4 text-sm font-medium leading-6 text-navy">You came from our <strong>{program}</strong> page. Please select this program in the Google Form; it will not be filled in automatically.</p>}
        <p className="mt-4 text-sm leading-7 text-ink/70">Our form welcomes inquiries for school subjects, Quran and Tajweed, Cambridge O Level, Cambridge International AS & A Level, and IELTS Academic or General Training.</p>
        <h3 className="mt-7 font-heading text-lg font-bold text-navy">Information to have ready</h3>
        <ul className="mt-4 space-y-3">{whatToPrepare.map(item => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink/75"><BookOpenCheck size={19} className="mt-1 shrink-0 text-teal" aria-hidden="true" />{item}</li>)}</ul>
        <div className="mt-8"><Button asChild size="lg"><a href={site.parentFormUrl} target="_blank" rel="noopener noreferrer">Submit Tutor Request <ArrowUpRight size={17} /></a></Button></div>
        <p className="mt-4 text-xs leading-6 text-ink/60">For students under 18, a parent or authorized guardian should complete the form. Please do not include identity documents or unnecessary sensitive details.</p>
      </div>
      <aside className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-8">
        <p className="eyebrow">What happens next</p>
        <h2 className="heading mt-3 text-2xl">A transparent process</h2>
        <div className="mt-6 space-y-6">{reassurance.map(x => <div key={x.title} className="flex gap-3"><span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal"><x.icon size={21} /></span><div><h3 className="font-heading font-bold text-navy">{x.title}</h3><p className="mt-1 text-sm leading-6 text-ink/65">{x.description}</p></div></div>)}</div>
        <div className="mt-8 border-t border-navy/10 pt-6 text-sm leading-7 text-ink/70">Prefer to ask a question first? <a href={`mailto:${site.contactEmail}?subject=${encodeURIComponent('TutorEx Academy — Parent Inquiry')}`} className="inline-flex items-center gap-1 font-semibold text-teal underline"><Mail size={14} /> Email TutorEx Academy</a>.</div>
        <p className="mt-4 text-xs leading-5 text-ink/55">Sending an inquiry does not guarantee tutor availability, a demo or enrollment.</p>
      </aside>
    </div></section>
  </>;
}
