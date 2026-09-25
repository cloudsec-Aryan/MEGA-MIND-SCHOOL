"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/gallery", label: "Gallery" },
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link className="brand" href="/">
          <Image
            src="/images/logo-official.png"
            alt="Mega Mind Sr. Sec. School logo"
            width={58}
            height={58}
            priority
          />
          <div className="brand-text">
            <strong>Mega Mind</strong>
            <span>Sr. Sec. School · Tosham</span>
          </div>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Open menu"
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
