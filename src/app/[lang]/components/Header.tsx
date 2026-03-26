'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Locale, locales, isRTL } from '../i18n-config'

type Dict = {
  nav: {
    home: string
    fleet: string
    services: string
    about: string
    contact: string
    quote: string
  }
}

const langLabels: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  ar: 'AR',
}

export default function Header({ dict, lang }: { dict: Dict; lang: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const rtl = isRTL(lang)

  const navLinks = [
    { href: `/${lang}#home`, label: dict.nav.home },
    { href: `/${lang}#fleet`, label: dict.nav.fleet },
    { href: `/${lang}#services`, label: dict.nav.services },
    { href: `/${lang}#about`, label: dict.nav.about },
    { href: `/${lang}#contact`, label: dict.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-secondary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a href="tel:+212666720194" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +212 666-720194
            </a>
            <a href="mailto:contact@a20constructions.com" className="hidden sm:flex items-center gap-1.5 hover:text-primary transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@a20constructions.com
            </a>
          </div>
          {/* Language Switcher */}
          <div className="flex items-center gap-1">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                  loc === lang
                    ? 'bg-primary text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {langLabels[loc]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="A20 Constructions"
              className="h-14 sm:h-16 lg:h-18 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" dir={rtl ? 'rtl' : 'ltr'}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-primary font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`/${lang}#contact`}
              className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              {dict.nav.quote}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-secondary"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100" dir={rtl ? 'rtl' : 'ltr'}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-secondary hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`/${lang}#contact`}
              onClick={() => setMobileOpen(false)}
              className="block mt-3 bg-primary text-white text-center px-4 py-3 rounded-full font-semibold"
            >
              {dict.nav.quote}
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
