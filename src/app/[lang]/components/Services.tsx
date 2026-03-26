type ServicesDict = {
  services: {
    title: string
    subtitle: string
    rental: { title: string; description: string; features: string[] }
    sales: { title: string; description: string; features: string[] }
    sourcing: { title: string; description: string; features: string[] }
  }
}

function ServiceCard({
  title,
  description,
  features,
  icon,
  highlight,
}: {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  highlight?: boolean
}) {
  return (
    <div className={`rounded-2xl p-8 transition-all hover:-translate-y-1 ${
      highlight
        ? 'bg-primary text-white shadow-xl shadow-primary/20'
        : 'bg-white text-secondary shadow-md border border-gray-100 hover:shadow-lg'
    }`}>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
        highlight ? 'bg-white/20' : 'bg-primary/10'
      }`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className={`mb-6 text-sm leading-relaxed ${highlight ? 'text-white/80' : 'text-gray-500'}`}>{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${highlight ? 'text-white' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className={`text-sm ${highlight ? 'text-white/90' : 'text-gray-600'}`}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const RentalIcon = ({ highlight }: { highlight?: boolean }) => (
  <svg className={`w-7 h-7 ${highlight ? 'text-white' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const SalesIcon = () => (
  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
)

const SourcingIcon = () => (
  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function Services({ dict }: { dict: ServicesDict }) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">{dict.services.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{dict.services.subtitle}</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title={dict.services.rental.title}
            description={dict.services.rental.description}
            features={dict.services.rental.features}
            icon={<RentalIcon highlight />}
            highlight
          />
          <ServiceCard
            title={dict.services.sales.title}
            description={dict.services.sales.description}
            features={dict.services.sales.features}
            icon={<SalesIcon />}
          />
          <ServiceCard
            title={dict.services.sourcing.title}
            description={dict.services.sourcing.description}
            features={dict.services.sourcing.features}
            icon={<SourcingIcon />}
          />
        </div>
      </div>
    </section>
  )
}
