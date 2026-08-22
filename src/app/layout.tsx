import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/site/header";
import { Footer } from "../components/site/footer";
import { WhatsAppButton } from "../components/site/whatsapp-button";
import { COMPANY, SITE_URL } from "../data/site";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

const DEFAULT_DESCRIPTION =
   "Responsive property maintenance and construction contractor for housing associations, local authorities, managing agents and commercial clients across London, Essex and the South East. 24/7 emergency call-out, reactive repairs, voids, compliance and planned works.";

export const metadata: Metadata = {
   metadataBase: new URL(SITE_URL),
   title: {
      default: `${COMPANY.name} | ${COMPANY.tagline}`,
      template: `%s | ${COMPANY.name}`,
   },
   description: DEFAULT_DESCRIPTION,
   keywords: [
      "property maintenance London",
      "responsive repairs contractor",
      "housing maintenance contractor",
      "emergency plumber London",
      "emergency electrician London",
      "gas safety certificates London",
      "EICR London",
      "commercial maintenance London",
   ],
   authors: [{ name: COMPANY.name }],
   creator: COMPANY.name,
   publisher: COMPANY.name,
   formatDetection: {
      email: false,
      address: false,
      telephone: true,
   },
   alternates: {
      canonical: "/",
   },
   openGraph: {
      type: "website",
      locale: "en_GB",
      url: SITE_URL,
      siteName: COMPANY.name,
      title: `${COMPANY.name} | ${COMPANY.tagline}`,
      description: DEFAULT_DESCRIPTION,
   },
   twitter: {
      card: "summary_large_image",
      title: `${COMPANY.name} | ${COMPANY.tagline}`,
      description: DEFAULT_DESCRIPTION,
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-image-preview": "large",
         "max-snippet": -1,
         "max-video-preview": -1,
      },
   },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
   return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
         <body className="min-h-full flex flex-col">
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
            <script
               type="text/javascript"
               id="hs-script-loader"
               async
               defer
               src="//js-eu1.hs-scripts.com/148966065.js"
            ></script>
         </body>
      </html>
   );
}
