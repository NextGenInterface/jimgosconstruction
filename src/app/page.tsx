import { Phone, ShieldCheck, Clock, Camera } from "lucide-react";
import heroImage from "@/public/images/social.jpg";
import Image from "next/image";
import {
   CLIENT_TYPES,
   COMMUNITY,
   COMPANY,
   RESPONSE_COMMITMENTS,
   SERVICES,
   TESTIMONIALS,
   TRUST_BADGES,
   TRUST_STATS,
} from "../data/site";
import Link from "next/link";
import { CardGrid, CtaBand, InfoCard, Section } from "../components/site/block";

export default function Index() {
   return (
      <>
         <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
            <Image
               src={heroImage}
               alt="Jimgos Construction maintenance engineers outside a London housing block"
               width={1600}
               height={1000}
               className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
               <p className="eyebrow backdrop-blur-sm w-fit">Housing · Public sector · Commercial</p>
               <h1 className="mt-4 max-w-4xl font-bold text-4xl leading-[1.03] md:text-6xl">
                  Looking After Homes, Neighbourhoods and the People Who Live In Them
               </h1>
               <p className="mt-6 max-w-2xl text-lg">
                  A local maintenance team for reactive repairs, voids, compliance, planned works and 24/7 emergency
                  call-out, delivered with respect at the door and evidence in your inbox.
               </p>
               <div className="mt-8 flex flex-wrap gap-3">
                  <a
                     href={COMPANY.phoneHref}
                     className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
                  >
                     <Phone className="h-4 w-4" /> 24/7 emergency: {COMPANY.phone}
                  </a>
                  <Link
                     href="/maintenance"
                     className="rounded-md border border-white/25 px-6 py-3 font-semibold hover:bg-white/10 backdrop-blur-sm"
                  >
                     Housing & commercial maintenance
                  </Link>
                  <Link
                     href="/procurement"
                     className="rounded-md border border-white/25 px-6 py-3 font-semibold hover:bg-white/10 backdrop-blur-sm"
                  >
                     Procurement pack
                  </Link>
               </div>

               <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                  {TRUST_BADGES.map((b) => (
                     <li key={b} className="flex items-center gap-2 backdrop-blur-lg">
                        <ShieldCheck className="h-4 w-4 text-accent" /> {b}
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         <section className="border-b border-border bg-surface">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 lg:grid-cols-4">
               {TRUST_STATS.map((s) => (
                  <div key={s.label}>
                     <p className="font-black text-3xl text-foreground md:text-4xl">{s.value}</p>
                     <p className="mt-1 text-md font-semibold text-foreground">{s.label}</p>
                  </div>
               ))}
            </div>
         </section>

         <Section
            eyebrow="Who we support"
            title="Built around the clients who need evidence, not promises"
            intro="We work the way housing providers, public bodies and property managers work: priority codes, appointment slots, certification and reporting."
         >
            <div className="flex flex-wrap gap-3">
               {CLIENT_TYPES.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">
                     {c}
                  </span>
               ))}
            </div>
         </Section>

         <Section
            tone="grey"
            eyebrow="Services"
            title="Every trade under one contract"
            intro="Each service has its own page with scope, standards and response times."
         >
            <CardGrid>
               {SERVICES.slice(0, 12).map((s) => (
                  <InfoCard
                     key={s.slug}
                     title={s.title}
                     body={s.short}
                     footer={
                        <Link
                           href={{ pathname: "/services/$slug", query: { slug: s.slug } }}
                           className="text-sm font-bold  hover:underline"
                        >
                           View service →
                        </Link>
                     }
                  />
               ))}
            </CardGrid>
            <div className="mt-8">
               <Link href="/services" className="font-bold  hover:underline">
                  See all services →
               </Link>
            </div>
         </Section>

         <Section eyebrow="Response times" title="Measurable commitments, not just 'fast service'">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
               {RESPONSE_COMMITMENTS.map((r) => (
                  <div key={r.label} className="flex items-center gap-4 bg-card p-5">
                     <Clock className="h-5 w-5 shrink-0 text-accent" />
                     <div>
                        <p className="font-semibold">{r.label}</p>
                        <p className="text-sm text-muted-foreground">{r.value}</p>
                     </div>
                  </div>
               ))}
            </div>
         </Section>

         <Section tone="surface" eyebrow="Evidence" title="What lands in your inbox after every job">
            <CardGrid>
               <InfoCard
                  title="Photographic reporting"
                  body="Before-and-after photographs, timestamped, attached to the completed order."
               />
               <InfoCard
                  title="Digital certificates"
                  body="Gas, electrical and fire safety certification uploaded within 24-48 hours of test."
               />
               <InfoCard
                  title="KPI reporting"
                  body="Monthly performance packs covering attendance, completion, first-time fix and satisfaction."
               />
            </CardGrid>
            <p className="mt-6 flex items-center gap-2 text-sm ">
               <Camera className="h-4 w-4 text-accent" /> See real examples on our{" "}
               <Link href="/case-studies" className="font-semibold text-foreground hover:underline">
                  case studies page
               </Link>
               .
            </p>
         </Section>

         <Section
            eyebrow="In your community"
            title="Part of the neighbourhoods we maintain"
            intro="We are not a call centre with a van fleet. Our people live locally, train locally and are known on the estates they look after."
         >
            <CardGrid>
               {COMMUNITY.map((c) => (
                  <InfoCard key={c.title} title={c.title} body={c.body} />
               ))}
            </CardGrid>
            <div className="mt-8">
               <Link href="/social-value" className="font-bold  hover:underline">
                  See our social value commitments →
               </Link>
            </div>
         </Section>

         <Section tone="surface" eyebrow="Reviews" title="What residents and clients say">
            <CardGrid>
               {TESTIMONIALS.map((t) => (
                  <figure key={t.author} className="rounded-lg border border-border bg-card p-6">
                     <blockquote className="text-sm leading-relaxed">"{t.quote}"</blockquote>
                     <figcaption className="mt-4 text-xs font-bold uppercase tracking-wide ">{t.author}</figcaption>
                  </figure>
               ))}
            </CardGrid>
         </Section>

         <CtaBand />
      </>
   );
}
