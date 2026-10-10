'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { NAV_LINKS, type NavLink } from '@/lib/content';
import { Logo } from '@/components/brand/logo';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMobileOpen(false);
      setOpenDropdown(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const isActive = useCallback((href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }, [pathname]);

  const isGroupActive = (link: NavLink) =>
    isActive(link.href) || Boolean(link.children?.some((child) => isActive(child.href)));

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
          scrolled
            ? 'border-border/80 bg-white/95 shadow-[0_12px_40px_-30px_rgba(20,20,20,0.28)] backdrop-blur-xl'
            : 'border-transparent bg-white/90 backdrop-blur-md'
        )}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <Link href="/" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300" aria-label="Shital AI LLP home">
            <Logo variant="dark" />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex" ref={dropdownRef}>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                      onMouseEnter={() => setOpenDropdown(link.href)}
                      className={cn(
                        'flex min-h-11 items-center gap-1 rounded-lg px-3.5 py-2 text-[0.82rem] font-medium transition-colors',
                        isGroupActive(link) ? 'text-blue-700' : 'text-navy-600 hover:bg-secondary/70 hover:text-navy-900'
                      )}
                      aria-expanded={openDropdown === link.href}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', openDropdown === link.href && 'rotate-180')} />
                    </button>
                    {openDropdown === link.href && (
                      <div className="absolute left-0 top-full pt-2" onMouseLeave={() => setOpenDropdown(null)}>
                        <div className="w-72 overflow-hidden rounded-xl border border-border/80 bg-white/95 p-2 shadow-2xl shadow-navy-900/10 backdrop-blur-xl">
                          {link.children.map((child) => (
                            <Link key={child.href} href={child.href} className="group flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-blue-50">
                              <span>
                                <span className="block text-sm font-semibold text-navy-900">{child.label}</span>
                                {child.description && <span className="mt-0.5 block text-xs text-muted-foreground">{child.description}</span>}
                              </span>
                              <ArrowUpRight className="h-4 w-4 text-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className={cn('flex min-h-11 items-center rounded-lg px-3.5 py-2 text-[0.82rem] font-medium transition-colors', isActive(link.href) ? 'text-blue-700' : 'text-navy-600 hover:bg-secondary/70 hover:text-navy-900')}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link href="/contact" className="group hidden min-h-11 items-center gap-2 rounded-full bg-[linear-gradient(to_bottom,#3a3f5c_0%,#1e2033_100%)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 lg:inline-flex">
            Get a Business Solution
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <button type="button" onClick={() => setMobileOpen(true)} className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-navy-900/10 text-navy-900 transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden" aria-label="Open menu" aria-expanded={mobileOpen} aria-controls="mobile-menu">
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <div className={cn('fixed inset-0 z-[60] lg:hidden', mobileOpen ? 'pointer-events-auto' : 'pointer-events-none')} aria-hidden={!mobileOpen}>
        <button className={cn('absolute inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity', mobileOpen ? 'opacity-100' : 'opacity-0')} onClick={() => setMobileOpen(false)} aria-label="Close menu overlay" />
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation menu" className={cn('absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-border bg-white shadow-2xl transition-transform duration-300', mobileOpen ? 'translate-x-0' : 'translate-x-full')}>
          <div className="flex h-20 items-center justify-between border-b border-border px-5">
            <Link href="/" onClick={() => setMobileOpen(false)}><Logo variant="dark" /></Link>
            <button type="button" onClick={() => setMobileOpen(false)} className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-navy-900/10 text-navy-900 hover:bg-secondary" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-5" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={cn('flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-base font-medium', isActive(link.href) ? 'bg-blue-50 text-blue-700' : 'text-navy-700 hover:bg-secondary')}>
                    {link.label}<ArrowUpRight className="h-4 w-4 opacity-50" />
                  </Link>
                  {link.children && (
                    <ul className="ml-4 border-l border-border pl-3">
                      {link.children.map((child) => (
                        <li key={child.href}><Link href={child.href} className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-navy-900">{child.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(to_bottom,#3a3f5c_0%,#1e2033_100%)] px-5 py-3 font-semibold text-white">
              Get a Business Solution <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
