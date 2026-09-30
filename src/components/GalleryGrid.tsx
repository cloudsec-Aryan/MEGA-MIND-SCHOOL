"use client";

import Image from "next/image";
import { useState } from "react";
import {
  landscapePhotos,
  portraitPhotos,
  type CampusPhoto,
} from "@/data/campus-gallery";

function Shot({
  photo,
  onOpen,
}: {
  photo: CampusPhoto;
  onOpen: (photo: CampusPhoto) => void;
}) {
  return (
    <button
      type="button"
      className="shot"
      onClick={() => onOpen(photo)}
      aria-label={`${photo.title}. ${photo.line}`}
    >
      <span className="shot-frame">
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          sizes={
            photo.orientation === "portrait"
              ? "(max-width: 700px) 50vw, 25vw"
              : "(max-width: 700px) 100vw, 33vw"
          }
          style={{ objectFit: "cover" }}
        />
      </span>
      <span className="shot-meta">
        <strong>{photo.title}</strong>
        <span>{photo.line}</span>
      </span>
    </button>
  );
}

export default function GalleryGrid() {
  const [active, setActive] = useState<CampusPhoto | null>(null);

  return (
    <>
      <div className="gallery-block">
        <div className="gallery-block-head">
          <p className="section-label">Wide frames</p>
          <h3>Landscape</h3>
        </div>
        <div className="gallery-landscape">
          {landscapePhotos.map((photo) => (
            <Shot key={photo.src} photo={photo} onOpen={setActive} />
          ))}
        </div>
      </div>

      <div className="gallery-block">
        <div className="gallery-block-head">
          <p className="section-label">Tall frames</p>
          <h3>Portrait</h3>
        </div>
        <div className="gallery-portrait">
          {portraitPhotos.map((photo) => (
            <Shot key={photo.src} photo={photo} onOpen={setActive} />
          ))}
        </div>
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
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.title}
              width={active.orientation === "portrait" ? 900 : 1400}
              height={active.orientation === "portrait" ? 1200 : 900}
              style={{
                width: "auto",
                height: "auto",
                maxHeight: "78vh",
                maxWidth: "90vw",
                objectFit: "contain",
              }}
            />
            <figcaption>
              <strong>{active.title}</strong>
              <span>{active.line}</span>
            </figcaption>
          </figure>
        )}
      </div>
    </>
  );
}
