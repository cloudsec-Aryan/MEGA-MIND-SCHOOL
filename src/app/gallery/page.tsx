import type { Metadata } from "next";
import Image from "next/image";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Campus photos from Mega Mind Sr. Sec. School Tosham.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/campus/staff-celebration.jpeg"
            alt="Mega Mind School Tosham"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Gallery</h1>
        <p>Festivals, classrooms, quizzes, and quiet moments from campus.</p>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <p className="section-label">Campus visuals</p>
            <h2 className="section-title">See Mega Mind</h2>
            <p className="section-lead">
              Landscape and portrait photographs sit in their own frames, so
              every picture keeps its shape. Tap any image to enlarge.
            </p>
          </Reveal>
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
