import { Phone } from "lucide-react";
import heroImage from "@/public/images/hero-emergancy.jpeg";
import Image from "next/image";
import { COMPANY, EMERGENCIES, EMERGENCY_PROCESS } from "@/src/data/site";
import Link from "next/link";
import { CtaBand, Section } from "@/src/components/site/block";
import type { Metadata } from "next";

const TITLE = "24/7 Emergency Property Repairs | Emergency Call-Out";
const DESCRIPTION =
   "Round-the-clock emergency repairs for housing providers, managing agents, commercial sites and residents across London and the South East. 4-hour attendance, made safe on arrival, reported same day.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/emergency" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/emergency",
      images: ["/images/hero-emergancy.jpeg"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/images/hero-emergancy.jpeg"],
   },
};

export default function EmergencyPage() {
   return (
      <>
         <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
            <Image
               src={heroImage}
               alt="Emergency repair engineer attending a property at night"
               width={1600}
               height={900}
               className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="relative mx-auto max-w-7xl px-4 py-20">
               <p className="eyebrow">Emergency call-out</p>
               <h1 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl">24/7 Emergency Property Repairs</h1>
               <p className="mt-5 max-w-2xl text-lg text-ink-muted">
                  Genuine round-the-clock cover for housing providers, managing agents, commercial sites and residents.
                  Attendance within 4 hours, made safe on arrival, reported the same day.
               </p>
               <div className="mt-8 flex flex-wrap gap-3">
                  <a
                     href={COMPANY.phoneHref}
                     className="inline-flex items-center gap-2 rounded-md bg-destructive px-6 py-3 font-bold text-destructive-foreground hover:opacity-90"
                  >
                     <Phone className="h-4 w-4" /> Emergency line: {COMPANY.phone}
                  </a>
                  <Link
                     href="/report-an-emergency"
                     className="rounded-md border border-white/25 px-6 py-3 font-semibold hover:bg-white/10"
                  >
                     Report an emergency online
                  </Link>
               </div>
            </div>
         </section>

         <Section
            eyebrow="What we attend"
            title="Emergencies we cover, day or night"
            intro="If it risks safety, security or serious property damage, call us. We make safe first and repair properly second."
         >
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
               {EMERGENCIES.map((e) => (
                  <div key={e.title} className="bg-card p-5">
                     <p className="font-display text-base">{e.title}</p>
                     <p className="mt-1 text-sm text-muted-foreground">{e.note}</p>
                  </div>
               ))}
            </div>
         </Section>

         <Section
            tone="surface"
            eyebrow="Our response process"
            title="A structured, auditable emergency procedure"
            intro="Every emergency follows the same six steps, so clients and residents always know what happens next."
         >
            <ol className="relative space-y-4 border-l-2 border-accent/40 pl-6">
               {EMERGENCY_PROCESS.map((p, i) => (
                  <li key={p.step} className="relative">
                     <span className="absolute -left-[2.15rem] flex h-7 w-7 items-center justify-center rounded-full bg-accent font-display text-xs font-bold text-accent-foreground">
                        {i + 1}
                     </span>
                     <div className="rounded-lg border border-border bg-card p-5">
                        <p className="font-display text-base">{p.step}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{p.detail}</p>
                     </div>
                  </li>
               ))}
            </ol>
         </Section>

         <Section eyebrow="Out-of-hours cover" title="How the on-call rota works">
            <div className="grid gap-5 md:grid-cols-3">
               {[
                  {
                     t: "Answered by a person",
                     d: "Calls out of hours reach a duty coordinator, not a voicemail box or an overflow answering service.",
                  },
                  {
                     t: "Qualified trades on call",
                     d: "Gas Safe engineers, electricians, plumbers, roofers and carpenters rotate through the on-call rota.",
                  },
                  {
                     t: "Escalation built in",
                     d: "If access fails or the fault needs specialist input, we escalate and update you rather than closing the job.",
                  },
               ].map((c) => (
                  <div key={c.t} className="rounded-lg border border-border bg-card p-6">
                     <h3 className="font-display text-lg">{c.t}</h3>
                     <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                  </div>
               ))}
            </div>
         </Section>

         <CtaBand
            title="Set up out-of-hours cover for your portfolio"
            body="We can hold your access details, hazard information and escalation contacts in advance so nothing is lost at 3am."
         />
      </>
   );
}
