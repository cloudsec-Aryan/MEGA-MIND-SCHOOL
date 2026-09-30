import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  calendarEvents,
  calendarPdf,
  yearMonths,
} from "@/data/academic-calendar";

export const metadata: Metadata = {
  title: "Academic Calendar 2026–27",
  description:
    "Mega Mind Sr. Sec. School Tosham academic calendar for 2026–27 — session start, unit tests, summer vacation, half-yearly, pre-boards, and annual result.",
};

const toneLabel: Record<string, string> = {
  open: "Session",
  test: "Assessment",
  break: "Vacation",
  exam: "Exams",
  result: "Result",
  note: "CBSE",
};

export default function AcademicCalendarPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-media">
          <Image
            src="/images/library.jpg"
            alt="Students in the Mega Mind School library"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <h1>Academic Calendar</h1>
        <p>Session 2026–27, from the first working day of April to the annual function in March.</p>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="cal-head">
              <div>
                <p className="section-label">Session 2026–27</p>
                <h2 className="section-title">The year, month by month</h2>
                <p className="section-lead">
                  Key dates from the school’s official academic calendar.
                  Highlighted months mark tests, exams, the summer break, and
                  the annual result.
                </p>
              </div>
              <div className="cal-actions">
                <a
                  className="btn btn-red"
                  href={calendarPdf.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View official PDF
                </a>
                <a
                  className="btn btn-outline"
                  href={calendarPdf.href}
                  download={calendarPdf.download}
                >
                  Download
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ol className="year-rail" aria-label="Academic year April to March">
              {yearMonths.map((month) => (
                <li
                  key={month.label}
                  className={`year-month${month.tone ? " is-milestone" : ""}`}
                  data-tone={month.tone}
                >
                  <span className="year-dot" aria-hidden="true" />
                  <strong>{month.label}</strong>
                  <em>{month.hint}</em>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="cal-legend" aria-hidden="true">
            <span data-tone="open">Session</span>
            <span data-tone="test">Assessment</span>
            <span data-tone="break">Vacation</span>
            <span data-tone="exam">Exams</span>
            <span data-tone="result">Result</span>
          </div>

          <div className="cal-list">
            {calendarEvents.map((event, index) => (
              <Reveal key={event.id}>
                <article className="cal-card" data-tone={event.tone}>
                  <div className="cal-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="cal-card-body">
                    <div className="cal-meta">
                      <time>{event.when}</time>
                      <span className="cal-chip">{toneLabel[event.tone]}</span>
                    </div>
                    <h3>{event.title}</h3>
                    <p>{event.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="cal-footnote">
              Signed by the Principal and the Manager, Mega Mind Sr. Sec.
              School, Tosham · CBSE Affiliation No. 530773 · School Code 40747.
              For class-wise date sheets, contact the school office.
            </p>
            <div className="action-row">
              <Link className="btn btn-outline" href="/academics">
                Academics
              </Link>
              <Link className="btn btn-red" href="/contact">
                Ask the office
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
