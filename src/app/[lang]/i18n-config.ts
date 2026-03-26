export type Locale = 'fr' | 'en' | 'ar'

export const locales: Locale[] = ['fr', 'en', 'ar']
export const defaultLocale: Locale = 'fr'

export const hasLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale)

export const isRTL = (locale: Locale) => locale === 'ar'
