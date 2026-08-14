// import { Link } from "@tanstack/react-router";

import { COMPANY, SERVICES, TRUST_BADGES } from "@/src/data/site";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/JCLOGO.webp";

export function Footer() {
   return (
      <footer className="bg-neutral-800 text-ink-foreground">
         <div className="stripe-edge h-1" />
         <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
            <div>
               <Link href="/" className="flex flex-col leading-none">
                  <Image
                     src={Logo}
                     alt="Jimgos Construction maintenance engineers outside a London housing block"
                     width={175}
                     height={175}
                  />
               </Link>
               <p className="mt-3 text-sm text-ink-muted">
                  {COMPANY.tagline} across {COMPANY.areas}. Supporting housing associations, local authorities,
                  commercial property managers and residential clients.
               </p>
               <a href={COMPANY.phoneHref} className="mt-5 inline-block font-display text-xl font-bold text-accent">
                  {COMPANY.phone}
               </a>
               <p className="text-sm text-ink-muted">{COMPANY.email}</p>
            </div>

            <div>
               <p className="eyebrow">Services</p>
               <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {SERVICES.slice(0, 9).map((s) => (
                     <li key={s.slug}>
                        <Link
                           href={{ pathname: "/services/$slug", query: { slug: s.slug } }}
                           className="hover:text-accent"
                        >
                           {s.title}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            <div>
               <p className="eyebrow">Company</p>
               <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {[
                     { to: "/maintenance", label: "Housing & Commercial Maintenance" },
                     { to: "/emergency", label: "24/7 Emergency Repairs" },
                     { to: "/report-an-emergency", label: "Report an Emergency" },
                     { to: "/procurement", label: "Procurement & Tenders" },
                     { to: "/social-value", label: "Social Value" },
                     { to: "/health-and-safety", label: "Health & Safety" },
                     { to: "/accreditations", label: "Accreditations" },
                     { to: "/tenants", label: "Tenant Information" },
                     { to: "/compliance", label: "Compliance Centre" },
                     { to: "/case-studies", label: "Case Studies" },
                  ].map((l) => (
                     <li key={l.to}>
                        <Link href={l.to} className="hover:text-accent">
                           {l.label}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            <div>
               <p className="eyebrow">Assurance</p>
               <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {TRUST_BADGES.map((b) => (
                     <li key={b}>{b}</li>
                  ))}
               </ul>
            </div>
         </div>

         <div className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-ink-muted">
               © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            </div>
         </div>
      </footer>
   );
}
