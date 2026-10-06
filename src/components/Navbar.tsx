"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site-config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/academic-calendar", label: "Calendar" },
  { href: "/gallery", label: "Gallery" },
  { href: "/mandatory-disclosures", label: "Disclosures" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="topbar">
        <div className="topbar-inner">
          <p className="topbar-meta">
            <span>Work is Worship</span>
            <span className="topbar-dot" aria-hidden="true" />
            <span>CBSE Aff. {siteConfig.cbseAffiliationNo}</span>
            <span className="topbar-dot topbar-hide" aria-hidden="true" />
            <span className="topbar-hide">School Code {siteConfig.schoolCode}</span>
          </p>
          <p className="topbar-links">
            <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
            <a className="topbar-mail" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>

      <div className="nav-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">
            <Image
              src="/images/logo-circle.png"
              alt="Mega Mind Sr. Sec. School logo"
              width={64}
              height={64}
              priority
            />
          </span>
          <span className="brand-text">
            <strong>Mega Mind</strong>
            <span>Sr. Sec. School · Tosham</span>
          </span>
        </Link>

        <button
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link
            className={`nav-cta${pathname === "/admissions" ? " active" : ""}`}
            href="/admissions"
          >
            Admissions
          </Link>
        </nav>
      </div>
    </header>
  );
}
