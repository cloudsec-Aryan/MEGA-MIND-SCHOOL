"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setHide(true), 1700);
    return () => window.clearTimeout(id);
  }, []);

  if (hide) return null;

  return (
    <div className="preloader" role="status" aria-label="Loading">
      <div className="preloader-inner">
        <div className="preloader-seal">
          <span className="preloader-ring" aria-hidden="true" />
          <Image
            className="preloader-logo"
            src="/images/logo-circle.png"
            alt=""
            width={148}
            height={148}
            priority
          />
        </div>
        <p className="preloader-kicker">CBSE Affiliated · Tosham</p>
        <p className="preloader-title">Mega Mind Sr. Sec. School</p>
        <p className="preloader-motto">Work is Worship</p>
        <div className="preloader-bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
