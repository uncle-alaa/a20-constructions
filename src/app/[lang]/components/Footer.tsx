import Link from 'next/link'
import Image from 'next/image'
import { Locale } from '../dictionaries'

type FooterDict = {
  nav: { home: string; fleet: string; services: string; about: string; contact: string }
  footer: {
    description: string
    quickLinks: string
    contactInfo: string
    rights: string
  }
}

export default function Footer({ dict, lang }: { dict: FooterDict; lang: Locale }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href={`/${lang}`} className="block mb-4">
              <Image
                src="/images/logo-white.png"
                alt="A20 Constructions"
                width={180}
                height={55}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">{dict.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">{dict.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {[
                { href: `/${lang}#home`, label: dict.nav.home },
                { href: `/${lang}#fleet`, label: dict.nav.fleet },
                { href: `/${lang}#services`, label: dict.nav.services },
                { href: `/${lang}#about`, label: dict.nav.about },
                { href: `/${lang}#contact`, label: dict.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">{dict.footer.contactInfo}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +212 666-720194
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@a20constructions.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Casablanca, Maroc
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {year} A20 Constructions. {dict.footer.rights}
        </div>
      </div>
    </footer>
  )
}
