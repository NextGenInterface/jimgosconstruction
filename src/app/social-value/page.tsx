import { CardGrid, CtaBand, InfoCard, PageHero, Section } from "@/src/components/site/block";
import { SOCIAL_VALUE } from "@/src/data/site";
import social2Image from "@/public/images/social2.jpg";
import type { Metadata } from "next";

const TITLE = "Social Value | Community Commitments & Reporting";
const DESCRIPTION =
   "Apprenticeships, local employment, waste reduction and community support: the social value commitments Jimgos Construction makes and reports against on housing and public sector contracts.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/social-value" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/social-value",
      images: ["/images/social2.jpg"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/images/social2.jpg"],
   },
};

export default function SocialValuePage() {
   return (
      <>
         <PageHero
            eyebrow="Social Value"
            title="Contributing to the communities we maintain"
            intro="Social value is scored in almost every public sector tender. These are the commitments we make and measure on the contracts we deliver."
            image={social2Image}
         />
         <Section
            eyebrow="Our commitments"
            title="Twelve commitments we report against"
            intro="Each area is tracked and can be reported to clients by contract, quarter or annual period."
         >
            <CardGrid>
               {SOCIAL_VALUE.map((s) => (
                  <InfoCard key={s.title} title={s.title} body={s.body} />
               ))}
            </CardGrid>
         </Section>
         <Section tone="surface" eyebrow="Reporting" title="How we evidence social value">
            <div className="grid gap-5 md:grid-cols-3">
               {[
                  {
                     t: "Baseline at mobilisation",
                     d: "We agree measurable targets with the client before works start, aligned to the TOMs framework where required.",
                  },
                  {
                     t: "Quarterly reporting",
                     d: "Apprenticeship hours, local spend, landfill diversion and volunteering hours reported each quarter.",
                  },
                  {
                     t: "Annual statement",
                     d: "A published Social Value Statement is available from our compliance centre for tender submissions.",
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
            title="Need our social value commitments for a tender?"
            body="We can provide a contract-specific social value plan with measurable targets."
         />
      </>
   );
}
