import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "CBSE Mandatory Public Disclosures | Affiliation No. 530773",
  description:
    "Official CBSE mandatory public disclosures for Mega Mind Sr. Sec. School, Tosham (Bhiwani). Building safety, fire safety, health & sanitation, and land certificates.",
  keywords: [
    "CBSE mandatory disclosure Tosham",
    "Mega Mind School affiliation certificate",
    "Building safety certificate Mega Mind School",
    "Fire safety certificate Tosham school",
    "CBSE Affiliation 530773 documents",
  ],
  alternates: {
    canonical: "/mandatory-disclosures",
  },
  openGraph: {
    title: "CBSE Mandatory Disclosures | Mega Mind Sr. Sec. School Tosham",
    description:
      "Public compliance certificates and regulatory documents as mandated by CBSE New Delhi.",
    url: `${siteConfig.url}/mandatory-disclosures`,
    images: [{ url: siteConfig.ogImage, width: 1024, height: 576, alt: "Mega Mind Mandatory Disclosures" }],
  },
};

const particulars: { label: string; value: string; href?: string }[] = [
  { label: "Name of the school", value: siteConfig.name },
  { label: "Affiliation number", value: siteConfig.cbseAffiliationNo },
  { label: "School code", value: siteConfig.schoolCode },
  { label: "Principal", value: siteConfig.principal },
  { label: "Year of establishment", value: String(siteConfig.establishedYear) },
  { label: "Complete address", value: siteConfig.address.formatted },
  { label: "Phone", value: `${siteConfig.phone}, ${siteConfig.alternatePhone}`, href: `tel:${siteConfig.phoneRaw}` },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
];

const documents = [
  {
    title: "Building Safety",
    description: "Structural safety certificate confirming the school building is fit for use.",
    href: "/mandatory-disclosures/building-safety.pdf",
    download: "Building-Safety.pdf",
  },
  {
    title: "Fire Safety",
    description: "Fire safety certificate issued for the campus and its occupied buildings.",
    href: "/mandatory-disclosures/fire-safety.pdf",
    download: "Fire-Safety.pdf",
  },
  {
    title: "Health & Hygiene",
    description: "Sanitary and hygiene certificate for drinking water and campus upkeep.",
    href: "/mandatory-disclosures/hygiene.pdf",
    download: "Health-and-Hygiene.pdf",
  },
  {
    title: "Land",
    description: "Land ownership document for the school site on Bhiwani Road, Tosham.",
    href: "/mandatory-disclosures/land.pdf",
    download: "Land.pdf",
  },
];

export default function MandatoryDisclosuresPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Mandatory Disclosures", path: "/mandatory-disclosures" },
        ]}
      />
      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/campus.jpg"
            alt="Mega Mind School Tosham campus building and facilities"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Mandatory Disclosures</h1>
        <p>
          Official school particulars and public certificates, published for
          parents and the CBSE disclosure requirement.
        </p>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <p className="section-label">General information</p>
            <h2 className="section-title">School particulars</h2>
            <p className="section-lead">
              Affiliation No. {siteConfig.cbseAffiliationNo} · School Code{" "}
              {siteConfig.schoolCode}
            </p>
          </Reveal>

          <Reveal>
            <div className="table-scroll">
              <table className="data-table">
                <colgroup>
                  <col className="col-sno" />
                  <col className="col-label" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">S. No.</th>
                    <th scope="col">Information</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {particulars.map((row, index) => (
                    <tr key={row.label}>
                      <td className="sno">{String(index + 1).padStart(2, "0")}</td>
                      <td className="info-label">{row.label}</td>
                      <td>
                        {row.href ? <a href={row.href}>{row.value}</a> : row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal>
            <p className="section-label table-section-gap">Documents</p>
            <h2 className="section-title">Certificates on record</h2>
            <p className="section-lead">
              Open a file in the browser, or save a copy. These are the public
              compliance documents held by the school.
            </p>
          </Reveal>

          <Reveal>
            <div className="table-scroll">
              <table className="data-table docs-table">
                <thead>
                  <tr>
                    <th scope="col">S. No.</th>
                    <th scope="col">Document</th>
                    <th scope="col">Details</th>
                    <th scope="col">View</th>
                    <th scope="col">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, index) => (
                    <tr key={doc.href}>
                      <td className="sno">{String(index + 1).padStart(2, "0")}</td>
                      <td>
                        <span className="doc-name">
                          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                            <path
                              d="M7 3.5h7.2L19 8.2V20.5H7V3.5Z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 3.8V8.4h4.6M10 12.5h6M10 16h6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {doc.title}
                        </span>
                      </td>
                      <td>{doc.description}</td>
                      <td>
                        <a
                          className="table-link"
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      </td>
                      <td>
                        <a className="table-link is-solid" href={doc.href} download={doc.download}>
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
