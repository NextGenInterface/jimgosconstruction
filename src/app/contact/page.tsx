import { PageHero, Section } from "@/src/components/site/block";
import { COMPANY, CLIENT_TYPES, RESPONSE_COMMITMENTS } from "@/src/data/site";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { Metadata } from "next";
import { ContactForm } from "@/src/components/site/contact-form";

const OFFICE_ADDRESS = "299 Hoxton Street, London N1 5JX";
const MAP_EMBED_SRC = `https://www.google.com/maps/embed?pb=!1m2!2m1!1s${encodeURIComponent(OFFICE_ADDRESS)}`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;

const TITLE = "Contact Us | Quotes, Tenders & Emergency Repairs";
const DESCRIPTION = `Contact ${COMPANY.name} for quotes, contract enquiries, tenders and 24/7 emergency repairs across ${COMPANY.areas}. Call, email or WhatsApp the office.`;

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/contact" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/contact",
      images: ["/opengraph-image"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/opengraph-image"],
   },
};

export default function ContactPage() {
   return (
      <>
         <PageHero
            eyebrow="Contact"
            title="Talk to the office"
            intro={`Quotes, contract enquiries, tenders and emergencies. We cover ${COMPANY.areas}.`}
         />

         <Section>
            <div className="grid gap-5 md:grid-cols-3">
               <a href={COMPANY.phoneHref} className="rounded-lg border border-border bg-card p-6 hover:border-accent">
                  <Phone className="h-6 w-6" />
                  <h2 className="mt-3 font-display text-lg">Call us</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{COMPANY.phone}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Emergency line answered 24/7</p>
               </a>
               <a
                  href={`mailto:${COMPANY.email}`}
                  className="rounded-lg border border-border bg-card p-6 hover:border-accent"
               >
                  <Mail className="h-6 w-6" />
                  <h2 className="mt-3 font-display text-lg">Email</h2>
                  <p className="mt-1 break-all text-sm text-muted-foreground">{COMPANY.email}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Replies within one working day</p>
               </a>
               <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-border bg-card p-6 hover:border-accent"
               >
                  <FaWhatsapp className="h-6 w-6" />
                  <h2 className="mt-3 font-display text-lg">WhatsApp</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Send photos of the issue</p>
                  <p className="mt-1 text-xs text-muted-foreground">Useful for quick diagnosis</p>
               </a>
            </div>
         </Section>

         <Section tone="surface" eyebrow="Message us" title="Send us a message">
            <div className="grid gap-8 lg:grid-cols-2">
               <ContactForm />

               <div className="flex flex-col gap-5">
                  <div className="overflow-hidden rounded-lg border border-border">
                     <iframe
                        title={`${COMPANY.name} location`}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.80786461976!2d-0.081457!3d51.535083799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761db0a24f80d5%3A0x77c8e8882e4ff3b1!2sJimgos%20Constructions!5e0!3m2!1sen!2sng!4v1786812482756!5m2!1sen!2sng"
                        width="100%"
                        height="320"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-80 w-full"
                     ></iframe>
                  </div>
                  <a
                     href={MAP_LINK}
                     target="_blank"
                     rel="noreferrer"
                     className="flex items-start gap-3 rounded-lg border border-border bg-card p-6 hover:border-accent"
                  >
                     <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                     <div>
                        <h3 className="font-display text-lg">Our office</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{OFFICE_ADDRESS}</p>
                        <p className="mt-1 text-xs text-muted-foreground">Get directions on Google Maps</p>
                     </div>
                  </a>
               </div>
            </div>
         </Section>

         <Section eyebrow="Who we work with" title="Clients we support">
            <div className="flex flex-wrap gap-3">
               {CLIENT_TYPES.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">
                     {c}
                  </span>
               ))}
            </div>
         </Section>

         <Section tone="surface" eyebrow="Standards" title="What you can expect from us">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
               {RESPONSE_COMMITMENTS.map((r) => (
                  <div key={r.label} className="bg-card p-5">
                     <p className="font-semibold">{r.label}</p>
                     <p className="text-sm text-muted-foreground">{r.value}</p>
                  </div>
               ))}
            </div>
         </Section>
      </>
   );
}
