import AboutPage from "@/features/about/page";
import { Metadata } from "next";
import OrgSchema from "@/schema/org-schema";

export const metadata: Metadata = {
  title: "About D4 Community | Discite, Develop, Debug, Deploy",

  description:
    "Learn about D4 Community, India's leading developer community built around the complete development loop: Discite, Develop, Debug and Deploy.",

  keywords: [
    // Brand
    "D4 Community",
    "About D4 Community",
    "D4",
    "Discite Develop Debug Deploy",
    "Discite-Develop-Debug-Deploy",

    // D4 philosophy
    "D4 development loop",
    "complete development loop",
    "developer learning and building",
    "learn build debug deploy",
    "developer growth community",

    // Developer community
    "developer community India",
    "India developer community",
    "developers community India",
    "software developer community",
    "tech community India",
    "programming community India",
    "AI developer community India",
    "open source community India",

    // Community activities
    "developer events India",
    "developer meetups India",
    "tech events India",
    "developer networking India",
    "hackathons India",
    "Hack-N-Win",
    "GenAI Conclave",
    "GenAI Conclave Chandigarh",
    "GenAI events India",

    // Chandigarh / Punjab
    "developer community Chandigarh",
    "developer community Punjab",
    "developer events Chandigarh",
    "tech community Chandigarh",
  ],

  alternates: {
    canonical: "https://www.d4community.com/about",
  },

  openGraph: {
    title: "About D4 Community | Discite, Develop, Debug, Deploy",

    description:
      "Learn about D4 Community, a developer community built around the complete development loop: Discite, Develop, Debug and Deploy.",

    url: "https://www.d4community.com/about",
    siteName: "D4 Community",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.d4community.com/_next/image?url=%2Fd4logo.webp&w=256&q=75",
        width: 256,
        height: 256,
        alt: "D4 Community Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About D4 Community | Discite, Develop, Debug, Deploy",

    description:
      "Discover D4 Community and the development loop behind its name: Discite, Develop, Debug and Deploy.",

    images: [
      "https://www.d4community.com/_next/image?url=%2Fd4logo.webp&w=256&q=75",
    ],
  },
};

export default function Page() {
  const internalLinks = [
    { name: "Home", href: "/" },
    { name: "About D4 Community", href: "/about" },
    { name: "D4 Community Events", href: "/events" },
    { name: "D4 Community Team", href: "/team" },
    { name: "Join D4 Community", href: "/join" },
    { name: "D4 Community Gallery", href: "/gallery" },
    { name: "D4 Community Reviews", href: "/reviews" },
    { name: "Twitter Reviews", href: "/twitter-reviews" },
    { name: "Contact D4 Community", href: "/contact" },
    { name: "Code of Conduct", href: "/code-of-conduct" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <>
      <OrgSchema />

      <AboutPage />

      <nav
        className="sr-only"
        aria-hidden="false"
        aria-label="D4 Community site navigation"
      >
        {internalLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>
    </>
  );
}