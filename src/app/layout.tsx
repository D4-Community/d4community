// import type { Metadata } from "next";
// import "./globals.css";
// import { SeoKeywords } from "@/components/SeoKeywords";

// export const metadata: Metadata = {
//   title: "D4 Community",
//   description: "D4 Community is a place where students, developers, and creators learn, build, grow, and connect together.",
//   // Verification property added here
//   verification: {
//     google: "Wu3T8_LbSp7nhwyj_x2DH2UuUteYBjTld-zudlNfv_8",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="antialiased" suppressHydrationWarning>
//         <SeoKeywords />
//         {children}
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SeoKeywords } from "@/components/SeoKeywords";
import OrgSchema from "@/schema/org-schema";

export const metadata: Metadata = {
  title: "D4 Community | India's Leading Developer Community",

  description:
    "D4 Community is India's leading developer community for people who love to learn, build and share. Explore hackathons, GenAI Conclave and tech events.",

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  keywords: [
    "D4 Community",
    "developer community India",
    "India developer community",
    "developer events India",
    "tech community India",
    "developer events",
    "software developer community",
    "programming community India",
    "tech events India",
    "hackathons India",
    "Hack-N-Win",
    "GenAI Conclave Series",
    "GenAI Conclave",
    "GenAI Conclave Chandigarh",
    "GenAI events India",
    "AI events India",
    "AI events Chandigarh",
    "AI developer community India",
    "developer events Chandigarh",
    "tech events Chandigarh",
    "D4 Community events",
    "multi-city initiative",
    "multi-city developer community",
    "Multi-city GenAI Conclave",
    "Multi city Generative AI Community Series",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrgSchema />
      </head>

      <body className="antialiased" suppressHydrationWarning>
        <SeoKeywords />

        {children}
      </body>

      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}