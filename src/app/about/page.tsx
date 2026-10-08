import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.about} Call ${site.phone}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            {site.pillars}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-deep sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {site.mission}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {site.about}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Owned by {site.owner}, with offices in Hammond, Louisiana and
            Liberty, Mississippi, we treat every client like family.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/brand/care-family.jpg"
            alt="Unique Visions caregiver with a smiling client at home"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
      </div>

      <section className="mt-16 border-t border-border/80 pt-12">
        <h2 className="text-2xl font-semibold text-brand-deep sm:text-3xl">
          Why families choose us
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {site.whyUs.map((item) => (
            <li key={item.title} className="flex gap-3">
              <Check className="mt-1 size-5 shrink-0 text-gold" />
              <div>
                <p className="font-semibold text-brand">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-3xl bg-brand px-6 py-10 text-white sm:px-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Our compassionate care team
        </h2>
        <p className="mt-3 max-w-3xl text-white/85">{site.careTeamSummary}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {site.careTeam.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/90">
              <Check className="mt-0.5 size-4 shrink-0 text-gold-soft" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-3xl bg-secondary/70 px-6 py-10 sm:px-10">
        <h2 className="text-2xl font-semibold text-brand-deep">
          Where we serve
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {site.serviceAreaLine}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {site.locations.map((location) => (
            <div
              key={location.id}
              className="rounded-2xl border border-brand/10 bg-white/70 px-4 py-3 text-sm text-brand-deep"
            >
              <p className="font-semibold text-brand">{location.label}</p>
              <p className="mt-1 text-muted-foreground">{location.full}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {site.serviceRegions.map((region) => (
            <div key={region.state}>
              <h3 className="text-sm font-semibold tracking-[0.14em] text-gold uppercase">
                {region.state}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {region.areas.map((area) => (
                  <li
                    key={`${region.state}-${area}`}
                    className="rounded-full border border-brand/15 bg-white/70 px-3 py-1.5 text-sm text-brand-deep"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          {site.paymentOptions}. NPI {site.npi}.
        </p>
        <Button
          render={<Link href="/contact" />}
          className="mt-8 h-11 bg-brand px-5 text-primary-foreground hover:bg-brand-deep"
          size="lg"
        >
          Start a conversation
        </Button>
      </section>
    </div>
  );
}
