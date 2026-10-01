import { FaqJsonLd } from "@/components/JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about admissions, academics, and school life at Mega Mind.",
  items,
}: {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}) {
  return (
    <section className="faq-section" style={{ padding: "4rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p className="section-label">Common Queries</p>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-lead">{subtitle}</p>}

          <div
            className="faq-list"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            {items.map((faq, index) => (
              <details
                key={index}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  padding: "1.25rem 1.5rem",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    color: "var(--ink)",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: "1.25rem",
                      color: "var(--green)",
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </span>
                </summary>
                <div
                  style={{
                    marginTop: "0.85rem",
                    color: "var(--ink-soft)",
                    fontSize: "0.98rem",
                    lineHeight: "1.65",
                    borderTop: "1px solid var(--line)",
                    paddingTop: "0.85rem",
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
      <FaqJsonLd faqs={items} />
    </section>
  );
}
