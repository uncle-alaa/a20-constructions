import { Locale } from '../dictionaries'

type Dict = {
  hero: {
    title: string
    subtitle: string
    cta: string
    ctaSecondary: string
    stat1Label: string
    stat1Value: string
    stat2Label: string
    stat2Value: string
    stat3Label: string
    stat3Value: string
    stat4Label: string
    stat4Value: string
  }
}

export default function Hero({ dict, lang }: { dict: Dict; lang: Locale }) {
  const stats = [
    { value: dict.hero.stat1Value, label: dict.hero.stat1Label },
    { value: dict.hero.stat2Value, label: dict.hero.stat2Label },
    { value: dict.hero.stat3Value, label: dict.hero.stat3Label },
    { value: dict.hero.stat4Value, label: dict.hero.stat4Label },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 lg:pt-36">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-secondary/30" />
      </div>

      {/* Fallback gradient if no image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Casablanca, Maroc
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {dict.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              {dict.hero.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={`/${lang}#fleet`}
              className="inline-flex items-center justify-center border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-t-2xl shadow-xl grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center py-6 px-4 ${i > 0 ? 'border-l border-gray-100' : ''}`}>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
