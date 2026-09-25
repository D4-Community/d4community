import D4ContactForm from "./connect";
import OrgSchema from "@/schema/org-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact D4 Community | Get in Touch",

  description:
    "Have a question, collaboration idea or event inquiry? Get in touch with the D4 Community team and connect with India's developer community.",

  keywords: [
    "Contact D4 Community",
    "D4 Community contact",
    "D4 Community",
    "contact developer community India",
    "developer community India",
    "D4 Community team",
    "D4 Community collaboration",
    "D4 Community events",
    "D4 Community Chandigarh",
    "developer community Chandigarh",
    "tech community Chandigarh",
    "D4 Community partnership",
    "D4 Community event inquiry",
    "D4 Community organizers",
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

export default function ContactPage() {
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

      <D4ContactForm />

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