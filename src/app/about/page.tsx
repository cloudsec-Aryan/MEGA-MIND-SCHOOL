import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2005, Mega Mind Sr. Sec. School Tosham is a CBSE co-ed school led by Principal Manisha Walia.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/campus.jpg"
            alt="School campus"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Our story</h1>
        <p>
          A CBSE institution rooted in Tosham — building intellect, character,
          and community since 2005.
        </p>
      </section>

      <section>
        <div className="container about-split">
          <Reveal className="about-copy">
            <p className="section-label">Who we are</p>
            <h2 className="section-title">A sanctuary for intellectual curiosity</h2>
            <p>
              Mega Mind Sr. Sec. School, affiliated with the Central Board of
              Secondary Education (CBSE), is a co-educational day school near
              Goyal Petrol Pump on Bhiwani Road, Tosham Rural, Haryana.
            </p>
            <p>
              Managed by Mahesh Mega Mind Shiksha Samiti, we opened on 1 April
              2005 and have grown into a senior secondary campus serving Nursery
              through Class XII — with 800+ learners and a dedicated faculty.
            </p>
            <p>
              Our motto is simple: <strong>Work is Worship.</strong> We believe
              every child thrives when curiosity meets care, structure, and
              opportunity.
            </p>
          </Reveal>
          <Reveal className="about-visual">
            <Image
              src="/images/hero-campus.png"
              alt="Mega Mind School building"
              width={720}
              height={900}
            />
          </Reveal>
        </div>
      </section>

      <section className="sand-section">
        <div className="container">
          <Reveal>
            <p className="section-label">School facts</p>
            <h2 className="section-title">At a glance</h2>
            <table className="info-table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Mega Mind Sr. Sec. School, Tosham</td>
                </tr>
                <tr>
                  <th>CBSE Affiliation</th>
                  <td>530773 (Senior Secondary · through 31 Mar 2027)</td>
                </tr>
                <tr>
                  <th>Year of Foundation</th>
                  <td>2005</td>
                </tr>
                <tr>
                  <th>Principal</th>
                  <td>Manisha Walia (M.Phil., M.A., B.Ed.)</td>
                </tr>
                <tr>
                  <th>Managing Society</th>
                  <td>Mahesh Mega Mind Shiksha Samiti, Tosham</td>
                </tr>
                <tr>
                  <th>Motto</th>
                  <td>Work is Worship</td>
                </tr>
                <tr>
                  <th>Campus</th>
                  <td>Approx. 3 acres · Bhiwani Road, Tosham, PIN 127040</td>
                </tr>
                <tr>
                  <th>Strength</th>
                  <td>815+ students · 32 teachers · 15 classrooms</td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <Reveal>
            <p className="section-label">Leadership</p>
            <h2 className="section-title">Principal’s desk</h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: "1rem" }}>
              Under Principal Manisha Walia, Mega Mind emphasises academic
              clarity, moral grounding, and co-curricular energy — from science
              exhibitions and youth parliament to sports day and annual fest.
            </p>
            <p style={{ color: "var(--ink-soft)" }}>
              Parents are partners in our journey through seminars, workshops,
              and open communication.
            </p>
          </Reveal>
          <Reveal>
            <p className="section-label">Journey</p>
            <h2 className="section-title">Milestones</h2>
            <ul className="timeline">
              <li>
                <strong>2005</strong>
                <p>School founded and opened on Bhiwani Road, Tosham.</p>
              </li>
              <li>
                <strong>CBSE Affiliation</strong>
                <p>Recognised as Affiliation No. 530773 — Senior Secondary.</p>
              </li>
              <li>
                <strong>Today</strong>
                <p>
                  A thriving co-ed campus with Nursery–XII, labs, library,
                  sports, and transport.
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal>
            <h2>Visit our campus</h2>
            <p>See classrooms, meet coordinators, and experience Mega Mind.</p>
            <div className="hero-actions">
              <Link className="btn btn-yellow" href="/contact">
                Get directions
              </Link>
              <Link className="btn btn-ghost" href="/admissions">
                Admission enquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
