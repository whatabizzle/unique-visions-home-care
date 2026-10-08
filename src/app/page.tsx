import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, HeartHandshake, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden sm:min-h-[calc(100svh-4.5rem)]">
        <Image
          src="/brand/hero.jpg"
          alt="Caregiver and senior sharing a warm moment at home"
          fill
          priority
          className="animate-kenburns object-cover object-[68%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a1714]/88 via-[#5c1216]/55 to-[#2a1714]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a1714]/70 via-transparent to-[#2a1714]/25" />
        <div className="animate-soft-pulse pointer-events-none absolute -left-20 top-24 size-72 rounded-full bg-gold/25 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:min-h-[calc(100svh-4.5rem)] sm:px-6 sm:pb-20">
          <div className="max-w-2xl text-white">
            <p className="animate-fade-up font-script text-5xl leading-none text-gold-soft sm:text-6xl md:text-7xl">
              Unique Visions
            </p>
            <p className="animate-fade-up mt-1 text-xs font-semibold tracking-[0.28em] text-white/85 uppercase sm:text-sm">
              Home Care LLC
            </p>
            <p className="animate-fade-up mt-3 text-sm font-semibold tracking-[0.22em] text-gold uppercase">
              {site.pillars}
            </p>
            <h1 className="animate-fade-up-delay mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              {site.headline}
            </h1>
            <p className="animate-fade-up-delay mt-4 max-w-xl text-base leading-relaxed text-white/88 sm:text-lg">
              {site.supporting}
            </p>
            <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-12 bg-gold px-6 text-base font-semibold text-[#2a1714] hover:bg-gold-soft"
              >
                <Phone data-icon="inline-start" />
                Call {site.phone}
              </Button>
              <Button
                render={<Link href="/services" />}
                size="lg"
                variant="outline"
                className="h-12 border-white/40 bg-white/10 px-6 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                Explore services
                <ArrowRight data-icon="inline-end" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
          {site.acceptingClients}
        </p>
        <div className="mt-3 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-deep sm:text-4xl">
            Professional care. Personal touch.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {site.mission}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.whyUs.map((item) => (
            <div
              key={item.title}
              className="flex gap-3 border-t border-gold/50 pt-5"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-brand" />
              <div>
                <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/80 bg-white/45">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl sm:aspect-[16/9] lg:aspect-[5/4]">
            <Image
              src="/brand/team-care.jpg"
              alt="Unique Visions caregivers with clients in a warm home setting"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
              Our services include
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep">
              Support that stays close to home
            </h2>
            <ul className="mt-6 space-y-3">
              {site.services.slice(0, 6).map((service) => (
                <li
                  key={service.slug}
                  className="flex items-start gap-3 text-foreground/90"
                >
                  <HeartHandshake className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>
                    <span className="font-medium">{service.title}</span>
                    <span className="block text-sm text-muted-foreground">
                      {service.summary}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <Button
              render={<Link href="/services" />}
              className="mt-8 h-11 bg-brand px-5 text-primary-foreground hover:bg-brand-deep"
              size="lg"
            >
              View all services
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 rounded-3xl bg-brand px-6 py-10 text-white sm:px-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              {site.familyLine}
            </h2>
            <p className="mt-3 max-w-xl text-white/85">
              {site.acceptingClients}. {site.serviceAreaLine}{" "}
              {site.paymentOptions}.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-11 bg-gold px-5 font-semibold text-[#2a1714] hover:bg-gold-soft"
              >
                <Phone data-icon="inline-start" />
                {site.phone}
              </Button>
              <Button
                render={<Link href="/contact" />}
                size="lg"
                variant="outline"
                className="h-11 border-white/35 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
              >
                Request a callback
              </Button>
            </div>
          </div>
          <div className="space-y-3 text-sm text-white/85">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-soft" />
              <span>{site.address.full}</span>
            </p>
            <p>
              Email{" "}
              <a href={site.emailHref} className="text-gold-soft underline">
                {site.email}
              </a>
            </p>
            <p>Fax {site.fax}</p>
            <p>
              Follow us on{" "}
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-soft underline"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
