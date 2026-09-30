import Image from "next/image";
import { featuredPhotos, type CampusPhoto } from "@/data/campus-gallery";

function ReelCard({
  photo,
  hidden,
}: {
  photo: CampusPhoto;
  hidden?: boolean;
}) {
  return (
    <figure className="reel-card" aria-hidden={hidden || undefined}>
      <Image
        src={photo.src}
        alt={`${photo.title}. ${photo.line}`}
        fill
        sizes="340px"
        style={{ objectFit: "cover" }}
      />
      <figcaption>
        <strong>{photo.title}</strong>
        <span>{photo.line}</span>
      </figcaption>
    </figure>
  );
}

export default function CampusReel() {
  const loop = [...featuredPhotos, ...featuredPhotos];

  return (
    <div className="campus-reel" aria-label="Campus highlights">
      <div className="campus-track">
        {loop.map((photo, index) => (
          <ReelCard
            key={`${photo.src}-${index}`}
            photo={photo}
            hidden={index >= featuredPhotos.length}
          />
        ))}
      </div>
    </div>
  );
}
