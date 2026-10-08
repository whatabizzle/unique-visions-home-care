"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !phone || !message) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Care inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    // Opens the visitor's email app addressed to the agency inbox.
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="Full name"
            className="h-11 bg-white/70"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(985) 555-0123"
            className="h-11 bg-white/70"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email (optional)</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="h-11 bg-white/70"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your loved one and the support you need."
          className="min-h-32 bg-white/70"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Please share your name, phone number, and a short message so we can
          follow up.
        </p>
      ) : null}
      {status === "sent" ? (
        <p className="text-sm text-brand" role="status">
          Opening your email app to message {site.email}… Prefer a quicker
          response? Call{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>
          .
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="h-11 bg-brand px-6 text-primary-foreground hover:bg-brand-deep"
      >
        {status === "sending" ? "Preparing message…" : "Send inquiry"}
      </Button>
    </form>
  );
}
