import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Unique Visions Home Care LLC at ${site.phone} or ${site.email}. Offices in Hammond, LA and Liberty, MS.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-deep sm:text-5xl">
          Let&apos;s talk about your loved one
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Call us today or send a short note. We&apos;ll help you understand
          options for compassionate, dependable care at home.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-6">
          <div className="rounded-2xl border border-border/80 bg-white/60 p-6">
            <h2 className="text-lg font-semibold text-brand">Reach us directly</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href={site.phoneHref} className="text-brand hover:underline">
                    {site.phone}
                  </a>
                  <p className="mt-1 text-muted-foreground">Fax: {site.fax}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href={site.emailHref}
                    className="break-all text-brand hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              {site.locations.map((location) => (
                <li key={location.id} className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium text-foreground">{location.label}</p>
                    <p className="text-muted-foreground">{location.line1}</p>
                    <p className="text-muted-foreground">
                      {location.city}, {location.state} {location.zip}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">
            Prefer social? Visit our{" "}
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand underline"
            >
              Facebook page
            </a>{" "}
            for updates and community posts.
          </p>
        </aside>

        <div className="rounded-3xl border border-border/80 bg-white/70 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-brand-deep">
            Request a callback
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Share a few details and we&apos;ll open a message to{" "}
            {site.email}. For the fastest response, call us.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
