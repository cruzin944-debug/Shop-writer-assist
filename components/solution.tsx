export function Solution() {
  const points = [
    {
      title: "Draft the RO from the concern",
      body: "Turn spoken notes, walk-around points, or a short write-up into a structured repair order draft you can review in seconds.",
    },
    {
      title: "Explain it like a human",
      body: "Convert tech-speak into customer-friendly language for the drive, the estimate, or a follow-up text — without dumbing down the work.",
    },
    {
      title: "Hand the bay a complete picture",
      body: "Checklists, inspection prompts, and handoff notes so the tech isn’t reverse-engineering what the customer actually said.",
    },
  ];

  return (
    <section id="solution" className="scroll-mt-20 bg-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">The solution</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            An assistant that sits next to the writer — not another inbox.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Shop Writer Assist is built around the service writer’s day: capture
            the concern, draft the work, explain it clearly, and pass a clean
            packet to the shop. You stay in control of every line that hits the
            RO.
          </p>
        </div>
        <ol className="space-y-4">
          {points.map((point, index) => (
            <li
              key={point.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <p className="font-serif text-3xl italic text-accent">{index + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{point.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{point.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
