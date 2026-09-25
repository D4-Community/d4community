import CodeOfConduct from "./coc";
import OrgSchema from "@/schema/org-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D4 Community Code of Conduct | Community Guidelines",

  description:
    "Read the D4 Community Code of Conduct and learn about the standards that help keep our developer community welcoming, respectful and inclusive.",

  keywords: [
    "D4 Community Code of Conduct",
    "D4 Code of Conduct",
    "D4 Community guidelines",
    "D4 Community rules",
    "D4 Community",
    "developer community code of conduct",
    "developer community guidelines",
    "tech community code of conduct",
    "developer event code of conduct",
    "community guidelines for developers",
    "inclusive developer community",
    "respectful developer community",
  ],

  alternates: {
    canonical: "https://www.d4community.com/code-of-conduct",
  },

  openGraph: {
    title: "D4 Community Code of Conduct | Community Guidelines",

    description:
      "Read the D4 Community Code of Conduct and learn about the standards that help keep our developer community welcoming, respectful and inclusive.",

    url: "https://www.d4community.com/code-of-conduct",
    siteName: "D4 Community",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",

    title: "D4 Community Code of Conduct | Community Guidelines",

    description:
      "Read the D4 Community Code of Conduct and learn about the standards that help keep our developer community welcoming, respectful and inclusive.",

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

      <CodeOfConduct />

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