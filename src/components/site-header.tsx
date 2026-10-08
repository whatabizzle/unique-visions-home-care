"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-[#fbf6f1]/88 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo.jpg"
            alt={`${site.name} logo`}
            width={48}
            height={48}
            className="size-10 rounded-full object-cover ring-1 ring-brand/20 sm:size-12"
            priority
          />
          <span className="min-w-0 leading-tight">
            <span className="font-script block text-[1.55rem] leading-none text-gold transition-colors group-hover:text-brand sm:text-[1.75rem]">
              Unique Visions
            </span>
            <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-brand uppercase">
              Home Care LLC
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold transition-transform duration-300",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<a href={site.phoneHref} />}
            className="hidden bg-brand text-primary-foreground hover:bg-brand-deep sm:inline-flex"
            size="lg"
          >
            <Phone data-icon="inline-start" />
            Call {site.phone}
          </Button>
          <Button
            variant="ghost"
            size="icon-lg"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/70 bg-[#fbf6f1] md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-secondary",
                  pathname === link.href && "bg-secondary text-brand"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-3 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="size-4" />
              Call {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
