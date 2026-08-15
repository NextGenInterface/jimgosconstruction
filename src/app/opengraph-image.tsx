import { ImageResponse } from "next/og";
import { COMPANY } from "@/src/data/site";

export const alt = `${COMPANY.name} | ${COMPANY.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
   return new ImageResponse(
      (
         <div
            style={{
               width: "100%",
               height: "100%",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               padding: "80px",
               backgroundColor: "#26221c",
               backgroundImage: "linear-gradient(135deg, #2c271f 0%, #1c1915 100%)",
               fontFamily: "sans-serif",
            }}
         >
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
               }}
            >
               <div
                  style={{
                     display: "flex",
                     width: 14,
                     height: 56,
                     backgroundColor: "#d0a251",
                  }}
               />
               <p style={{ margin: 0, fontSize: 30, letterSpacing: 4, color: "#d0a251", textTransform: "uppercase" }}>
                  Property Maintenance &amp; Construction
               </p>
            </div>
            <h1
               style={{
                  margin: "28px 0 0 0",
                  fontSize: 88,
                  fontWeight: 700,
                  color: "#f7f2ea",
                  lineHeight: 1.05,
                  maxWidth: 980,
               }}
            >
               {COMPANY.name}
            </h1>
            <p style={{ margin: "28px 0 0 0", fontSize: 34, color: "#c9beac", maxWidth: 920 }}>
               24/7 emergency call-out, reactive repairs, voids, compliance &amp; planned works across{" "}
               {COMPANY.areas}.
            </p>
         </div>
      ),
      { ...size }
   );
}
