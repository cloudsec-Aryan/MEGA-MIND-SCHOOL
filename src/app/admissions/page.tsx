import type { Metadata } from "next";
import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions enquiry for Mega Mind Sr. Sec. School Tosham — Nursery to Class 12, CBSE.",
};

export default function AdmissionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/learning.jpg"
            alt="Students learning"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Admissions</h1>
        <p>Begin your child’s journey at Mega Mind for 2026–27.</p>
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
                  Call +91 81999 98813 or submit the form with preferred class.
                </p>
              </li>
              <li>
                <strong>2. Visit campus</strong>
                <p>
                  Tour the school near Goyal Petrol Pump and meet coordinators.
                </p>
              </li>
              <li>
                <strong>3. Submit documents</strong>
                <p>
                  Birth certificate, previous TC (if any), photos, and address
                  proof as advised.
                </p>
              </li>
              <li>
                <strong>4. Confirm seat</strong>
                <p>
                  Complete fee formalities as shared by the accounts desk for
                  the session.
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
              Admissions typically open November–February for the April–March
              session. Contact the office for current fee structure.
            </p>
          </Reveal>
          <Reveal>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
