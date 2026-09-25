import { HomePage } from "@/features/home/page";
import OrgSchema from "@/schema/org-schema";
import { FAQSchema } from "@/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D4 Community | India's Leading Developer Community",

  description:
    "D4 Community is India's leading developer community for people who love to learn, build and share. Explore hackathons, GenAI Conclave and tech events.",

  keywords: [
    // Brand
    "D4 Community",
    "D4",
    "Discite Develop Debug Deploy",
    "Discite-Develop-Debug-Deploy",

    // Developer community
    "developer community India",
    "India developer community",
    "developer community",
    "developers community India",
    "software developer community",
    "tech community India",
    "programming community India",
    "AI developer community India",
    "open source community India",

    // Learning & networking
    "developer events India",
    "tech events India",
    "developer meetups India",
    "developer networking India",
    "tech meetups India",
    "learning community for developers",
    "learn and build community",

    // Hackathons
    "hackathons India",
    "developer hackathons India",
    "in-person hackathons India",
    "Hack-N-Win",
    "Hack-N-Win Hackathon",
    "InnoSprint Hackathon",

    // GenAI & AI
    "GenAI Conclave",
    "GenAI Conclave Series",
    "GenAI Conclave Chandigarh",
    "GenAI events India",
    "AI events India",
    "AI events Chandigarh",
    "Generative AI events India",
    "AI community India",
    "GenAI Conclave Blr",

    // Chandigarh / North India
    "developer community Chandigarh",
    "developer events Chandigarh",
    "tech community Chandigarh",
    "tech events Chandigarh",
    "developer community Punjab",
    "developer community North India",

    // Technology
    "software development",
    "open source",
    "React",
    "DevOps",
    "Cloud",
    "Android",
    "iOS",
    "Google for Developers",
    "Google Developer Groups",
    "MongoDB User Group",
  ],

  alternates: {
    canonical: "https://www.d4community.com/",
  },

  openGraph: {
    title: "D4 Community | India's Leading Developer Community",

    description:
      "D4 Community is India's leading developer community for people who love to learn, build and share. Explore hackathons, GenAI Conclave and tech events.",

    url: "https://www.d4community.com/",
    siteName: "D4 Community",

    images: [
      {
        url: "https://www.d4community.com/_next/image?url=%2Fd4logo.webp&w=256&q=75",
        width: 256,
        height: 256,
        alt: "D4 Community Logo",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "D4 Community | India's Leading Developer Community",

    description:
      "D4 Community brings developers and tech enthusiasts together to learn, build and share through events, hackathons, GenAI Conclave and more.",

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

      <FAQSchema page={["join-faq", "faq"]} />

      <HomePage />

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