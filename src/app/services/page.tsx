import { CardGrid, CtaBand, InfoCard, PageHero, Section } from "@/src/components/site/block";
import { SERVICES } from "@/src/data/site";
import Link from "next/link";
import type { Metadata } from "next";

const TITLE = "Maintenance Services | Every Trade Under One Contract";
const DESCRIPTION =
   "Responsive repairs, gas safety, electrical testing, plumbing, roofing, carpentry, drainage and more. Browse every Jimgos Construction maintenance service, with scope, standards and response times.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/services" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/services",
      images: ["/images/servicess.jpg"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/images/servicess.jpg"],
   },
};

export default function ServicesIndex() {
   return (
      <>
         <PageHero
            eyebrow="Services"
            title="Every service, on its own page"
            intro="Scope, standards and response times set out service by service, so clients and procurement teams can find exactly what they need."
         />
         <Section>
            <CardGrid>
               {SERVICES.map((s) => (
                  <InfoCard
                     key={s.slug}
                     title={s.title}
                     body={s.short}
                     footer={
                        <Link href={`/services/${s.slug}`} className="text-sm font-bold hover:underline">
                           View service →
                        </Link>
                     }
                  />
               ))}
            </CardGrid>
         </Section>
         <CtaBand />
      </>
   );
}
