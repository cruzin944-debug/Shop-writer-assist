"use client";

import { FormEvent, useState } from "react";

const roles = [
  "Service writer / advisor",
  "Shop owner / manager",
  "Dealership service manager",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get("email") ?? "").trim(),
      name: String(data.get("name") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      shop: String(data.get("shop") ?? "").trim(),
      demo: data.get("demo") === "on",
    };

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string; message?: string };
      if (!response.ok) {
        setStatus("error");
        setMessage(result.error ?? "Something went wrong. Email us instead.");
        return;
      }
      setStatus("success");
      setMessage(result.message ?? "You’re on the list.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Try again or email contact@shopwriterasst.com.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-navy p-6 text-cream" role="status">
        <p className="font-serif text-2xl italic text-accent-bright">You’re on the list.</p>
        <p className="mt-2 text-sm leading-relaxed text-cream/75">
          {message} This waitlist is a placeholder intake — we don’t charge a
          card here. We’ll follow up at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-cream/90">
          Work email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@shop.com"
            className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-cream placeholder:text-cream/35"
          />
        </label>
        <label className="block text-sm font-medium text-cream/90">
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Alex Rivera"
            className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-cream placeholder:text-cream/35"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-cream/90">
          Role
          <select
            name="role"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-lg border border-white/15 bg-navy-mid px-3 py-2.5 text-cream"
          >
            <option value="" disabled>
              Select one
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-cream/90">
          Shop name
          <input
            name="shop"
            type="text"
            placeholder="Optional"
            className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-cream placeholder:text-cream/35"
          />
        </label>
      </div>
      <label className="flex items-start gap-2.5 text-sm text-cream/80">
        <input
          name="demo"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-white/30"
        />
        I’d like a walkthrough / demo when available
      </label>
      {status === "error" ? (
        <p className="text-sm text-accent-bright" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-accent-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Join waitlist"}
      </button>
      <p className="text-xs leading-relaxed text-cream/50">
        Placeholder intake only — this form does not process payments and does
        not currently persist to a CRM. Prefer email?{" "}
        <a className="underline decoration-accent/60 underline-offset-2" href="mailto:contact@shopwriterasst.com">
          contact@shopwriterasst.com
        </a>
      </p>
    </form>
  );
}
