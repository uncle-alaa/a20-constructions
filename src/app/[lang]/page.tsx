import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from './dictionaries'
import Header from './components/Header'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Fleet from './components/Fleet'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import JsonLd from './components/JsonLd'

const LOCALE_TO_OG_LOCALE: Record<string, string> = {
  fr: 'fr_MA',
  en: 'en_US',
  ar: 'ar_MA',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) return {}

  const locale = lang as Locale
  const dict = await getDictionary(locale)
  const ogLocale = LOCALE_TO_OG_LOCALE[locale]

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      type: 'website',
      locale: ogLocale,
      siteName: 'A20 Constructions',
      url: `https://a20constructions.com/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <JsonLd />
      <Header dict={dict} lang={locale} />
      <main className="flex-1">
        <Hero dict={dict} lang={locale} />
        <ValueProps lang={locale} />
        <Fleet dict={dict} lang={locale} />
        <Services dict={dict} />
        <About dict={dict} />
        <Contact dict={dict} lang={locale} />
      </main>
      <Footer dict={dict} lang={locale} />
      <WhatsAppFloat />
    </>
  )
}
