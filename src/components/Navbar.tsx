'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Qualifications', href: '#qualifications' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-cream-200'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gold-500 text-white flex items-center justify-center font-display font-bold text-lg">
                A
              </div>
              <div className="leading-tight">
                <div className="font-display text-base sm:text-lg font-semibold text-ink-900">
                  Dr. Aditya Sharma
                </div>
                <div className="text-[10px] sm:text-[11px] text-ink-400 tracking-wide uppercase">
                  Cardiologist
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[15px] font-medium text-ink-500 hover:text-gold-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+919820011111"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+91 98200 11111</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold tracking-[0.5px] text-white bg-gold-600 hover:bg-gold-700 px-5 py-2.5 rounded-md shadow-sm transition-colors min-h-[44px]"
              >
                Book Appointment
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-cream-100 text-ink-700"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink-900/40"
            onClick={() => setOpen(false)}
            aria-label="Close menu backdrop"
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-cream-200">
              <span className="font-display font-semibold text-ink-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-cream-100 text-ink-700"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-ink-700 font-medium hover:bg-cream-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 text-center text-white bg-gold-600 hover:bg-gold-700 px-4 py-3 rounded-md font-semibold tracking-[0.5px] min-h-[44px] flex items-center justify-center"
              >
                Book Appointment
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
