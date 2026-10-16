import { CtaBand, PageHero, Section } from "@/src/components/site/block";
import { ACCREDITATIONS_CURRENT, COMPANY } from "@/src/data/site";
import { DOCUMENT_GROUPS, getDocuments } from "@/src/data/documents";
import { BadgeCheck, Clock3, Download, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import vettingImage from "@/public/images/vetting.png";
import type { Metadata } from "next";

const TITLE = "Accreditations & Insurance | Gas Safe, Fully Insured";
const DESCRIPTION =
   "Jimgos Construction accreditations, insurances and vetting: Gas Safe registered, public and employers liability insured, RAMS provided. Certificates supplied on request.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/accreditations" },
   openGraph: {
      type: "website",
      siteName: COMPANY.name,
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
   const documents = getDocuments();

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

         <Section
            tone="surface"
            eyebrow="Evidence library"
            title="Certificates, policies and records"
            intro="View our supporting documents online. Each one opens in a new tab so you can read, download or print it."
         >
            <div className="space-y-14">
               {DOCUMENT_GROUPS.map((group) => {
                  const files = documents.filter((d) => d.category === group.id && !d.isImage);
                  const photos = documents.filter((d) => d.category === group.id && d.isImage);
                  if (!files.length && !photos.length) return null;

                  return (
                     <div key={group.id}>
                        <h3 className="font-display text-2xl">{group.title}</h3>
                        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{group.intro}</p>

                        {files.length > 0 && (
                           <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                              {files.map((doc) => {
                                 const viewable = doc.extension === "pdf";
                                 const ActionIcon = viewable ? ExternalLink : Download;
                                 return (
                                    <li key={doc.file}>
                                       <a
                                          href={doc.href}
                                          target={viewable ? "_blank" : undefined}
                                          rel={viewable ? "noopener noreferrer" : undefined}
                                          download={viewable ? undefined : doc.file}
                                          className="group flex h-full items-start gap-3 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
                                       >
                                          <FileText className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                          <span className="flex-1">
                                             <span className="block text-sm font-semibold group-hover:underline">
                                                {doc.title}
                                             </span>
                                             <span className="mt-1 block text-xs uppercase text-muted-foreground">
                                                {doc.extension} · {doc.size}
                                             </span>
                                          </span>
                                          <ActionIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                                          <span className="sr-only">{viewable ? "(opens in new tab)" : "(download)"}</span>
                                       </a>
                                    </li>
                                 );
                              })}
                           </ul>
                        )}

                        {photos.length > 0 && (
                           <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                              {photos.map((doc) => (
                                 <li key={doc.file}>
                                    <a
                                       href={doc.href}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="group block overflow-hidden rounded-lg border border-border bg-card"
                                    >
                                       <span className="relative block aspect-[3/4]">
                                          <Image
                                             src={doc.href}
                                             alt={doc.title}
                                             fill
                                             sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                                             className="object-cover transition-transform group-hover:scale-105"
                                          />
                                       </span>
                                       <span className="block p-2 text-xs font-semibold">
                                          {doc.title}
                                          <span className="sr-only"> (opens in new tab)</span>
                                       </span>
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </div>
                  );
               })}
            </div>
         </Section>

         {/* <Section tone="surface" eyebrow="In application" title="Currently being assessed">
            <div className="grid gap-5 md:grid-cols-2">
               {ACCREDITATIONS_PROGRESS.map((a) => (
                  <div key={a.name} className="rounded-lg border border-border bg-card p-6">
                     <Clock3 className="h-6 w-6 text-accent" />
                     <h3 className="mt-3 font-display text-lg">{a.name}</h3>
                     <p className="mt-2 text-sm text-muted-foreground">{a.note}</p>
                  </div>
               ))}
            </div>
         </Section> */}

         {/* <Section eyebrow="Roadmap" title="Planned certifications">
            <TickList items={ACCREDITATIONS_ROADMAP} />
         </Section> */}

         <CtaBand
            title="Need certificates for a pre-qualification questionnaire?"
            body="Request our insurance certificates and accreditation evidence and we will send them the same working day."
         />
      </>
   );
}
