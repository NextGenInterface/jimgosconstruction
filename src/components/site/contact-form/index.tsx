"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "147fca45-40e1-46cf-907a-b21172df068e";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
   const [status, setStatus] = useState<Status>("idle");

   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setStatus("submitting");

      const form = event.currentTarget;
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      payload.access_key = WEB3FORMS_ACCESS_KEY;

      try {
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify(payload),
         });
         const result = await response.json();

         if (result.success) {
            setStatus("success");
            form.reset();
         } else {
            setStatus("error");
         }
      } catch {
         setStatus("error");
      }
   }

   if (status === "success") {
      return (
         <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-10 text-center">
            <CheckCircle2 className="h-10 w-10 text-success" />
            <h3 className="font-display text-lg">Message sent</h3>
            <p className="text-sm text-muted-foreground">
               Thanks for getting in touch. We reply within one working day.
            </p>
            <button
               type="button"
               onClick={() => setStatus("idle")}
               className="mt-2 text-sm font-semibold text-accent hover:underline"
            >
               Send another message
            </button>
         </div>
      );
   }

   return (
      <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 md:p-8">
         <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
         <input type="hidden" name="subject" value="New enquiry from the website contact form" />

         <div className="grid gap-5 md:grid-cols-2">
            <div>
               <label htmlFor="name" className="text-sm font-semibold">
                  Name
               </label>
               <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
               />
            </div>
            <div>
               <label htmlFor="phone" className="text-sm font-semibold">
                  Phone number
               </label>
               <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
               />
            </div>
         </div>

         <div className="mt-5">
            <label htmlFor="email" className="text-sm font-semibold">
               Email
            </label>
            <input
               id="email"
               name="email"
               type="email"
               required
               className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
         </div>

         <div className="mt-5">
            <label htmlFor="message" className="text-sm font-semibold">
               Message
            </label>
            <textarea
               id="message"
               name="message"
               required
               rows={5}
               className="mt-2 w-full resize-y rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
         </div>

         {status === "error" && (
            <p className="mt-4 flex items-center gap-2 text-sm text-destructive">
               <AlertCircle className="h-4 w-4 shrink-0" />
               Something went wrong sending your message. Please try again or call us directly.
            </p>
         )}

         <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90 disabled:opacity-60"
         >
            {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "submitting" ? "Sending…" : "Send message"}
         </button>
      </form>
   );
}
