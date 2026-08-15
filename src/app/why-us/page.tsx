import { CardGrid, CtaBand, InfoCard, PageHero, Section } from "@/src/components/site/block";
import { RESPONSE_COMMITMENTS, TESTIMONIALS, WHY_US } from "@/src/data/site";
import housingAssImage from "@/public/images/housingass.jpg";
import type { Metadata } from "next";

const TITLE = "Why Housing Associations Choose Us";
const DESCRIPTION =
   "Priority-coded reactive repairs, photographic reporting, KPI performance packs and 24/7 emergency cover: why housing associations and local authorities choose Jimgos Construction.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/why-us" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/why-us",
      images: ["/images/housingass.jpg"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/images/housingass.jpg"],
   },
};

export default function WhyUsPage() {
   return (
      <>
         <PageHero
            eyebrow="Why us"
            title="Why Housing Associations Choose Us"
            intro="Social landlords are judged on repairs performance and tenant satisfaction. We are set up to protect both."
            image={housingAssImage}
         />
         <Section eyebrow="Our offer" title="What you get from day one">
            <CardGrid>
               {WHY_US.map((w) => (
                  <InfoCard key={w.title} title={w.title} body={w.body} />
               ))}
            </CardGrid>
         </Section>
         <Section tone="surface" eyebrow="Commitments" title="Response and reporting standards">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
               {RESPONSE_COMMITMENTS.map((r) => (
                  <div key={r.label} className="bg-card p-5">
                     <p className="font-semibold">{r.label}</p>
                     <p className="text-sm text-muted-foreground">{r.value}</p>
                  </div>
               ))}
            </div>
         </Section>
         <Section eyebrow="Feedback" title="What clients tell us">
            <CardGrid>
               {TESTIMONIALS.map((t) => (
                  <figure key={t.author} className="rounded-lg border border-border bg-card p-6">
                     <blockquote className="text-sm leading-relaxed">"{t.quote}"</blockquote>
                     <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {t.author}
                     </figcaption>
                  </figure>
               ))}
            </CardGrid>
         </Section>
         <CtaBand />
      </>
   );
}
