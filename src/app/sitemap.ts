import type { MetadataRoute } from 'next'

const BASE_URL = 'https://a20constructions.com'
const LOCALES = ['fr', 'en', 'ar'] as const

// Static paths that exist for every locale.
// Each path is relative (no leading slash) and will be prefixed with /{locale}.
const LOCALE_PATHS = [
  '',                    // home: /{locale}
  'fleet/pump-56m',
  'fleet/pump-62m',
  'fleet/mixer-15m3',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const path of LOCALE_PATHS) {
    for (const locale of LOCALES) {
      const localeSegment = path === '' ? `/${locale}` : `/${locale}/${path}`
      const url = `${BASE_URL}${localeSegment}`

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((lang) => {
              const altSegment = path === '' ? `/${lang}` : `/${lang}/${path}`
              return [lang, `${BASE_URL}${altSegment}`]
            })
          ),
        },
      })
    }
  }

  return entries
}
