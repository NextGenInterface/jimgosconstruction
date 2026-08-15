import { CardGrid, CtaBand, InfoCard, PageHero, Section } from "@/src/components/site/block";
import { HEALTH_SAFETY } from "@/src/data/site";
import Link from "next/link";
import safetyImage from "@/public/images/safety.jpg";
import type { Metadata } from "next";

const TITLE = "Health & Safety | Safety Management for Property Maintenance";
const DESCRIPTION =
   "Health & safety management arrangements at Jimgos Construction: risk assessments, RAMS, PPE, toolbox talks, working at height, asbestos awareness and incident reporting for every contract.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/health-and-safety" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/health-and-safety",
      images: ["/images/safety.jpg"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/images/safety.jpg"],
   },
};

export default function HealthSafetyPage() {
   return (
      <>
         <PageHero
            eyebrow="Health & Safety"
            title="Safety arrangements that stand up to a client audit"
            intro="Our operatives work in occupied homes, communal areas and live commercial buildings. These are the arrangements that keep residents, staff and the public safe."
            image={safetyImage}
         />
         <Section eyebrow="Management arrangements" title="What we have in place">
            <CardGrid>
               {HEALTH_SAFETY.map((h) => (
                  <InfoCard key={h.title} title={h.title} body={h.body} />
               ))}
            </CardGrid>
         </Section>
         <Section tone="surface" eyebrow="Documents" title="Available for tender submissions">
            <p className="max-w-2xl text-muted-foreground">
               Our Health & Safety Policy, sample RAMS pack, environmental policy and insurance certificates are
               available from the compliance centre or on request from the office.
            </p>
            <Link
               href="/compliance"
               className="mt-6 inline-block rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
            >
               Open the compliance centre
            </Link>
         </Section>
         <CtaBand
            title="Need our safety documentation?"
            body="We can issue a full pre-qualification pack including RAMS, policies and insurances."
         />
      </>
   );
}
