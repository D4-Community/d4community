import PrivacyPolicyPage from "./privacy-policy";
import OrgSchema from "@/schema/org-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D4 Community Privacy Policy | Data & Privacy",
  description:
    "Read the D4 Community Privacy Policy to understand how we collect, use and protect personal information when you use our website and services.",

  alternates: {
    canonical: "https://www.d4community.com/privacy-policy",
  },

  openGraph: {
    title: "D4 Community Privacy Policy | Data & Privacy",
    description:
      "Read the D4 Community Privacy Policy to understand how we collect, use and protect personal information when you use our website and services.",
    url: "https://www.d4community.com/privacy-policy",
    siteName: "D4 Community",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "D4 Community Privacy Policy | Data & Privacy",
    description:
      "Learn how D4 Community handles and protects personal information.",
  },

  keywords: [
    "D4 Community Privacy Policy",
    "D4 Community privacy",
    "D4 Community data privacy",
    "D4 Community data protection",
    "D4 Community personal information",
    "D4 Community terms and policies",
  ],
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <PrivacyPolicyPage />
    </>
  );
}