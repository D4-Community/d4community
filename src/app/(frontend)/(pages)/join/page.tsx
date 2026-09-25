import JoinCommunityPage from "./join";
import OrgSchema from "@/schema/org-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join D4 Community | Learn, Build & Connect",
  description:
    "Join D4 Community to learn, build, collaborate and connect with developers through events, hackathons, workshops and community activities.",

  alternates: {
    canonical: "https://www.d4community.com/join",
  },

  openGraph: {
    title: "Join D4 Community | Learn, Build & Connect",
    description:
      "Join D4 Community to learn, build, collaborate and connect with developers through events, hackathons, workshops and community activities.",
    url: "https://www.d4community.com/join",
    siteName: "D4 Community",
    type: "website",
    images: [
      {
        url: "https://www.d4community.com/d4logo.webp",
        width: 1200,
        height: 630,
        alt: "Join D4 Community",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Join D4 Community | Learn, Build & Connect",
    description:
      "Connect with developers, join tech events, build projects and learn with D4 Community.",
    images: ["https://www.d4community.com/d4logo.webp"],
  },

  keywords: [
    "Join D4 Community",
    "D4 Community",
    "developer community India",
    "developer community Chandigarh",
    "tech community India",
    "programming community India",
    "software developer community",
    "AI developer community India",
    "developer networking India",
    "developer events India",
    "tech meetups India",
    "coding workshops India",
    "hackathons India",
    "D4 Community events",
    "D4 Community membership",
  ],
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <JoinCommunityPage />
    </>
  );
}