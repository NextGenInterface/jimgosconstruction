import { CtaBand, PageHero, Section, TickList } from "@/src/components/site/block";
import { ACCREDITATIONS_CURRENT, ACCREDITATIONS_PROGRESS, ACCREDITATIONS_ROADMAP } from "@/src/data/site";
import { BadgeCheck, Clock3 } from "lucide-react";
import vettingImage from "@/public/images/vetting.png";
import type { Metadata } from "next";

const TITLE = "Accreditations & Insurance | Gas Safe, DBS Checked, Fully Insured";
const DESCRIPTION =
   "Jimgos Construction accreditations, insurances and vetting: Gas Safe registered, public and employers liability insured, DBS checked engineers, RAMS provided. Certificates supplied on request.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/accreditations" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/accreditations",
      images: ["/images/vetting.png"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/images/vetting.png"],
   },
};

export default function AccreditationsPage() {
   return (
      <>
         <PageHero
            eyebrow="Accreditations"
            title="Accreditations, insurance and vetting"
            intro="What we hold today, what is in application, and what we are working towards. Certificates are supplied with any tender or on request."
            image={vettingImage}
         />

         <Section eyebrow="Currently held" title="In place now">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
               {ACCREDITATIONS_CURRENT.map((a) => (
                  <div key={a.name} className="rounded-lg border border-border bg-card p-6">
                     <BadgeCheck className="h-6 w-6 text-success" />
                     <h3 className="mt-3 font-display text-lg">{a.name}</h3>
                     <p className="mt-2 text-sm text-muted-foreground">{a.note}</p>
                  </div>
               ))}
            </div>
         </Section>

         <Section tone="surface" eyebrow="In application" title="Currently being assessed">
            <div className="grid gap-5 md:grid-cols-2">
               {ACCREDITATIONS_PROGRESS.map((a) => (
                  <div key={a.name} className="rounded-lg border border-border bg-card p-6">
                     <Clock3 className="h-6 w-6 text-accent" />
                     <h3 className="mt-3 font-display text-lg">{a.name}</h3>
                     <p className="mt-2 text-sm text-muted-foreground">{a.note}</p>
                  </div>
               ))}
            </div>
         </Section>

         <Section eyebrow="Roadmap" title="Planned certifications">
            <TickList items={ACCREDITATIONS_ROADMAP} />
         </Section>

         <CtaBand
            title="Need certificates for a pre-qualification questionnaire?"
            body="Request our insurance certificates and accreditation evidence and we will send them the same working day."
         />
      </>
   );
}
