"use client";
import { useState } from "react";
import { Menu, X, Phone, Dot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, SERVICES } from "@/src/data/site";
import Image from "next/image";
import Logo from "@/public/images/JCLOGO.webp";

const NAV = [
   { to: "/", label: "Home" },
   { to: "/maintenance", label: "Maintenance" },
   { to: "/emergency", label: "24/7 Emergency" },
   { to: "/procurement", label: "Procurement" },
   { to: "/why-housing-associations-choose-us", label: "Why Us" },
   { to: "/case-studies", label: "Case Studies" },
   { to: "/compliance", label: "Compliance" },
   { to: "/contact", label: "Contact" },
] as const;

const MORE = [
   { to: "/social-value", label: "Social Value" },
   { to: "/health-and-safety", label: "Health & Safety" },
   { to: "/accreditations", label: "Accreditations" },
   { to: "/tenants", label: "Tenant Information" },
   { to: "/services", label: "All Services" },
] as const;

export function Header() {
   const [open, setOpen] = useState(false);
   const pathname = usePathname();
   const isActive = (to: string) => pathname === to;

   return (
      <header className="sticky top-0 z-50 border-b border-border/60 bg-neutral-900 backdrop-blur">
         <div className="stripe-edge h-1" />
         <div className="bg-black text-ink-foreground border-b border-neutral-800">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs">
               <p className="">Gas Safe · Fully insured · DBS checked engineers · {COMPANY.areas}</p>
               <a href={COMPANY.phoneHref} className="font-semibold text-accent hover:underline">
                  24/7 Emergency: {COMPANY.phone}
               </a>
            </div>
         </div>

         <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="flex flex-col leading-none">
               <Image
                  src={Logo}
                  alt="Jimgos Construction maintenance engineers outside a London housing block"
                  width={200}
                  height={200}
               />
            </Link>

            <nav className="hidden items-center gap-5 lg:flex">
               {NAV.map((item) => (
                  <Link
                     key={item.to}
                     href={item.to}
                     aria-current={isActive(item.to) ? "page" : undefined}
                     className={`text-sm font-semibold transition-colors hover:text-accent text-background ${
                        isActive(item.to) ? "text-accent" : ""
                     }`}
                  >
                     {item.label}
                  </Link>
               ))}
               <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
               >
                  <Phone className="h-4 w-4" /> Call now
               </a>
            </nav>

            <button
               type="button"
               aria-label="Toggle menu"
               onClick={() => setOpen((v) => !v)}
               className="rounded-md border border-border p-2 lg:hidden"
            >
               {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
         </div>

         {open && (
            <div className="border-t border-border bg-background lg:hidden">
               <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
                  {[...NAV, ...MORE].map((item) => (
                     <Link
                        key={item.to}
                        href={item.to}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(item.to) ? "page" : undefined}
                        className={`rounded-md px-2 py-2 text-sm font-semibold hover:bg-muted ${
                           isActive(item.to) ? "text-accent" : "text-foreground/85"
                        }`}
                     >
                        {item.label}
                     </Link>
                  ))}
               </div>
            </div>
         )}

         <div className="hidden bg-background lg:block">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2 text-xs font-medium text-background">
               {MORE.map((item) => (
                  <Link
                     key={item.to}
                     href={item.to}
                     aria-current={isActive(item.to) ? "page" : undefined}
                     className={`hover:text-accent text-foreground text-sm ${isActive(item.to) ? "text-accent" : ""}`}
                  >
                     {item.label}
                  </Link>
               ))}
               <span className="hidden xl:inline text-foreground">
                  <Dot />
               </span>
               {SERVICES.slice(0, 4).map((s) => (
                  <Link
                     key={s.slug}
                     href={{ pathname: "/services/$slug", query: { slug: s.slug } }}
                     className="hidden hover:text-accent xl:inline text-sm text-foreground"
                  >
                     {s.title}
                  </Link>
               ))}
            </div>
         </div>
      </header>
   );
}
