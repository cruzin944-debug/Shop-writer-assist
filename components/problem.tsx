import { IconCustomers, IconOrder, IconParts, IconPhone } from "./icons";

const pains = [
  {
    title: "The phone never stops",
    body: "Incoming calls, status questions, and “can you look at one more thing?” land on the same person writing the RO.",
    icon: IconPhone,
  },
  {
    title: "The write-up has to hold up",
    body: "Incomplete concerns, missing authorization language, and sloppy line items come back as comebacks, disputes, or lost time.",
    icon: IconOrder,
  },
  {
    title: "Parts and the bay need a clean handoff",
    body: "Techs shouldn’t decode a writer’s shorthand. Parts shouldn’t guess what “check brakes” actually means.",
    icon: IconParts,
  },
  {
    title: "Customers want a translation",
    body: "They didn’t come in for a parts list. They came in for a clear story: what’s wrong, what you’re doing, and what it costs.",
    icon: IconCustomers,
  },
];

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-20 bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-kicker">The problem</p>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Service writers already do five jobs. The software shouldn’t add a sixth.
          </h2>
          <p className="mt-4 text-lg text-muted">
            The front of the shop is where repair orders, customer trust, and bay
            throughput meet. When the writer is buried, everything downstream
            slows down.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {pains.map((pain) => (
            <article
              key={pain.title}
              className="rounded-2xl border border-line bg-white p-6 shadow-[0_1px_0_rgba(20,32,51,0.04)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-accent-bright">
                <pain.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{pain.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{pain.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
