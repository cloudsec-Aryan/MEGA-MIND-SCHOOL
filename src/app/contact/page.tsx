import type { Metadata } from "next";
import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact Us | School Phone, Address & Location Map",
  description:
    "Contact Mega Mind Sr. Sec. School, Tosham (Bhiwani). Located on Bhiwani Road near Goyal Petrol Pump. Call +91 81999 98813 or email megamindschooltosham@gmail.com.",
  keywords: [
    "Contact Mega Mind School",
    "Mega Mind School Tosham phone number",
    "Mega Mind School address",
    "CBSE school Tosham location",
    "Schools near Goyal Petrol Pump Tosham",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Mega Mind Sr. Sec. School Tosham | Location & Enquiry",
    description:
      "Reach out to Mega Mind School on Bhiwani Road, Tosham. Enquire about admissions, campus visits, or general office questions.",
    url: `${siteConfig.url}/contact`,
    images: [{ url: siteConfig.ogImage, width: 1024, height: 576, alt: "Contact Mega Mind School" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ]}
      />

      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/hero-campus.png"
            alt="Mega Mind Sr. Sec. School campus front gate and building in Tosham"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Contact Us</h1>
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
                  <strong>Primary Phone</strong>
                  <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
                </li>
                <li>
                  <strong>Alternate Phone</strong>
                  <a href={`tel:${siteConfig.alternatePhoneRaw}`}>{siteConfig.alternatePhone}</a>
                </li>
                <li>
                  <strong>Email</strong>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li>
                  <strong>Office hours</strong>
                  <span>Monday–Saturday · 8:00 AM – 2:30 PM</span>
                </li>
                <li>
                  <strong>Affiliation</strong>
                  <span>CBSE Aff. No. 530773 · School Code 40747</span>
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
                title="Mega Mind School Tosham Google Map Location"
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
