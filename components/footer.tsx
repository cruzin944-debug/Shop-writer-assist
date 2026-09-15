import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            The AI sidekick for service writers. Built for the drive, not the demo reel.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-accent-bright uppercase">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/75">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-cream">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-accent-bright uppercase">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/75">
            <li>
              <a href="https://shopwriterasst.com" className="hover:text-cream">
                shopwriterasst.com
              </a>
            </li>
            <li>
              <a href="mailto:contact@shopwriterasst.com" className="hover:text-cream">
                contact@shopwriterasst.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Shop Writer Assist. All rights reserved.</p>
          <p>Example quotes and pricing on this site are placeholder copy.</p>
        </div>
      </div>
    </footer>
  );
}
