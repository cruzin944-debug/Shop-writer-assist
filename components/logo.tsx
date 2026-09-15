type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const word = variant === "light" ? "text-cream" : "text-navy";
  const assist = variant === "light" ? "text-accent-bright" : "text-accent";

  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none">
          <rect x="8" y="7" width="16" height="19" rx="2.5" fill="#f5f2eb" />
          <rect x="12" y="5.5" width="8" height="3.5" rx="1.2" fill="#c9922a" />
          <rect x="11" y="13" width="10" height="1.5" rx="0.75" fill="#16324c" />
          <rect x="11" y="16.5" width="10" height="1.5" rx="0.75" fill="#16324c" />
          <rect x="11" y="20" width="6.5" height="1.5" rx="0.75" fill="#16324c" />
          <path
            d="M24.2 8.2 25 6.2l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z"
            fill="#e4b34a"
          />
        </svg>
      </span>
      <span className={`leading-none ${compact ? "hidden sm:flex sm:flex-col" : "flex flex-col"}`}>
        <span className={`text-[0.68rem] font-semibold tracking-[0.18em] uppercase ${word}`}>
          Shop Writer
        </span>
        <span className={`font-serif text-[1.2rem] italic leading-none ${assist}`}>
          Assist
        </span>
      </span>
      <span className="sr-only">Shop Writer Assist</span>
    </span>
  );
}
