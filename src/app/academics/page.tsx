import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { calendarEvents } from "@/data/academic-calendar";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "CBSE curriculum from Nursery to Class 12 at Mega Mind School Tosham — science, commerce, labs, and co-curriculars.",
};

export default function AcademicsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/library.jpg"
            alt="School library"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Academics</h1>
        <p>
          CBSE pathway from early years to senior secondary — rigorous, caring,
          and future-ready.
        </p>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <p className="section-label">Curriculum</p>
            <h2 className="section-title">Learning that builds for life</h2>
            <p className="section-lead">
              We follow the CBSE framework with strong foundations in languages,
              mathematics, sciences, and social studies — plus arts, sports, and
              value education.
            </p>
          </Reveal>
          <div className="academics-grid">
            {[
              {
                title: "Foundational & Primary",
                text: "Nursery to Class V — play-based curiosity, literacy, numeracy, and socio-emotional growth.",
                tags: ["Phonics", "Number Sense", "Art & Craft", "Activities"],
              },
              {
                title: "Middle School",
                text: "Classes VI–VIII — conceptual depth, lab exposure, and projects for board readiness.",
                tags: ["Science Labs", "IT Skills", "Library", "Clubs"],
              },
              {
                title: "Secondary",
                text: "Classes IX–X — focused CBSE board preparation with continuous assessment and support.",
                tags: ["Board Mentoring", "Enrichment", "Workshops", "Career"],
              },
              {
                title: "Senior Secondary",
                text: "Classes XI–XII — Science and Commerce streams guided by experienced PGTs.",
                tags: ["Science", "Commerce", "Practicals", "Guidance"],
              },
            ].map((s) => (
              <Reveal key={s.title}>
                <article className="stream">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sand-section">
        <div className="container">
          <Reveal>
            <p className="section-label">Session 2026–27</p>
            <h2 className="section-title">Academic calendar</h2>
            <p className="section-lead">
              Unit tests, the summer break, half-yearly exams, pre-boards, and
              the March annual result — as issued by the school.
            </p>
          </Reveal>
          <div className="home-cal">
            {calendarEvents
              .filter((event) => event.id !== "practicals")
              .slice(0, 4)
              .map((event) => (
                <Reveal key={event.id}>
                  <article className="home-cal-card" data-tone={event.tone}>
                    <time>{event.when}</time>
                    <h3>{event.title}</h3>
                    <p>{event.detail}</p>
                  </article>
                </Reveal>
              ))}
          </div>
          <Reveal>
            <div className="action-row">
              <Link className="btn btn-red" href="/academic-calendar">
                See the full year
              </Link>
              <a
                className="btn btn-outline"
                href="/academic-calendar/academic-calendar-2026-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official PDF
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="facilities">
        <div className="container">
          <Reveal>
            <p className="section-label">Beyond textbooks</p>
            <h2 className="section-title">Co-curricular & facilities</h2>
            <p className="section-lead">
              Exhibitions, sports day, annual fest, yoga, art & craft, and parent
              seminars keep school life vibrant.
            </p>
          </Reveal>
          <div className="facility-grid">
            {[
              { src: "/images/lab.jpg", title: "Laboratories", text: "Science and IT labs for practical learning." },
              { src: "/images/sports.jpg", title: "Sports & Fitness", text: "Indoor games, outdoor sports, yoga." },
              { src: "/images/events.jpg", title: "Events & Culture", text: "Annual day, festivals, workshops." },
            ].map((f) => (
              <Reveal key={f.title}>
                <article className="facility">
                  <Image src={f.src} alt={f.title} fill sizes="(max-width:900px) 100vw, 33vw" />
                  <div className="facility-body">
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="pill-row" style={{ marginTop: "2rem" }}>
              {["Library", "CCTV Security", "Transport", "Medical Check-ups", "Music & Dance"].map(
                (p) => (
                  <span className="pill" key={p}>
                    {p}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal>
            <h2>Ready to join Mega Mind?</h2>
            <p>Speak with admissions about class availability for 2026–27.</p>
            <div className="hero-actions">
              <Link className="btn btn-yellow" href="/admissions">
                Admission process
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Contact office
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
