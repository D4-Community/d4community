import TermsOfUse from "./terms";
import OrgSchema from "@/schema/org-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D4 Community Terms of Use | Terms & Conditions",

  description:
    "Read the D4 Community Terms of Use to understand the rules, responsibilities and conditions that apply when using our website and community services.",

  alternates: {
    canonical: "https://www.d4community.com/terms",
  },

  openGraph: {
    title: "D4 Community Terms of Use | Terms & Conditions",
    description:
      "Read the D4 Community Terms of Use to understand the rules, responsibilities and conditions that apply when using our website and community services.",
    url: "https://www.d4community.com/terms",
    siteName: "D4 Community",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "D4 Community Terms of Use | Terms & Conditions",
    description:
      "Read the terms and conditions that apply to using the D4 Community website and services.",
  },

  keywords: [
    "D4 Community Terms of Use",
    "D4 Community Terms and Conditions",
    "D4 Community terms",
    "D4 Community agreement",
    "D4 Community rules",
    "D4 Community website terms",
    "D4 Community policies",
  ],
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <TermsOfUse />
    </>
  );
}