export type Equipment = {
  id: string
  type: 'pump' | 'mixer'
  brand: string
  model: string
  year: number
  images: string[]
  available: boolean
  forSale: boolean
  specs: Record<string, Record<string, string>>
}

export const equipment: Equipment[] = [
  {
    id: 'pump-56m',
    type: 'pump',
    brand: 'Zoomlion',
    model: 'ZLJ5441THBBE',
    year: 2019,
    images: [
      '/images/pump56-1.jpeg',
      '/images/pump56-2.jpeg',
      '/images/pump56-3.jpeg',
      '/images/pump56-4.jpeg',
      '/images/pump56-5.jpeg',
      '/images/pump56-6.jpeg',
    ],
    available: true,
    forSale: false,
    specs: {
      fr: {
        'Marque': 'Zoomlion',
        'Modele': 'ZLJ5441THBBE',
        'Annee': '2019',
        'Portee fleche': '56 m',
        'Debit': '180 m3/h',
        'Pression max': '11.3 MPa',
        'Chassis': 'Mercedes-Benz Actros',
        'Moteur': 'Mercedes-Benz OM501LA (300 kW)',
      },
      en: {
        'Brand': 'Zoomlion',
        'Model': 'ZLJ5441THBBE',
        'Year': '2019',
        'Boom reach': '56 m',
        'Output': '180 m3/h',
        'Max pressure': '11.3 MPa',
        'Chassis': 'Mercedes-Benz Actros',
        'Engine': 'Mercedes-Benz OM501LA (300 kW)',
      },
      ar: {
        'العلامة': 'Zoomlion',
        'الموديل': 'ZLJ5441THBBE',
        'السنة': '2019',
        'مدى الذراع': '56 م',
        'التدفق': '180 م3/س',
        'الضغط الأقصى': '11.3 MPa',
        'الشاسي': 'Mercedes-Benz Actros',
        'المحرك': 'Mercedes-Benz OM501LA (300 kW)',
      },
    },
  },
  {
    id: 'pump-58m',
    type: 'pump',
    brand: 'XCMG',
    model: 'Schwing Tech HB56V',
    year: 2020,
    images: [
      '/images/pump58-1.jpeg',
      '/images/pump58-2.jpeg',
      '/images/pump58-3.jpeg',
    ],
    available: true,
    forSale: false,
    specs: {
      fr: {
        'Marque': 'XCMG (Schwing Tech)',
        'Modele': 'HB56V',
        'Portee fleche': '58 m',
        'Chassis': 'Mercedes-Benz Actros 4143',
        'Poids total': '44 000 kg',
      },
      en: {
        'Brand': 'XCMG (Schwing Tech)',
        'Model': 'HB56V',
        'Boom reach': '58 m',
        'Chassis': 'Mercedes-Benz Actros 4143',
        'Gross weight': '44,000 kg',
      },
      ar: {
        'العلامة': 'XCMG (Schwing Tech)',
        'الموديل': 'HB56V',
        'مدى الذراع': '58 م',
        'الشاسي': 'Mercedes-Benz Actros 4143',
        'الوزن الإجمالي': '44,000 كغ',
      },
    },
  },
  {
    id: 'pump-62m',
    type: 'pump',
    brand: 'Zoomlion',
    model: 'ZLJ5441THBBE',
    year: 2019,
    images: [
      '/images/pump62-1.jpeg',
      '/images/pump62-2.jpeg',
      '/images/pump62-3.jpeg',
      '/images/pump62-4.jpeg',
    ],
    available: true,
    forSale: false,
    specs: {
      fr: {
        'Marque': 'Zoomlion',
        'Modele': 'ZLJ5441THBBE',
        'Annee': '2019',
        'Portee fleche': '62 m',
        'Chassis': 'Mercedes-Benz Actros 4143',
        'Moteur': 'Mercedes-Benz',
        'Poids total': '44 000 kg',
      },
      en: {
        'Brand': 'Zoomlion',
        'Model': 'ZLJ5441THBBE',
        'Year': '2019',
        'Boom reach': '62 m',
        'Chassis': 'Mercedes-Benz Actros 4143',
        'Engine': 'Mercedes-Benz',
        'Gross weight': '44,000 kg',
      },
      ar: {
        'العلامة': 'Zoomlion',
        'الموديل': 'ZLJ5441THBBE',
        'السنة': '2019',
        'مدى الذراع': '62 م',
        'الشاسي': 'Mercedes-Benz Actros 4143',
        'المحرك': 'Mercedes-Benz',
        'الوزن الإجمالي': '44,000 كغ',
      },
    },
  },
  {
    id: 'mixer-15m3',
    type: 'mixer',
    brand: 'Sitrak / Lin Yu',
    model: 'Camion Malaxeur 15m3',
    year: 2024,
    images: [
      '/images/mixer-1.jpeg',
      '/images/mixer-2.jpeg',
      '/images/mixer-3.jpeg',
    ],
    available: true,
    forSale: false,
    specs: {
      fr: {
        'Chassis': 'Sitrak',
        'Cuve': 'Lin Yu',
        'Capacite': '15 m3',
        'Poids total': '31 000 kg',
        'Unites disponibles': '3',
        'Type': 'Camion malaxeur',
      },
      en: {
        'Chassis': 'Sitrak',
        'Drum': 'Lin Yu',
        'Capacity': '15 m3',
        'Gross weight': '31,000 kg',
        'Available units': '3',
        'Type': 'Mixer truck',
      },
      ar: {
        'الشاسي': 'Sitrak',
        'الخزان': 'Lin Yu',
        'السعة': '15 م3',
        'الوزن الإجمالي': '31,000 كغ',
        'الوحدات المتاحة': '3',
        'النوع': 'شاحنة خلاطة',
      },
    },
  },
]

export const getEquipment = (id: string) => equipment.find((e) => e.id === id)
export const getEquipmentByType = (type: 'pump' | 'mixer') => equipment.filter((e) => e.type === type)
