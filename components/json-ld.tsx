export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Shop Writer Assist",
        url: "https://shopwriterasst.com",
        email: "contact@shopwriterasst.com",
        description:
          "Digital assistant for service writers in auto repair shops and dealership service departments.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Shop Writer Assist",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://shopwriterasst.com",
        description:
          "AI sidekick that helps service writers draft repair orders, explain work, and hand off clean notes to the shop.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Waitlist and early access. Example pricing on the site is placeholder copy.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
