import { PageHero, CardGrid, InfoCard, CtaBand, Section } from "@/src/components/site/block";
import { SERVICES, RESPONSE_COMMITMENTS } from "@/src/data/site";
import Link from "next/link";
import heroImage from "@/public/images/maintenance.png";
import type { Metadata } from "next";

const TITLE = "Housing & Commercial Maintenance Services";
const DESCRIPTION =
   "Full multi-trade maintenance capability for housing associations, local authorities, managing agents and commercial property teams, delivered under one contract with one point of contact.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/maintenance" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/maintenance",
      images: ["/images/maintenance.png"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/images/maintenance.png"],
   },
};

export default function MaintenancePage() {
   return (
      <>
         <PageHero
            eyebrow="Housing & Commercial Maintenance"
            title="Maintaining housing stock and commercial premises, not just building extensions"
            intro="A full multi-trade maintenance capability for housing associations, local authorities, managing agents and commercial property teams, delivered under one contract with one point of contact."
            image={heroImage}
         />

         <Section
            eyebrow="Core capability"
            title="Maintenance services we deliver"
            intro="Each service links to a dedicated page setting out scope, standards and response times."
         >
            <CardGrid>
               {SERVICES.map((s) => (
                  <InfoCard
                     key={s.slug}
                     title={s.title}
                     body={s.short}
                     footer={
                        <Link
                           href={{ pathname: "/services/$slug", query: { slug: s.slug } }}
                           className="text-sm font-bold text-accent hover:underline"
                        >
                           View service →
                        </Link>
                     }
                  />
               ))}
            </CardGrid>
         </Section>

         <Section tone="surface" eyebrow="How we run a contract" title="Priorities, appointments and evidence">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
               {RESPONSE_COMMITMENTS.map((r) => (
                  <div key={r.label} className="bg-card p-5">
                     <p className="font-semibold">{r.label}</p>
                     <p className="text-sm text-muted-foreground">{r.value}</p>
                  </div>
               ))}
            </div>
         </Section>

         <CtaBand
            title="Need maintenance cover across a portfolio?"
            body="Tell us the stock, the priorities and the reporting you need, and we will set out how we would mobilise."
         />
      </>
   );
}
