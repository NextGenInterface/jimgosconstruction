import { CtaBand, PageHero, Section } from "@/src/components/site/block";
import { COMPLIANCE_DOCS, COMPANY } from "@/src/data/site";
import { FileText } from "lucide-react";
import riskImage from "@/public/images/risk.png";
import type { Metadata } from "next";

const TITLE = "Compliance Centre | Policies, Insurances & RAMS";
const DESCRIPTION =
   "Health & safety policy, insurance certificates, RAMS packs and compliance documentation for procurement teams and auditors. Request any document from Jimgos Construction the same working day.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/compliance" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/compliance",
      images: ["/images/risk.png"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/images/risk.png"],
   },
};

export default function CompliancePage() {
   return (
      <>
         <PageHero
            eyebrow="Compliance centre"
            title="Policies, insurances and RAMS in one place"
            intro="Everything a buyer, auditor or contract manager typically asks for. Request any document and we will issue the current version the same working day."
            image={riskImage}
         />

         <Section eyebrow="Document library" title="Available documents">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
               {COMPLIANCE_DOCS.map((d) => (
                  <div key={d.name} className="flex items-start gap-4 bg-card p-6">
                     <FileText className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                     <div className="flex-1">
                        <p className="font-display text-base">{d.name}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{d.detail}</p>
                     </div>
                     <a
                        href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(`Document request: ${d.name}`)}`}
                        className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-bold hover:border-accent hover:text-accent"
                     >
                        Request
                     </a>
                  </div>
               ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
               Documents are version controlled and reviewed annually. Certificates are issued as current-dated PDFs so
               they can be attached directly to a submission.
            </p>
         </Section>

         <Section tone="surface" eyebrow="Bulk requests" title="Need the full pre-qualification pack?">
            <p className="max-w-2xl text-muted-foreground">
               Ask for the complete pack and we will send policies, insurances, accreditation evidence, references and a
               sample RAMS bundle in one email.
            </p>
            <a
               href={`mailto:${COMPANY.email}?subject=${encodeURIComponent("Full pre-qualification pack request")}`}
               className="mt-6 inline-block rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
            >
               Request the full pack
            </a>
         </Section>

         <CtaBand
            title="Auditing us as a supplier?"
            body="We can complete supplier questionnaires and portal onboarding on request."
         />
      </>
   );
}
