type AboutDict = {
  about: {
    title: string
    subtitle: string
    description: string
    values: {
      experience: { title: string; description: string }
      reliability: { title: string; description: string }
      proximity: { title: string; description: string }
    }
  }
}

const ExperienceIcon = () => (
  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const ReliabilityIcon = () => (
  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const ProximityIcon = () => (
  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function About({ dict }: { dict: AboutDict }) {
  const values = [
    { ...dict.about.values.experience, icon: <ExperienceIcon /> },
    { ...dict.about.values.reliability, icon: <ReliabilityIcon /> },
    { ...dict.about.values.proximity, icon: <ProximityIcon /> },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-block bg-primary/10 text-primary-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              A20 Constructions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">{dict.about.title}</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6" />
            <p className="text-primary-dark font-medium mb-4">{dict.about.subtitle}</p>
            <p className="text-gray-500 leading-relaxed text-lg">{dict.about.description}</p>
          </div>

          {/* Right: Values */}
          <div className="space-y-5">
            {values.map((value, i) => (
              <div key={i} className="flex gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
