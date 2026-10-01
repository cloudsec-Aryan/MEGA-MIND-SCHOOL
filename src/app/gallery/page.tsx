import type { Metadata } from "next";
import Image from "next/image";
import GalleryGrid from "@/components/GalleryGrid";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Campus Gallery & School Life | Photos & Events",
  description:
    "Explore photos and visual moments from Mega Mind Sr. Sec. School Tosham — sports day, cultural celebrations, smart classrooms, science labs, and student activities.",
  keywords: [
    "Mega Mind School photos",
    "School campus gallery Tosham",
    "Sports day Mega Mind School",
    "Annual function photos Tosham",
    "Classrooms and labs Bhiwani school",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Campus Gallery | Mega Mind Sr. Sec. School Tosham",
    description:
      "A photographic glimpse into life, learning, festivals, and celebrations at Mega Mind School.",
    url: `${siteConfig.url}/gallery`,
    images: [{ url: siteConfig.ogImage, width: 1024, height: 576, alt: "Mega Mind Campus Gallery" }],
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />

      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/campus/staff-celebration.jpeg"
            alt="Mega Mind School Tosham staff celebration and campus activity"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Campus Gallery</h1>
        <p>Festivals, classrooms, quizzes, and memorable moments from campus.</p>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <p className="section-label">Campus visuals</p>
            <h2 className="section-title">See Mega Mind in Action</h2>
            <p className="section-lead">
              Landscape and portrait photographs capturing student learning,
              science exhibitions, athletics, and cultural milestones.
            </p>
          </Reveal>
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
