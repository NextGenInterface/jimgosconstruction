import { CtaBand, PageHero, Section, TickList } from "@/src/components/site/block";
import { COMPANY } from "@/src/data/site";
import Link from "next/link";
import type { Metadata } from "next";

const TITLE = "Tenant Information | What to Expect From Your Repair";
const DESCRIPTION =
   "What happens before, during and after a repair visit from Jimgos Construction, plus what to do in an emergency. Clear information for residents in homes we maintain.";

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/tenants" },
   openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/tenants",
      images: ["/opengraph-image"],
   },
   twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: ["/opengraph-image"],
   },
};

const BEFORE = [
   "We contact you to agree a date and an arrival window",
   "You receive a confirmation by call or text message",
   "We tell you roughly how long the work should take",
   "We let you know if scaffolding, water or power isolation is needed",
   "Let us know about pets, access issues or anyone vulnerable in the home",
];

const DURING = [
   "Our engineer carries photo ID and will show it at the door",
   "Dust sheets and floor protection are used in your home",
   "We explain what we are doing and answer your questions",
   "Photographs are taken of the fault and the completed repair",
   "The work area is cleaned and all waste is removed",
];

const AFTER = [
   "You are told if any follow-on work is needed and when it is booked",
   "Your landlord receives a report with photographs the same day",
   "Any certificate (gas, electrical) is issued and filed",
   "We may ask for quick feedback on the visit",
   "If something is not right, tell us and we will return",
];

export default function TenantsPage() {
   return (
      <>
         <PageHero
            eyebrow="Tenant information"
            title="What to expect from your repair"
            intro="We work in people's homes every day. Here is exactly what happens before, during and after a visit, so there are no surprises."
         />

         <Section eyebrow="Step 1" title="Before we visit">
            <TickList items={BEFORE} />
         </Section>

         <Section tone="surface" eyebrow="Step 2" title="During the visit">
            <TickList items={DURING} />
         </Section>

         <Section eyebrow="Step 3" title="After the repair">
            <TickList items={AFTER} />
         </Section>

         <Section tone="surface" eyebrow="Emergencies" title="If it is an emergency">
            <p className="max-w-2xl text-muted-foreground">
               If there is a burst pipe, a gas smell, no heating, a loss of power or damage that makes your home unsafe
               or insecure, call us straight away on{" "}
               <a href={COMPANY.phoneHref} className="font-bold text-accent">
                  {COMPANY.phone}
               </a>
               . If you smell gas, leave the property and call the National Gas Emergency Service on 0800 111 999 first.
            </p>
            <Link
               href="/report-an-emergency"
               className="mt-6 inline-block rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
            >
               Report an emergency
            </Link>
         </Section>

         <CtaBand
            title="Question about a booked repair?"
            body="Call the office and quote your job reference and we will check the status for you."
         />
      </>
   );
}
