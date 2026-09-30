export const calendarPdf = {
  href: "/academic-calendar/academic-calendar-2026-27.pdf",
  download: "Academic-Calendar-2026-27.pdf",
};

export type CalTone = "open" | "test" | "break" | "exam" | "result" | "note";

export type CalendarEvent = {
  id: string;
  when: string;
  title: string;
  detail: string;
  tone: CalTone;
};

export const calendarEvents: CalendarEvent[] = [
  {
    id: "session",
    when: "April 2026",
    title: "Academic year begins",
    detail:
      "The school starts its academic activities on the 1st working day of April.",
    tone: "open",
  },
  {
    id: "ut1",
    when: "May 2026 · 3rd week",
    title: "Unit Test I",
    detail: "The 1st Unit Test will be conducted in the 3rd week of May.",
    tone: "test",
  },
  {
    id: "summer",
    when: "June 2026",
    title: "Summer vacation",
    detail: "The month of June is summer vacation.",
    tone: "break",
  },
  {
    id: "midterm",
    when: "September 2026 · 3rd & 4th week",
    title: "Mid Term (Half-Yearly)",
    detail:
      "Mid Term (Half-Yearly) exams will be conducted in the 3rd and 4th week of September.",
    tone: "exam",
  },
  {
    id: "december",
    when: "December 2026 · 2nd & 3rd week",
    title: "Unit Test II & Pre-Board I",
    detail:
      "Unit Test II exams will be conducted, and Pre-Board 1 will be held in the same weeks.",
    tone: "exam",
  },
  {
    id: "january",
    when: "January 2027",
    title: "Pre-Board II & Unit Test III",
    detail:
      "Board classes sit the 2nd Pre-Board exams. Non-board classes sit Unit Test III.",
    tone: "test",
  },
  {
    id: "practicals",
    when: "As per CBSE",
    title: "Practical exams",
    detail:
      "Practical exams of different subjects will be conducted as per CBSE instructions.",
    tone: "note",
  },
  {
    id: "annual",
    when: "March 2027 · 1st week",
    title: "Final annual exams",
    detail: "Final annual exams will be conducted in the 1st week of March.",
    tone: "exam",
  },
  {
    id: "result",
    when: "March 2027 · month end",
    title: "Result & Annual Function",
    detail:
      "The final result will be declared for the school except board classes, and the Annual Function will be celebrated the same day.",
    tone: "result",
  },
];

export const yearMonths: { label: string; hint: string; tone?: CalTone }[] = [
  { label: "Apr", hint: "Session opens", tone: "open" },
  { label: "May", hint: "Unit Test I", tone: "test" },
  { label: "Jun", hint: "Summer break", tone: "break" },
  { label: "Jul", hint: "Classes" },
  { label: "Aug", hint: "Classes" },
  { label: "Sep", hint: "Half-yearly", tone: "exam" },
  { label: "Oct", hint: "Classes" },
  { label: "Nov", hint: "Classes" },
  { label: "Dec", hint: "UT II · PB-1", tone: "exam" },
  { label: "Jan", hint: "PB-2 · UT III", tone: "test" },
  { label: "Feb", hint: "Classes" },
  { label: "Mar", hint: "Annual · Result", tone: "result" },
];
