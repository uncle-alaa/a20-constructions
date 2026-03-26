import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDictionary, hasLocale, type Locale } from '../../dictionaries'
import { equipment, getEquipment } from '../../data/equipment'
import ImageGallery from './ImageGallery'

export async function generateStaticParams() {
  const locales: Locale[] = ['fr', 'en', 'ar']
  return locales.flatMap((lang) =>
    equipment.map((e) => ({ lang, id: e.id }))
  )
}

const typeLabels: Record<string, Record<Locale, string>> = {
  pump: { fr: 'Pompe a Beton', en: 'Concrete Pump', ar: 'مضخة خرسانة' },
  mixer: { fr: 'Malaxeur a Beton', en: 'Concrete Mixer', ar: 'خلاط خرسانة' },
}

const backLabels: Record<Locale, string> = {
  fr: 'Retour a la flotte',
  en: 'Back to fleet',
  ar: 'العودة إلى الأسطول',
}

const specsTitle: Record<Locale, string> = {
  fr: 'Specifications Techniques',
  en: 'Technical Specifications',
  ar: 'المواصفات الفنية',
}

const quoteLabels: Record<Locale, string> = {
  fr: 'Demander un Devis',
  en: 'Request a Quote',
  ar: 'طلب عرض سعر',
}

const whatsappLabels: Record<Locale, string> = {
  fr: 'Contacter via WhatsApp',
  en: 'Contact via WhatsApp',
  ar: 'تواصل عبر واتساب',
}

const rentalLabel: Record<Locale, string> = {
  fr: 'Disponible a la location',
  en: 'Available for rental',
  ar: 'متاح للإيجار',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params
  if (!hasLocale(lang)) return {}
  const eq = getEquipment(id)
  if (!eq) return {}
  const locale = lang as Locale
  const dict = await getDictionary(locale)
  const typeName = typeLabels[eq.type][locale]
  return {
    title: `${typeName} ${eq.brand} - ${Object.values(eq.specs[lang] || {})[3] || eq.model} | A20 Constructions`,
    description: dict.metadata.description,
  }
}

export default async function EquipmentPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params

  if (!hasLocale(lang)) notFound()
  const locale = lang as Locale

  const eq = getEquipment(id)
  if (!eq) notFound()

  const specs = eq.specs[lang] || eq.specs['fr']
  const typeName = typeLabels[eq.type][locale]

  return (
    <div className="pt-32 lg:pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href={`/${lang}#fleet`}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {backLabels[locale]}
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Gallery - 3 cols */}
          <div className="lg:col-span-3">
            <ImageGallery images={eq.images} alt={`${eq.brand} ${eq.model}`} />
          </div>

          {/* Info - 2 cols */}
          <div className="lg:col-span-2">
            {/* Type badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/10 text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
                {typeName}
              </span>
              {eq.available && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {rentalLabel[locale]}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-2">
              {eq.brand} {eq.model}
            </h1>
            <p className="text-gray-500 mb-6">{eq.year}</p>

            {/* Specs table */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="font-bold text-secondary">{specsTitle[locale]}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between px-6 py-3">
                    <span className="text-gray-500 text-sm">{key}</span>
                    <span className="font-semibold text-secondary text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/212661040355?text=${encodeURIComponent(`Bonjour, je suis interesse par la ${typeName} ${eq.brand} ${Object.values(specs)[3] || eq.model}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white py-4 rounded-xl font-semibold transition-colors w-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {whatsappLabels[locale]}
              </a>
              <a
                href={`/${lang}#contact`}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-semibold transition-colors w-full"
              >
                {quoteLabels[locale]}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
