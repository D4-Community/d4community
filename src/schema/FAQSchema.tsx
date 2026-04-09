import { faqRegistry, FAQPageType } from "./faq-registry";

interface FAQSchemaProps {
  page: FAQPageType;
}

export default function FAQSchema({ page }: FAQSchemaProps) {
  const questions = faqRegistry[page];
  if (!questions || questions.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      id={`faq-schema-${page}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}