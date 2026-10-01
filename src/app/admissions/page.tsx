import type { Metadata } from "next";
import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import FaqAccordion from "@/components/FaqAccordion";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "School Admissions 2026–27 | Nursery to 12th | Apply Now",
  description:
    "Admission open for academic session 2026–27 at Mega Mind Sr. Sec. School, Tosham (Bhiwani). Nursery to Class XII (Science & Commerce). Enquire online or call +91 81999 98813.",
  keywords: [
    "Mega Mind school admission",
    "School admission in Tosham 2026",
    "CBSE school admission Bhiwani",
    "Nursery admission Tosham",
    "Class 11 admission Science Commerce Tosham",
    "Top school admission Haryana",
  ],
  alternates: {
    canonical: "/admissions",
  },
  openGraph: {
    title: "School Admissions 2026–27 | Mega Mind Sr. Sec. School Tosham",
    description:
      "Join Mega Mind School Tosham. CBSE-affiliated co-ed excellence from Nursery to Class 12. Submit your admission enquiry today.",
    url: `${siteConfig.url}/admissions`,
    images: [{ url: siteConfig.ogImage, width: 1024, height: 576, alt: "Mega Mind School Admissions" }],
  },
};

const admissionFaqs = [
  {
    question: "How do I apply for admission at Mega Mind Sr. Sec. School Tosham?",
    answer:
      "Parents can submit an online enquiry form on our website or visit the administrative office on Bhiwani Road, Tosham. Following a brief interactive session and document verification, the admission is finalized.",
  },
  {
    question: "Which classes are open for admission for the 2026–27 academic session?",
    answer:
      "Admissions are open for early childhood education (Nursery, LKG, UKG), Primary school (Classes 1–5), Middle school (Classes 6–8), Secondary (Classes 9–10), and Senior Secondary (Classes 11–12 Science and Commerce).",
  },
  {
    question: "Is Mega Mind School affiliated with CBSE?",
    answer:
      "Yes. Mega Mind Sr. Sec. School is an officially recognized senior secondary school affiliated with the Central Board of Secondary Education (CBSE), New Delhi under Affiliation No. 530773 and School Code 40747.",
  },
  {
    question: "What documents are required for registration and admission?",
    answer:
      "The key documents include: Child's original Birth Certificate, Transfer Certificate (TC) from the previous school (for Class 2 and above), report card of previous examination, Aadhaar card copies of child and parents, and recent passport-size photographs.",
  },
  {
    question: "Does the school provide safe transport facilities?",
    answer:
      "Yes, Mega Mind School provides dedicated, GPS-equipped bus and transport routes connecting Tosham town and neighbouring villages across Bhiwani district.",
  },
  {
    question: "What streams are offered in Class 11 and 12?",
    answer:
      "We offer Senior Secondary curriculum in Science (Medical with Biology and Non-Medical with Mathematics) and Commerce streams with well-equipped physics, chemistry, biology, and computer science laboratories.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Admissions", path: "/admissions" },
        ]}
      />

      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/learning.jpg"
            alt="Students engaging in academic learning at Mega Mind School Tosham"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Admissions 2026–27</h1>
        <p>Begin your child’s educational journey at Mega Mind School, Tosham.</p>
      </section>

      <section>
        <div className="container contact-grid">
          <Reveal>
            <p className="section-label">How to apply</p>
            <h2 className="section-title">Simple steps to enrol</h2>
            <ul className="timeline">
              <li>
                <strong>1. Enquire</strong>
                <p>
                  Call +91 81999 98813 or submit the online form with your preferred class.
                </p>
              </li>
              <li>
                <strong>2. Visit campus</strong>
                <p>
                  Tour the school campus near Goyal Petrol Pump on Bhiwani Road and meet our coordinators.
                </p>
              </li>
              <li>
                <strong>3. Submit documents</strong>
                <p>
                  Birth certificate, previous TC (if applicable), photographs, and address proof.
                </p>
              </li>
              <li>
                <strong>4. Confirm seat</strong>
                <p>
                  Complete enrollment and fee formalities at the administrative desk.
                </p>
              </li>
            </ul>
            <p
              style={{
                marginTop: "1.5rem",
                color: "var(--ink-soft)",
                fontSize: "0.95rem",
              }}
            >
              Admissions typically open November–February for the April–March session. Contact the office for the current fee structure.
            </p>
          </Reveal>
          <Reveal>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <FaqAccordion
        title="Admissions & Campus FAQ"
        subtitle="Frequently asked questions about applying to Mega Mind Sr. Sec. School Tosham."
        items={admissionFaqs}
      />
    </>
  );
}
