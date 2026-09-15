import {
  IconChat,
  IconChecklist,
  IconClipboard,
  IconHandoff,
  IconMessage,
  IconPlaybook,
} from "./icons";

const features = [
  {
    title: "Repair order drafts",
    body: "Start from a concern and get a structured draft: line items, inspection notes, and authorization-ready language you can edit.",
    icon: IconClipboard,
  },
  {
    title: "Customer-friendly explanations",
    body: "Rewrite findings so a customer understands the why, the risk of waiting, and what you’re recommending — without scare tactics.",
    icon: IconChat,
  },
  {
    title: "Concern & inspection checklists",
    body: "Prompt the questions writers forget when the waiting room is full: symptoms, conditions, prior work, and safety items.",
    icon: IconChecklist,
  },
  {
    title: "Tech handoff notes",
    body: "Package what the customer said, what you promised, and what to verify first so the bay isn’t starting from a blank RO.",
    icon: IconHandoff,
  },
  {
    title: "Follow-up messages",
    body: "Draft status updates, approval asks, and pickup notes in the shop’s voice — ready to paste into your existing channels.",
    icon: IconMessage,
  },
  {
    title: "Shop playbooks",
    body: "Save preferred phrasing, common jobs, and house rules so every writer doesn’t reinvent the same explanation.",
    icon: IconPlaybook,
    placeholder: true,
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-kicker">Features</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Built for the work that actually hits the writer’s desk.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Claims below describe the product direction. Shop playbooks is labeled
          as a placeholder until that capability ships.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-2xl border border-line bg-white p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-accent-bright">
                <feature.icon className="h-5 w-5" />
              </span>
              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                {feature.placeholder ? (
                  <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[0.68rem] font-semibold tracking-wide text-navy uppercase">
                    Placeholder
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
