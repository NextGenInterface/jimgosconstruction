import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { COMPANY } from "@/src/data/site";
import Link from "next/link";
import Image from "next/image";

export function PageHero({
   eyebrow,
   title,
   intro,
   children,
   image,
}: {
   eyebrow: string;
   title: string;
   intro: string;
   children?: ReactNode;
   image?: any;
}) {
   return (
      <section className="hero-surface relative isolate overflow-hidden text-ink-foreground">
         {image && (
            <Image
               src={image}
               alt="Jimgos Construction maintenance engineers outside a London housing block"
               width={1600}
               height={1000}
               className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
         )}
         <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[1.05] md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg">{intro}</p>
            {children && <div className="mt-8">{children}</div>}
         </div>
      </section>
   );
}

export function Section({
   eyebrow,
   title,
   intro,
   children,
   tone = "white",
}: {
   eyebrow?: string;
   title?: string;
   intro?: string;
   children: ReactNode;
   tone?: "surface" | "grey" | "white";
}) {
   return (
      <section
         className={
            tone === "surface" ? "bg-surface" : tone === "grey" ? "bg-neutral-200" : tone === "white" ? "bg-white" : ""
         }
      >
         <div className="mx-auto max-w-7xl px-4 py-16">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="mt-2 max-w-3xl font-display text-3xl md:text-4xl">{title}</h2>}
            {intro && <p className="mt-4 max-w-3xl text-foreground text-lg">{intro}</p>}
            <div className={title || eyebrow ? "mt-10" : undefined}>{children}</div>
         </div>
      </section>
   );
}

export function CardGrid({ children }: { children: ReactNode }) {
   return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function InfoCard({ title, body, footer }: { title: string; body: string; footer?: ReactNode }) {
   return (
      <div className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
         <h3 className="font-display text-lg">{title}</h3>
         <p className="mt-2 flex-1 text-sm leading-relaxed ">{body}</p>
         {footer && <div className="mt-4">{footer}</div>}
      </div>
   );
}

export function TickList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 | 3 }) {
   const cols = columns === 1 ? "" : columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
   return (
      <ul className={`grid gap-3 ${cols}`}>
         {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm">
               <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
               <span>{item}</span>
            </li>
         ))}
      </ul>
   );
}

export function CtaBand({
   title = "Need a maintenance partner you can evidence to a client?",
   body = "Speak to us about responsive repairs, voids, compliance testing or an upcoming tender.",
}: {
   title?: string;
   body?: string;
}) {
   return (
      <section className="bg-foreground text-ink-foreground">
         <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
               <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
               <p className="mt-3 text-ink-muted">{body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
               <a
                  href={COMPANY.phoneHref}
                  className="rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
               >
                  Call {COMPANY.phone}
               </a>
               <Link
                  href={"/contact"}
                  className="rounded-md border border-white/25 px-6 py-3 font-semibold hover:bg-white/10"
               >
                  Request a callback
               </Link>
            </div>
         </div>
      </section>
   );
}
