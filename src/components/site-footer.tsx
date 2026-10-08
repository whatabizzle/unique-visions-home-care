import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80 bg-brand-deep text-[#f8efe6]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.jpg"
              alt=""
              width={44}
              height={44}
              className="size-11 rounded-full object-cover ring-1 ring-gold/40"
            />
            <div>
              <p className="font-script text-3xl leading-none text-gold-soft">
                Unique Visions
              </p>
              <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-white/80 uppercase">
                Home Care LLC
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            {site.pillars} {site.familyLine} {site.serviceAreaLine}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-gold-soft uppercase">
            Explore
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-gold-soft uppercase">
            Contact
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="leading-relaxed">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/55 sm:px-6">
          © 2026 {site.name}. All rights reserved. NPI {site.npi}.
        </p>
      </div>
    </footer>
  );
}
