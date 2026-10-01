import { siteConfig } from "@/data/site-config";

export function SchoolJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["School", "EducationalOrganization", "LocalBusiness"],
        "@id": `${siteConfig.url}/#school`,
        name: siteConfig.name,
        alternateName: [
          siteConfig.shortName,
          "Mega Mind Senior Secondary School",
          siteConfig.legalName,
        ],
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}${siteConfig.logo}`,
          width: 447,
          height: 447,
          caption: siteConfig.name,
        },
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        description: siteConfig.description,
        slogan: siteConfig.tagline,
        foundingDate: "2005",
        founder: {
          "@type": "Organization",
          name: siteConfig.legalName,
        },
        employee: {
          "@type": "Person",
          name: "Manisha Walia",
          jobTitle: "Principal",
          honorificSuffix: "M.Phil., M.A., B.Ed.",
        },
        telephone: siteConfig.phoneRaw,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        hasMap:
          "https://www.google.com/maps?q=Mega+Mind+School+Tosham+Bhiwani+VW8F%2B38H",
        sameAs: [
          siteConfig.socialLinks.instagram,
          siteConfig.socialLinks.facebook,
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "14:30",
          },
        ],
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Cheque, Bank Transfer, UPI",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#school`,
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
