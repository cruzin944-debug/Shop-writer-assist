export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-cream">
      <div className="hero-grid hero-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="section-kicker">For service writers</p>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            The AI sidekick for the drive.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">
            Shop Writer Assist helps service advisors draft repair orders, explain
            work in plain English, and keep customers in the loop — without
            juggling five half-finished notes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-accent-bright"
            >
              Join the waitlist
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center rounded-full border border-cream/20 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-cream/40 hover:bg-white/5"
            >
              See how it helps
            </a>
          </div>
          <p className="mt-5 text-sm text-cream/55">
            Built for busy writers and the shop owners who back them. Not a
            generic chatbot wrapper.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-navy/80 p-4 shadow-2xl shadow-black/30 sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-3 text-xs text-cream/55">
              <span className="font-medium tracking-wide uppercase">Example draft</span>
              <span className="rounded-full border border-accent/40 px-2 py-0.5 text-[0.68rem] text-accent-bright">
                Placeholder product UI
              </span>
            </div>
            <article className="rounded-xl bg-cream p-4 text-ink sm:p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
                <p className="text-sm font-semibold">RO #4821</p>
                <p className="text-sm text-muted">2019 Honda Accord · M. Alvarez</p>
              </div>
              <div className="mt-4">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-accent uppercase">
                  Concern
                </p>
                <p className="mt-1 text-sm leading-relaxed">
                  Grinding noise when braking from highway speeds. Worse in the
                  morning.
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-accent uppercase">
                  Draft line items
                </p>
                <ul className="mt-2 space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                    Inspect front pads, rotors, and hardware
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                    Road test to verify the noise
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                    Report findings before additional work
                  </li>
                </ul>
              </div>
              <div className="mt-4 rounded-lg bg-paper p-3">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-accent uppercase">
                  Customer-friendly note
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink/90">
                  We’ll inspect the front brakes and road-test the car so we can
                  tell you exactly what’s causing the grind — before we do extra
                  work.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
