import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Non-medical in-home care from Unique Visions Home Care LLC—personal care, companionship, meals, housekeeping, medication reminders, respite, transportation, and daily living assistance in Hammond, LA and surrounding areas.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
          Our services include
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-deep sm:text-5xl">
          Compassionate care at home
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {site.mission} {site.supporting}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {site.services.map((service, index) => (
          <article
            key={service.slug}
            className="rounded-2xl border border-border/80 bg-white/55 p-6 shadow-[0_1px_0_rgb(143_31_36_/0.04)]"
          >
            <p className="font-script text-3xl text-gold">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-brand">
              {service.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-16 border-t border-border/80 pt-12">
        <h2 className="text-2xl font-semibold text-brand-deep">
          Who we support
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          We enhance quality of life for seniors and individuals with
          disabilities through reliable, non-medical in-home care tailored to
          each person. {site.paymentOptions}.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          {site.serviceAreaLine}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<a href={site.phoneHref} />}
            size="lg"
            className="h-11 bg-brand px-5 text-primary-foreground hover:bg-brand-deep"
          >
            <Phone data-icon="inline-start" />
            Call {site.phone}
          </Button>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            variant="outline"
            className="h-11 border-brand/30 px-5 text-brand hover:bg-secondary"
          >
            Talk with our team
          </Button>
        </div>
      </section>
    </div>
  );
}
