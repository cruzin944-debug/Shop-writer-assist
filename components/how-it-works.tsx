const steps = [
  {
    title: "Capture the concern",
    body: "Drop in what the customer said, a few walk-around notes, or a rough RO sketch. The assistant organizes the story.",
  },
  {
    title: "Review the draft",
    body: "Edit line items, tone, and next steps. Nothing posts to your DMS until you copy or send it — you stay the writer of record.",
  },
  {
    title: "Hand it off",
    body: "Use the customer explanation, tech notes, and follow-up copy with the tools you already run. Fast in, clean out.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-navy text-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-kicker">How it works</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Three steps. No extra system of record.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-cream/70">
          Designed to sit beside your DMS, scheduler, and texting tools — not
          replace them on day one.
        </p>
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="font-serif text-4xl italic text-accent-bright">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-cream/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
