"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setHide(true), 1600);
    return () => window.clearTimeout(id);
  }, []);

  if (hide) return null;

  return (
    <div className="preloader" role="status" aria-label="Loading">
      <div className="preloader-inner">
        <Image
          className="preloader-logo"
          src="/images/logo-official.png"
          alt=""
          width={140}
          height={140}
          priority
        />
        <p className="preloader-title">Mega Mind Sr. Sec. School</p>
        <p className="preloader-motto">Work is Worship</p>
        <div className="preloader-bar" aria-hidden>
          <span />
        </div>
      </div>
    </div>
  );
}
