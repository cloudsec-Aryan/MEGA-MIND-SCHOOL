import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Mandatory Disclosures",
  description:
    "CBSE mandatory public disclosures for Mega Mind Sr. Sec. School, Tosham — building safety, fire safety, hygiene, and land certificates.",
};

const documents = [
  {
    title: "Building Safety",
    description:
      "Structural safety certificate confirming the school building is fit for use.",
    href: "/mandatory-disclosures/building-safety.pdf",
    download: "Building-Safety.pdf",
    tag: "Certificate",
  },
  {
    title: "Fire Safety",
    description:
      "Fire safety certificate issued for the campus and its occupied buildings.",
    href: "/mandatory-disclosures/fire-safety.pdf",
    download: "Fire-Safety.pdf",
    tag: "Certificate",
  },
  {
    title: "Health & Hygiene",
    description:
      "Sanitary and hygiene certificate for drinking water and campus upkeep.",
    href: "/mandatory-disclosures/hygiene.pdf",
    download: "Health-and-Hygiene.pdf",
    tag: "Certificate",
  },
  {
    title: "Land",
    description:
      "Land ownership document for the school site on Bhiwani Road, Tosham.",
    href: "/mandatory-disclosures/land.pdf",
    download: "Land.pdf",
    tag: "Document",
  },
];

export default function MandatoryDisclosuresPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/campus.jpg"
            alt="Mega Mind School campus"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Mandatory Disclosures</h1>
        <p>
          Official certificates and public documents, available to view or
          download.
        </p>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <p className="section-label">Public documents</p>
            <h2 className="section-title">Certificates on record</h2>
            <p className="section-lead">
              These documents are published for parents, guardians, and the
              CBSE public-disclosure requirement. Open a file in the browser,
              or save a copy.
            </p>
          </Reveal>

          <div className="disclosure-grid">
            {documents.map((doc) => (
              <Reveal key={doc.href}>
                <article className="disclosure-card">
                  <div className="disclosure-top">
                    <span className="disclosure-icon" aria-hidden="true">
                      <svg viewBox="0 0 32 32" width="28" height="28">
                        <path
                          d="M8 4.5h11.2L24 9.3V27.5H8V4.5Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 4.8V9.6h4.8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 15.5h8M12 19.5h8M12 23.5h5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span className="disclosure-tag">{doc.tag}</span>
                  </div>
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                  <div className="disclosure-actions">
                    <a
                      className="btn btn-red"
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                    <a
                      className="btn btn-outline"
                      href={doc.href}
                      download={doc.download}
                    >
                      Download
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
