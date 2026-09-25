import type { Metadata } from "next";
import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mega Mind Sr. Sec. School Tosham — phone 81999 98813, near Goyal Petrol Pump.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/hero-campus.png"
            alt="Mega Mind School campus"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Contact us</h1>
        <p>
          Near Goyal Petrol Pump on Tosham–Bhiwani Road. Reach us during school
          hours.
        </p>
      </section>

      <section>
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <p className="section-label">Reach the office</p>
              <h2 className="section-title">School contacts</h2>
              <ul className="contact-list">
                <li>
                  <strong>Address</strong>
                  <span>
                    Mega Mind Sr. Sec. School, Bhiwani Road, near Goyal Petrol
                    Pump, Maan Colony, Tosham Rural, Bhiwani, Haryana 127040
                  </span>
                </li>
                <li>
                  <strong>Phone</strong>
                  <a href="tel:+918199998813">+91 81999 98813</a>
                </li>
                <li>
                  <strong>Alternate</strong>
                  <a href="tel:+917247271212">+91 72472 71212</a>
                </li>
                <li>
                  <strong>Email</strong>
                  <a href="mailto:megamindschooltosham@gmail.com">
                    megamindschooltosham@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Office hours</strong>
                  <span>Monday–Saturday · typically 9:00 AM onwards</span>
                </li>
                <li>
                  <strong>Motto</strong>
                  <span>Work is Worship</span>
                </li>
              </ul>
            </Reveal>
            <Reveal>
              <EnquiryForm title="Write to us" showClass={false} />
            </Reveal>
          </div>

          <Reveal>
            <div className="map-embed">
              <iframe
                title="Mega Mind School Tosham map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Mega+Mind+School+Tosham+Bhiwani+VW8F%2B38H&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
