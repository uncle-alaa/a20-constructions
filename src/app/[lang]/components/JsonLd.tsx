// JSON-LD structured data for A20 Constructions (LocalBusiness / ConcreteContractor schema).
// Rendered as a <script> tag so search engines can understand the business entity.
// The payload uses \u003c to sanitize any `<` characters and prevent XSS via JSON injection.

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ConcreteContractor'],
  name: 'A20 Constructions',
  url: 'https://a20constructions.com',
  telephone: '+212666720194',
  email: 'contact@a20constructions.com',
  description:
    "A20 Constructions - Location de pompes à béton et malaxeurs à Casablanca et au Maroc. Plus de 10 ans d'expérience dans le secteur du BTP.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.5731,
    longitude: -7.5898,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA).replace(/</g, '\\u003c'),
      }}
    />
  )
}
