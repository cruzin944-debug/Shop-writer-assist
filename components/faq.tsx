const faqs = [
  {
    q: "Does this replace our DMS?",
    a: "No. Shop Writer Assist is meant to sit beside the systems you already use. You review drafts, then copy or send them into your existing repair-order workflow.",
  },
  {
    q: "Is this just ChatGPT with a landing page?",
    a: "The product is positioned as a service-writer workflow assistant — RO structure, customer explanations, checklists, and handoffs — not an open-ended chat box. Final model and integration details will be shared with early-access shops.",
  },
  {
    q: "Who is it for?",
    a: "Service writers, service advisors, and shop owners at independent shops, dealership service departments, and multi-bay or multi-store operations.",
  },
  {
    q: "Will you train on our customer data?",
    a: "Production data handling is not live on this marketing site. The intent is shop-controlled drafts you can review before anything is saved to a customer record. We’ll publish a clear policy before any paid launch.",
  },
  {
    q: "When can we try it?",
    a: "We’re collecting waitlist and demo requests now. Use the form on this page or email contact@shopwriterasst.com.",
  },
  {
    q: "Are the prices real?",
    a: "No. The $99–$299 / month bands are example packaging so shops can react to a range. They are clearly marked as placeholders and are not an offer.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="section-kicker">FAQ</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Straight answers.
        </h2>
        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item group px-5 py-2">
              <summary className="flex items-center justify-between gap-4 py-3 text-left text-base font-semibold text-ink">
                {item.q}
                <svg
                  viewBox="0 0 20 20"
                  className="faq-chevron h-5 w-5 shrink-0 text-muted transition-transform"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="pb-4 text-[0.98rem] leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
