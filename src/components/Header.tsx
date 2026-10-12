"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { site } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname() || "/";
  const menuRef = useRef<HTMLDetailsElement>(null);

  // Close the mobile menu after navigation.
  useEffect(() => {
    if (menuRef.current) menuRef.current.open = false;
  }, [pathname]);

  const desktopNav = site.nav.filter((item) => item.href !== "/");

  return (
    <header className="sticky top-0 z-50">
      {/* Identifier bar */}
      <div className="bg-navy text-[0.72rem] text-white/80">
        <div className="container-x flex h-9 items-center justify-between gap-4 font-mono tracking-wide">
          <p className="truncate">
            <span className="text-orange">CAGE</span> {site.identifiers.cage}
            <span className="mx-2 text-white/30" aria-hidden="true">|</span>
            <span className="text-orange">UEI</span> {site.identifiers.uei}
            <span className="mx-2 hidden text-white/30 sm:inline" aria-hidden="true">|</span>
            <span className="hidden sm:inline">SAM.gov Registered</span>
          </p>
          <a
            href={`mailto:${site.contact.email}`}
            className="hidden items-center gap-2 hover:text-white md:inline-flex"
          >
            <Icon name="mail" className="h-3.5 w-3.5" />
            {site.contact.email}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
          <Logo className="h-8 w-auto sm:h-9 xl:h-8 2xl:h-[2.35rem]" />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-4 2xl:gap-6">
              {desktopNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative whitespace-nowrap py-2 text-[0.84rem] font-semibold tracking-[0.01em] transition-colors after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:origin-left after:bg-orange after:transition-transform ${
                        active
                          ? "text-navy after:scale-x-100"
                          : "text-slate hover:text-navy after:scale-x-0 hover:after:scale-x-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link href={site.quoteHref} className="btn btn-primary hidden min-h-[2.6rem] px-4 text-[0.85rem] sm:inline-flex">
              Request a Quote
            </Link>

            {/* Mobile / tablet menu — works without JavaScript */}
            <details ref={menuRef} className="group xl:hidden">
              <summary
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-sm border border-line text-navy hover:border-navy"
                aria-label="Open menu"
              >
                <Icon name="menu" className="h-6 w-6 group-open:hidden" />
                <Icon name="close" className="hidden h-6 w-6 group-open:block" />
              </summary>
              <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-7.5rem)] overflow-y-auto border-b border-line bg-white shadow-xl">
                <nav aria-label="Mobile" className="container-x py-4">
                  <ul className="divide-y divide-line">
                    {site.nav.map((item) => {
                      const active = isActive(pathname, item.href);
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className={`flex items-center justify-between py-3.5 font-display text-xl font-semibold uppercase tracking-wide ${
                              active ? "text-orange-700" : "text-navy"
                            }`}
                          >
                            {item.label}
                            <Icon name="arrowRight" className="h-5 w-5 text-orange" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-4 grid gap-3 pb-2 sm:grid-cols-2">
                    <Link href={site.quoteHref} className="btn btn-primary w-full">
                      Request a Quote
                    </Link>
                    <a href={`mailto:${site.contact.email}`} className="btn btn-outline-dark w-full">
                      <Icon name="mail" className="h-4 w-4" />
                      Email Us
                    </a>
                  </div>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
