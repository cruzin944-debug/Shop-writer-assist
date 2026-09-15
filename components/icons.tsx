type IconProps = {
  className?: string;
};

export function IconClipboard({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9" y="2.8" width="6" height="2.6" rx="1" fill="currentColor" />
      <path d="M9 10h6M9 13.5h6M9 17h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 16.5 3.5 20l4-1.2A8.5 8.5 0 1 0 5 16.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8.5 11h7M8.5 14h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconChecklist({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 7.5 7 9.5l4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 16.5 7 18.5l4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 8.5h6M13 17.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconHandoff({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="7" cy="8" r="2.3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="16" r="2.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 8h3.5a3 3 0 0 1 3 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14.5 12.5 17 15l2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMessage({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m5.5 7.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlaybook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 5.5h9.5A2.5 2.5 0 0 1 18 8v12.5H8A2.5 2.5 0 0 1 5.5 18V8A2.5 2.5 0 0 1 8 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8 5.5V18a1 1 0 0 0 1 1h9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 10h5M10.5 13.5h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 4.5h8A1.5 1.5 0 0 1 17.5 6v12A1.5 1.5 0 0 1 16 19.5H8A1.5 1.5 0 0 1 6.5 18V6A1.5 1.5 0 0 1 8 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M10 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconOrder({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 4.5h10v15H7z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 8h5M9.5 11.5h5M9.5 15h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconParts({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 4.5v2.4M12 17.1v2.4M4.5 12h2.4M17.1 12h2.4M7 7l1.7 1.7M15.3 15.3 17 17M17 7l-1.7 1.7M8.7 15.3 7 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconCustomers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="10" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.8 18c.5-2.6 2.3-4 4.2-4s3.7 1.4 4.2 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13.2 18c.3-1.8 1.4-2.9 2.8-2.9 1.5 0 2.6 1.1 2.9 2.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconShop({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4.5 10.5 12 4.5l7.5 6v9H4.5v-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 19.5v-5h4v5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconDealer({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 17.5h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 17.5 7.5 9h9l1.5 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 9 10.2 6h3.6L15 9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="8.5" cy="17.5" r="1.4" fill="currentColor" />
      <circle cx="15.5" cy="17.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconMulti({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="8" width="7" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.5" y="5" width="7" height="13" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.8 11h2.4M5.8 14h2.4M15.8 8h2.4M15.8 11h2.4M15.8 14h2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
