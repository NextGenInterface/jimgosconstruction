import { CtaBand, PageHero, Section, TickList } from "@/src/components/site/block";
import { SERVICES } from "@/src/data/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

function getService(id: string) {
   return SERVICES.find((s) => s.slug === id);
}

export function generateStaticParams() {
   return SERVICES.map((s) => ({ id: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
   const { id } = await params;
   const service = getService(id);

   if (!service) {
      return { title: "Service not found", robots: { index: false } };
   }

   const images = [service.image ? service.image.src : "/opengraph-image"];

   return {
      title: service.seoTitle,
      description: service.seoDescription,
      alternates: { canonical: `/services/${id}` },
      openGraph: {
         title: service.seoTitle,
         description: service.seoDescription,
         type: "article",
         url: `/services/${id}`,
         images,
      },
      twitter: {
         title: service.seoTitle,
         description: service.seoDescription,
         images,
      },
   };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params;
   const service = getService(id);
   if (!service) notFound();

   const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);
   const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.heading,
      description: service.seoDescription,
      areaServed: "London and the South East",
      provider: { "@type": "Organization", name: "Jimgos Construction" },
   };

   return (
      <>
         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

         <PageHero eyebrow="Service" title={service.heading} intro={service.intro} image={service.image} />

         <Section eyebrow="Scope" title="What this service covers">
            <TickList items={service.bullets} />
         </Section>

         <Section tone="surface" eyebrow="Standards" title="Our commitments on this service">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
               {service.standards.map((st: string) => (
                  <div key={st} className="bg-card p-5 text-sm font-medium">
                     {st}
                  </div>
               ))}
            </div>
         </Section>

         <Section eyebrow="Related" title="Other services">
            <div className="flex flex-wrap gap-3">
               {others.map((o) => (
                  <Link
                     key={o.slug}
                     href={`/services/${o.slug}`}
                     className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-accent hover:text-accent"
                  >
                     {o.title}
                  </Link>
               ))}
            </div>
         </Section>

         <CtaBand
            title={`Talk to us about ${service.title.toLowerCase()}`}
            body="Call the office for a quote, an SLA discussion or an emergency attendance."
         />
      </>
   );
}
