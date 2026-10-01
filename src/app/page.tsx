import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CampusReel from "@/components/CampusReel";
import Reveal from "@/components/Reveal";
import { calendarEvents } from "@/data/academic-calendar";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Mega Mind Sr. Sec. School Tosham | Best CBSE School in Bhiwani",
  description:
    "Mega Mind Sr. Sec. School, Tosham (Bhiwani, Haryana) is a premier CBSE-affiliated co-educational senior secondary school (Affiliation No. 530773, School Code 40747). Admissions open for 2026–27 from Nursery to Class 12.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/banner-school.jpg"
            alt="Mega Mind Senior Secondary School, Tosham — school building"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">CBSE · Aff. No. 530773 · School Code 40747</span>
          <h1 className="hero-brand">
            Mega Mind
            <br />
            <em>Sr. Sec. School</em>
          </h1>
          <p className="hero-tag">
            Where learning meets possibility — a CBSE sanctuary for curiosity
            and holistic growth in the heart of Tosham, Bhiwani.
          </p>
          <p className="hero-motto">Work is Worship</p>
          <div className="hero-actions">
            <Link className="btn btn-yellow" href="/admissions">
              Apply for 2026–27
            </Link>
            <Link className="btn btn-ghost" href="/about">
              Discover our story
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <div className="stat">
            <strong>2005</strong>
            <span>Established</span>
          </div>
          <div className="stat">
            <strong>530773</strong>
            <span>CBSE Affiliation</span>
          </div>
          <div className="stat">
            <strong>815+</strong>
            <span>Students</span>
          </div>
          <div className="stat">
            <strong>3 Acres</strong>
            <span>Campus</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container about-split">
          <Reveal className="about-visual">
            <Image
              src="/images/gallery/assembly-hall.jpg"
              alt="Students in Mega Mind School assembly hall"
              width={720}
              height={900}
            />
          </Reveal>
          <Reveal className="about-copy">
            <p className="section-label">About the school</p>
            <h2 className="section-title">Nurturing minds since 2005</h2>
            <p>
              Mega Mind Sr. Sec. School is a co-educational, CBSE-affiliated
              senior secondary institution managed by Mahesh Mega Mind Shiksha
              Samiti. Located on Bhiwani Road near Goyal Petrol Pump, Tosham, we
              serve families across Bhiwani district with a balanced focus on
              academics, values, and all-round growth.
            </p>
            <p>
              From Nursery through Class 12, our classrooms, labs, and campus
              life are designed to spark curiosity — so every learner can Think,
              Explore, and Lead.
            </p>
            <div className="pill-row">
              <span className="pill">CBSE · Co-Ed</span>
              <span className="pill">Nursery – XII</span>
              <span className="pill">Day School</span>
              <span className="pill">Work is Worship</span>
            </div>
            <div style={{ marginTop: "1.75rem" }}>
              <Link className="btn btn-outline" href="/about">
                More about us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="facilities">
        <div className="container">
          <Reveal>
            <p className="section-label">Campus life</p>
            <h2 className="section-title">Spaces that inspire learning</h2>
            <p className="section-lead">
              Library, labs, sports grounds, and classrooms — infrastructure that
              supports both board excellence and joyful discovery.
            </p>
          </Reveal>
          <div className="facility-grid">
            {[
              {
                src: "/images/gallery/assembly-hall.jpg",
                title: "Smart Learning Spaces",
                text: "Interactive sessions in our halls and classrooms.",
              },
              {
                src: "/images/gallery/student-projects.jpg",
                title: "Projects & Labs",
                text: "Hands-on projects in commerce, science, and innovation.",
              },
              {
                src: "/images/gallery/independence-day.jpg",
                title: "Sports & Celebrations",
                text: "Annual sports, national festivals, and cultural energy.",
              },
            ].map((f) => (
              <Reveal key={f.title}>
                <article className="facility">
                  <Image
                    src={f.src}
                    alt={`${f.title} - Mega Mind Sr. Sec. School Tosham`}
                    fill
                    sizes="(max-width:900px) 100vw, 33vw"
                  />
                  <div className="facility-body">
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="container">
          <Reveal className="quote-inner">
            <blockquote>
              Education is not the filling of a pail, but the lighting of a fire
              — we guide every child to think deeply, act kindly, and grow
              confidently.
            </blockquote>
            <cite>
              Manisha Walia
              <span>Principal · M.Phil., M.A., B.Ed.</span>
            </cite>
          </Reveal>
        </div>
      </section>

      <section className="reel-section">
        <div className="container">
          <Reveal>
            <p className="section-label">Gallery</p>
            <h2 className="section-title">Moments from campus</h2>
            <p className="section-lead">
              Festivals, quizzes, yoga, and everyday joy — a moving look at life
              at Mega Mind.
            </p>
          </Reveal>
        </div>
        <CampusReel />
        <div className="container">
          <Reveal>
            <div style={{ marginTop: "1.75rem" }}>
              <Link className="btn btn-outline" href="/gallery">
                View full gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sand-section">
        <div className="container">
          <Reveal>
            <p className="section-label">Session 2026–27</p>
            <h2 className="section-title">Academic calendar</h2>
            <p className="section-lead">
              From the April opening day to the March annual function — the
              milestones families plan around.
            </p>
          </Reveal>
          <div className="home-cal">
            {calendarEvents
              .filter((event) =>
                ["session", "summer", "midterm", "result"].includes(event.id)
              )
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
            <div style={{ marginTop: "1.75rem" }}>
              <Link className="btn btn-outline" href="/academic-calendar">
                Full academic calendar
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal>
            <h2>Admissions open for 2026–27</h2>
            <p>
              Enrol your child in a CBSE school rooted in Tosham’s community —
              with academic rigor and warm pastoral care.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-yellow" href="/admissions">
                Start enquiry
              </Link>
              <a className="btn btn-ghost" href="tel:+918199998813">
                Call 81999 98813
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
