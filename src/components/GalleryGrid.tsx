"use client";

import Image from "next/image";
import { useState } from "react";

/** Real Mega Mind School Tosham photos */
const images = [
  { src: "/images/gallery/school-building.jpg", alt: "Mega Mind School building, Tosham" },
  { src: "/images/gallery/assembly-hall.jpg", alt: "Students in assembly hall" },
  { src: "/images/gallery/student-projects.jpg", alt: "Students with academic projects" },
  { src: "/images/gallery/independence-day.jpg", alt: "Independence Day celebrations" },
  { src: "/images/gallery/cultural-event.jpg", alt: "Cultural programme at school" },
  { src: "/images/gallery/school-logo-wall.jpg", alt: "School logo" },
  { src: "/images/banner-school.jpg", alt: "School front facade" },
];

export default function GalleryGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<string | null>(null);
  const list = limit ? images.slice(0, limit) : images;

  return (
    <>
      <div className="gallery-grid">
        {list.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(img.src)}
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </button>
        ))}
      </div>

      <div
        className={`lightbox${active ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        onClick={() => setActive(null)}
      >
        <button
          className="lightbox-close"
          type="button"
          aria-label="Close"
          onClick={() => setActive(null)}
        >
          ×
        </button>
        {active && (
          <Image
            src={active}
            alt="Gallery preview"
            width={1400}
            height={900}
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </>
  );
}
