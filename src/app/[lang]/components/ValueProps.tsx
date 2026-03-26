import { Locale } from '../dictionaries'

const content: Record<Locale, { title: string; items: { icon: string; title: string; desc: string }[] }> = {
  fr: {
    title: 'Pourquoi A20 Constructions ?',
    items: [
      { icon: 'clock', title: 'Disponibilite Immediate', desc: 'Materiel pret a l\'emploi, livraison rapide sur vos chantiers a Casablanca et au Maroc.' },
      { icon: 'shield', title: 'Materiel Fiable & Recents', desc: 'Flotte recente et regulierement entretenue. Zoomlion sur chassis Mercedes-Benz.' },
      { icon: 'wallet', title: 'Tarifs Competitifs', desc: 'Location journaliere aux prix du marche. Devis gratuit et sans engagement.' },
      { icon: 'users', title: '10+ Ans d\'Experience', desc: 'Une equipe experimentee qui comprend vos besoins et vous accompagne sur chaque projet.' },
    ],
  },
  en: {
    title: 'Why Work With Us?',
    items: [
      { icon: 'clock', title: 'Ready When You Are', desc: 'Our machines are serviced and standing by. We deliver to your site fast — no waiting around.' },
      { icon: 'shield', title: 'Equipment You Can Trust', desc: 'Late-model Zoomlion pumps on Mercedes-Benz chassis, backed by regular maintenance.' },
      { icon: 'wallet', title: 'Fair, Market-Rate Pricing', desc: 'Transparent day-rates with no hidden fees. Get a free quote in minutes.' },
      { icon: 'users', title: 'A Decade of Know-How', desc: 'Our team has 10+ years in the field. We understand your job and deliver accordingly.' },
    ],
  },
  ar: {
    title: 'ليه تختار A20؟',
    items: [
      { icon: 'clock', title: 'جاهزين وقت ما تحتاج', desc: 'معداتنا مجهزة ومستعدة. نوصّل لموقعك بسرعة — بلا انتظار.' },
      { icon: 'shield', title: 'معدات تقدر تعتمد عليها', desc: 'مضخات Zoomlion حديثة على شاسي Mercedes-Benz، مع صيانة دورية مضمونة.' },
      { icon: 'wallet', title: 'أسعار السوق بشفافية', desc: 'تعرفة يومية واضحة بدون رسوم خفية. اطلب عرض سعر مجاني في دقائق.' },
      { icon: 'users', title: 'خبرة أكثر من 10 سنوات', desc: 'فريقنا عنده تجربة طويلة في الميدان. نفهم شغلك ونقدم على هذا الأساس.' },
    ],
  },
}

const icons: Record<string, React.ReactNode> = {
  clock: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  wallet: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  users: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
}

export default function ValueProps({ lang }: { lang: Locale }) {
  const c = content[lang]

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-secondary text-center mb-12">{c.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {c.items.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {icons[item.icon]}
              </div>
              <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
