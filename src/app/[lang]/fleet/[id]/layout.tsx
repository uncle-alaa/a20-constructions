import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from '../../dictionaries'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default async function FleetDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <Header dict={dict} lang={locale} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} lang={locale} />
    </>
  )
}
