// FAQ structured data is emitted by the FAQ section itself (components/sections/Faq.tsx), from the same answers visitors see.
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://scalebos.net/#organization",
      name: "ScaleBos",
      url: "https://scalebos.net",
      description:
        "Done-for-you operating systems for fitness, nutrition, and health coaching businesses.",
      founder: {
        "@type": "Person",
        name: "Przemek",
        jobTitle: "Founder",
      },
      areaServed: "EU",
      makesOffer: { "@id": "https://scalebos.net/#offer" },
    },
    {
      "@type": "Offer",
      "@id": "https://scalebos.net/#offer",
      name: "Done-for-you operating system",
      description:
        "A custom-built operating system so high-ticket coaching businesses can scale past €100k/mo while actually working less.",
      category: "Business consulting",
      offeredBy: { "@id": "https://scalebos.net/#organization" },
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
