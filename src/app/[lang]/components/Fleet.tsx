import Image from 'next/image'
import Link from 'next/link'
import { Locale } from '../dictionaries'
import { equipment } from '../data/equipment'

type FleetDict = {
  fleet: {
    title: string
    subtitle: string
    pumps: string
    mixers: string
    pump1: { name: string; description: string; specs: { reach: string; type: string; availability: string } }
    pump2: { name: string; description: string; specs: { reach: string; type: string; availability: string } }
    mixer: { name: string; description: string; specs: { capacity: string; count: string; availability: string } }
    requestQuote: string
  }
}

function EquipmentCard({
  name,
  description,
  specs,
  imageSrc,
  quoteLabel,
  lang,
  equipmentId,
}: {
  name: string
  description: string
  specs: string[]
  imageSrc?: string
  quoteLabel: string
  lang: Locale
  equipmentId: string
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden group">
      {/* Image */}
      <Link href={`/${lang}/fleet/${equipmentId}`} className="block relative h-56 bg-gray-100 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
            </svg>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {specs[specs.length - 1]}
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/${lang}/fleet/${equipmentId}`}>
          <h3 className="text-xl font-bold text-secondary mb-2 hover:text-primary transition-colors">{name}</h3>
        </Link>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {specs.slice(0, -1).map((spec, i) => (
            <span key={i} className="bg-primary/10 text-primary-dark text-xs font-medium px-3 py-1.5 rounded-full">
              {spec}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Link
            href={`/${lang}/fleet/${equipmentId}`}
            className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white py-2.5 rounded-full font-semibold transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Voir
          </Link>
          <a
            href={`/${lang}#contact`}
            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-full font-semibold transition-colors text-sm"
          >
            {quoteLabel}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Fleet({ dict, lang }: { dict: FleetDict; lang: Locale }) {
  const pumps = equipment.filter((e) => e.type === 'pump')
  const mixers = equipment.filter((e) => e.type === 'mixer')

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {dict.fleet.title}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">{dict.fleet.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{dict.fleet.subtitle}</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Pumps */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />
              </svg>
            </span>
            {dict.fleet.pumps}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <EquipmentCard
              name={dict.fleet.pump1.name}
              description={dict.fleet.pump1.description}
              specs={[dict.fleet.pump1.specs.reach, dict.fleet.pump1.specs.type, dict.fleet.pump1.specs.availability]}
              imageSrc={pumps[0]?.images[0]}
              quoteLabel={dict.fleet.requestQuote}
              lang={lang}
              equipmentId="pump-56m"
            />
            <EquipmentCard
              name={dict.fleet.pump2.name}
              description={dict.fleet.pump2.description}
              specs={[dict.fleet.pump2.specs.reach, dict.fleet.pump2.specs.type, dict.fleet.pump2.specs.availability]}
              imageSrc={pumps[1]?.images[0]}
              quoteLabel={dict.fleet.requestQuote}
              lang={lang}
              equipmentId="pump-62m"
            />
          </div>
        </div>

        {/* Mixers */}
        <div>
          <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
              </svg>
            </span>
            {dict.fleet.mixers}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EquipmentCard
              name={dict.fleet.mixer.name}
              description={dict.fleet.mixer.description}
              specs={[dict.fleet.mixer.specs.capacity, dict.fleet.mixer.specs.count, dict.fleet.mixer.specs.availability]}
              imageSrc={mixers[0]?.images[0]}
              quoteLabel={dict.fleet.requestQuote}
              lang={lang}
              equipmentId="mixer-15m3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
