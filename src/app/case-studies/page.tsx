import { PageHero, CtaBand, Section } from "@/src/components/site/block";
import { CASE_STUDIES } from "@/src/data/site";
import type { Metadata } from "next";

const TITLE = "Case Studies | Property Maintenance & Repair Projects";
const DESCRIPTION =
   "Real repair, refurbishment and emergency response case studies from Jimgos Construction, covering housing associations, local authorities and commercial clients across London and the South East.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/case-studies" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/case-studies",
      images: ["/images/repair.jpg"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/images/repair.jpg"],
   },
};

export default function CaseStudiesPage() {
   return (
      <>
         <PageHero
            eyebrow="Evidence"
            title="Case studies"
            intro="Each example sets out the client problem, our solution, how long it took and the outcome. Full photographic records are available on request."
         />
         <Section>
            <div className="grid gap-6 lg:grid-cols-2">
               {CASE_STUDIES.map((c) => (
                  <article
                     key={c.slug}
                     className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
                  >
                     <div className="stripe-edge h-1" />
                     <div className="p-6">
                        <p className="eyebrow">{c.sector}</p>
                        <h2 className="mt-2 font-display text-xl">{c.title}</h2>
                        <dl className="mt-5 space-y-4 text-sm">
                           <div>
                              <dt className="font-semibold">Client problem</dt>
                              <dd className="mt-1 text-muted-foreground">{c.problem}</dd>
                           </div>
                           <div>
                              <dt className="font-semibold">Solution</dt>
                              <dd className="mt-1 text-muted-foreground">{c.solution}</dd>
                           </div>
                           <div>
                              <dt className="font-semibold">Completion time</dt>
                              <dd className="mt-1 text-muted-foreground">{c.duration}</dd>
                           </div>
                           <div>
                              <dt className="font-semibold">Outcome</dt>
                              <dd className="mt-1 text-muted-foreground">{c.outcome}</dd>
                           </div>
                           <div>
                              <dt className="font-semibold">Photographs</dt>
                              <dd className="mt-1 text-muted-foreground">
                                 Before-and-after photographs held on file and available to clients on request.
                              </dd>
                           </div>
                        </dl>
                     </div>
                  </article>
               ))}
            </div>
         </Section>
         <CtaBand
            title="Want references for a similar scheme?"
            body="We can provide client references and a fuller case study pack with photographs."
         />
      </>
   );
}
