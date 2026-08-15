import { CardGrid, CtaBand, InfoCard, PageHero, Section } from "@/src/components/site/block";
import { CLIENT_TYPES, PROCUREMENT } from "@/src/data/site";
import Link from "next/link";
import housingImage from "@/public/images/housing.jpg";
import type { Metadata } from "next";

const TITLE = "Procurement | Working With Housing Associations, Councils & Commercial Clients";
const DESCRIPTION =
   "Capability, compliance, documentation and reporting for procurement and contract management teams assessing Jimgos Construction for housing, public sector and commercial maintenance contracts.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/procurement" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/procurement",
      images: ["/images/housing.jpg"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/images/housing.jpg"],
   },
};

export default function ProcurementPage() {
   return (
      <>
         <PageHero
            eyebrow="Procurement"
            title="Working With Housing Associations, Councils & Commercial Clients"
            intro="Everything a procurement or contract management team needs to assess us: capability, compliance, documentation and reporting."
            image={housingImage}
         />

         <Section eyebrow="Client types" title="Who we contract with">
            <div className="flex flex-wrap gap-3">
               {CLIENT_TYPES.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">
                     {c}
                  </span>
               ))}
            </div>
         </Section>

         <Section tone="surface" eyebrow="How we work" title="Our procurement position">
            <CardGrid>
               {PROCUREMENT.map((p) => (
                  <InfoCard key={p.title} title={p.title} body={p.body} />
               ))}
            </CardGrid>
         </Section>

         <Section eyebrow="Documentation" title="Available on request or from the compliance centre">
            <div className="grid gap-5 md:grid-cols-3">
               {[
                  {
                     t: "Pre-qualification pack",
                     d: "Policies, insurances, accreditations, references and financial information.",
                  },
                  {
                     t: "RAMS",
                     d: "Contract or site-specific risk assessments and method statements before mobilisation.",
                  },
                  {
                     t: "Mobilisation plan",
                     d: "Resourcing, on-call rota, reporting cadence and KPI definitions agreed up front.",
                  },
               ].map((c) => (
                  <div key={c.t} className="rounded-lg border border-border bg-card p-6">
                     <h3 className="font-display text-lg">{c.t}</h3>
                     <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                  </div>
               ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
               <Link
                  href="/compliance"
                  className="rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
               >
                  Compliance centre
               </Link>
               <Link
                  href="/accreditations"
                  className="rounded-md border border-border px-6 py-3 font-semibold hover:bg-muted"
               >
                  Accreditations
               </Link>
               <Link
                  href="/social-value"
                  className="rounded-md border border-border px-6 py-3 font-semibold hover:bg-muted"
               >
                  Social value
               </Link>
            </div>
         </Section>

         <CtaBand
            title="Inviting tenders or extending a framework?"
            body="Send us the specification and we will confirm capability, coverage and mobilisation timescales."
         />
      </>
   );
}
