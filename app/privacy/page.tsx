import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notes for the Shop Writer Assist marketing site.",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="flex-1 bg-cream">
      <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="section-kicker">Legal</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Privacy
        </h1>
        <p className="mt-4 text-muted">
          This is a marketing site for Shop Writer Assist (shopwriterasst.com).
          It is not a live product environment and does not process payments.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-ink">Waitlist form</h2>
        <p className="mt-3 text-muted">
          The waitlist endpoint validates your email and returns a success
          message. It does not currently persist submissions to a database or
          third-party ESP. Treat anything you submit as a request to be
          contacted — not as an account.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-ink">Contact</h2>
        <p className="mt-3 text-muted">
          Questions:{" "}
          <a className="font-medium text-navy underline" href="mailto:contact@shopwriterasst.com">
            contact@shopwriterasst.com
          </a>
          .
        </p>
        <p className="mt-8">
          <Link href="/" className="text-sm font-semibold text-navy">
            ← Back to home
          </Link>
        </p>
      </article>
    </main>
  );
}
