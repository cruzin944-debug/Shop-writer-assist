import { IconDealer, IconMulti, IconShop } from "./icons";

const audiences = [
  {
    title: "Independent shops",
    body: "When one or two writers cover the whole drive, speed and consistency matter. Get a second set of eyes without hiring another advisor.",
    icon: IconShop,
  },
  {
    title: "Dealership service departments",
    body: "High volume, mixed makes, and a waiting room that expects a story. Keep write-ups complete when the lane is stacked.",
    icon: IconDealer,
  },
  {
    title: "Multi-bay and multi-store teams",
    body: "Shared language across writers so customers hear the same shop — whether they’re in bay 2 or store 3.",
    icon: IconMulti,
  },
];

export function Audience() {
  return (
    <section id="who" className="scroll-mt-20 bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-kicker">Who it’s for</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          If you write ROs for a living, this is your lane.
        </h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-accent-bright">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <blockquote className="mt-10 rounded-2xl border border-dashed border-line bg-paper px-6 py-5">
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">
            Example copy — not a real testimonial
          </p>
          <p className="mt-2 font-serif text-2xl italic leading-snug text-ink">
            “I still write the RO. I just don’t start from a blank screen while
            three people are talking to me.”
          </p>
          <p className="mt-3 text-sm text-muted">— Sample quote for layout, service advisor</p>
        </blockquote>
      </div>
    </section>
  );
}
