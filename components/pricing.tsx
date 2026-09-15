const plans = [
  {
    name: "Starter",
    price: "$99",
    detail: "per writer / month",
    blurb: "For a single advisor or a small independent shop testing the workflow.",
    items: ["1 service writer seat", "RO drafts & explanations", "Email support (planned)"],
  },
  {
    name: "Shop",
    price: "$199",
    detail: "up to 5 writers / month",
    blurb: "For busy independent shops and dealership lanes that share a playbook.",
    items: ["Up to 5 writer seats", "Handoff notes & checklists", "Shared shop phrasing"],
    featured: true,
  },
  {
    name: "Multi-store",
    price: "$299",
    detail: "starting band / month",
    blurb: "For groups that need the same voice across locations. Final packaging TBD.",
    items: ["Multi-location starting band", "Admin controls (planned)", "Onboarding conversation"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-kicker">Early access</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Pricing isn’t final. These bands are placeholders.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          No payments on this site. Join the waitlist for early access and a
          demo. Example monthly bands below are for conversation only.
        </p>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.featured
                  ? "border-navy bg-navy text-cream shadow-lg"
                  : "border-line bg-white text-ink"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.68rem] font-semibold uppercase ${
                    plan.featured ? "bg-accent text-navy-deep" : "bg-accent-soft text-navy"
                  }`}
                >
                  Placeholder
                </span>
              </div>
              <p className="mt-4 font-serif text-4xl italic">
                {plan.price}
                <span className={`ml-1 text-base not-italic ${plan.featured ? "text-cream/65" : "text-muted"}`}>
                  {plan.detail}
                </span>
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${plan.featured ? "text-cream/70" : "text-muted"}`}>
                {plan.blurb}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${plan.featured ? "bg-accent-bright" : "bg-navy"}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold ${
                  plan.featured
                    ? "bg-accent text-navy-deep hover:bg-accent-bright"
                    : "bg-navy text-cream hover:bg-navy-mid"
                }`}
              >
                Request early access
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
