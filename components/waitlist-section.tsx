import { WaitlistForm } from "./waitlist-form";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="scroll-mt-20 bg-navy-deep py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">Early access</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Request a demo. Join the waitlist.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            Tell us how you write ROs today. The form opens an email to{" "}
            <a
              className="underline decoration-accent/60 underline-offset-2"
              href="mailto:contact@shopwriterasst.com"
            >
              contact@shopwriterasst.com
            </a>{" "}
            — this static site has no waitlist backend. No card required.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-navy p-5 sm:p-7">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
