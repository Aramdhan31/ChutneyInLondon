"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type NewsletterFormProps = {
  className?: string;
  description?: string;
};

export function NewsletterForm({ className, description }: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString() ?? "";

    if (!email) return;

    // Placeholder submission - integrate with Mailchimp, ConvertKit, or Resend API.
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-[rgba(53,1,4,0.85)] p-8 shadow-[0_0_55px_-15px_rgba(243,193,68,0.55)]",
        className
      )}
    >
      <h3 className="text-xl font-semibold text-white">Join the Vibe List</h3>
      {description ? <p className="mt-2 text-sm text-muted">{description}</p> : null}
      {submitted ? (
        <p className="mt-6 rounded-2xl bg-green-500/20 px-4 py-3 text-sm font-medium text-green-300">
          Respect! You’re officially in the loop. Check your inbox for confirmation.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="w-full rounded-full border border-white/15 bg-[rgba(29,0,4,0.75)] px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-[rgba(243,193,68,0.8)] focus:outline-none focus:ring-2 focus:ring-[rgba(243,193,68,0.35)] sm:flex-1"
          />
          <button
            type="submit"
            className="btn-gold w-full px-6 py-3 text-sm sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      )}
      <p className="mt-3 text-xs text-muted">No spam. Just events, mixes, and exclusive drops.</p>
    </div>
  );
}

