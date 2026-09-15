import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center bg-cream">
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <p className="section-kicker mx-auto">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-ink">That page isn’t on the lot.</h1>
        <p className="mt-3 text-muted">
          The link may be out of date. Head back to the Shop Writer Assist home page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
