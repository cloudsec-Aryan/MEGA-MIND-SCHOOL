import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/images/logo-official.png"
              alt="Mega Mind Sr. Sec. School Tosham Logo"
              width={64}
              height={64}
            />
            <div>
              <h3>Mega Mind Sr. Sec. School</h3>
              <p>
                Bhiwani Road, near Goyal Petrol Pump, Tosham, Bhiwani, Haryana
                127040
              </p>
            </div>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/about">About</Link>
            <Link href="/academics">Academics</Link>
            <Link href="/academic-calendar">Academic Calendar</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/mandatory-disclosures">Mandatory Disclosures</Link>
            <Link href="/admissions">Admissions</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="tel:+918199998813">+91 81999 98813</a>
            <a href="mailto:megamindschooltosham@gmail.com">
              megamindschooltosham@gmail.com
            </a>
            <a
              href="https://www.instagram.com/megamindschooltosham/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/megamindschooltosham/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Mega Mind Sr. Sec. School, Tosham ·
            CBSE Aff. No. 530773
          </span>
          <span>Work is Worship · Mahesh Mega Mind Shiksha Samiti</span>
        </div>
      </div>
    </footer>
  );
}
