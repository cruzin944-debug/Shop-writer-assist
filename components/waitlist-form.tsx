"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "contact@shopwriterasst.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const roles = [
  "Service writer / advisor",
  "Shop owner / manager",
  "Dealership service manager",
  "Other",
];

type Status = "idle" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();
    const role = String(data.get("role") ?? "").trim();
    const shop = String(data.get("shop") ?? "").trim();
    const demo = data.get("demo") === "on";

    if (!emailPattern.test(email) || email.length > 200) {
      setStatus("error");
      setMessage("Enter a valid work email.");
      return;
    }

    const subject = "Shop Writer Assist waitlist";
    const body = [
      "Waitlist / demo request from shopwriterasst.com",
      "",
      `Name: ${name || "(not provided)"}`,
      `Reply-to email: ${email}`,
      `Role: ${role || "(not provided)"}`,
      `Shop: ${shop || "(not provided)"}`,
      `Demo requested: ${demo ? "yes" : "no"}`,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-navy p-6 text-cream" role="status">
        <p className="font-serif text-2xl italic text-accent-bright">Open your mail app to send.</p>
        <p className="mt-2 text-sm leading-relaxed text-cream/75">
          This static site has no waitlist server. Your mail client should open a
          message to{" "}
          <a className="underline decoration-accent/60 underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . If nothing opened, email that address directly. No card required — nothing
          is stored here.
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
        <input name="demo" type="checkbox" className="mt-1 h-4 w-4 rounded border-white/30" />
        I’d like a walkthrough / demo when available
      </label>
      {status === "error" ? (
        <p className="text-sm text-accent-bright" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-accent-bright sm:w-auto"
      >
        Open email to join waitlist
      </button>
      <p className="text-xs leading-relaxed text-cream/50">
        Static site — this form does not save to a server or process payments. It
        opens a message to{" "}
        <a className="underline decoration-accent/60 underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>{" "}
        in your mail app so you can send the request.
      </p>
    </form>
  );
}
