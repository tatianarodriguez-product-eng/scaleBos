import { faqs } from "@/lib/content";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://scalebos.com/#organization",
      name: "ScaleBos",
      url: "https://scalebos.com",
      description:
        "Done-for-you operating systems for fitness, nutrition, and health coaching businesses.",
      founder: {
        "@type": "Person",
        name: "Przemek",
        jobTitle: "Founder",
      },
      areaServed: "EU",
      makesOffer: { "@id": "https://scalebos.com/#offer" },
    },
    {
      "@type": "Offer",
      "@id": "https://scalebos.com/#offer",
      name: "Done-for-you operating system",
      description:
        "A custom-built operating system so high-ticket coaching businesses can scale past €100k/mo while actually working less.",
      category: "Business consulting",
      offeredBy: { "@id": "https://scalebos.com/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://scalebos.com/#faq",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
