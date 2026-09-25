import ContactPage from "@/features/contact/page";
import OrgSchema from "@/schema/org-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact D4 Community | Get in Touch",

  description:
    "Have a question, collaboration idea or event inquiry? Get in touch with the D4 Community team and connect with India's developer community.",

  keywords: [
    // Brand
    "D4 Community",
    "Contact D4 Community",
    "D4 Community contact",
    "D4 Community team",
    "D4 Community organizers",
    "D4 Community events",
    "D4 Community India",
    "India developer community",
    "India",
    "developer community India",
    "India tech community",
    "developer community organizers India",

    // Contact intent
    "contact developer community India",
    "developer community contact",
    "tech community contact India",
    "developer community support",
    "D4 Community support",
    "D4 Community enquiry",
    "D4 Community inquiry",

    // Collaboration
    "D4 Community collaboration",
    "D4 Community partnership",
    "D4 Community sponsorship",
    "D4 Community event collaboration",
    "D4 Community organizers",

    // Events
    "D4 Community events",
    "developer events India",
    "developer events Chandigarh",
    "tech events Chandigarh",
    "developer community Chandigarh",
    "developer community Punjab",
  ],

  alternates: {
    canonical: "https://www.d4community.com/contact",
  },

  openGraph: {
    title: "Contact D4 Community | Get in Touch",

    description:
      "Have a question, collaboration idea or event inquiry? Get in touch with the D4 Community team.",

    url: "https://www.d4community.com/contact",
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

    title: "Contact D4 Community | Get in Touch",

    description:
      "Have a question, collaboration idea or event inquiry? Get in touch with the D4 Community team.",

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

      <ContactPage />

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