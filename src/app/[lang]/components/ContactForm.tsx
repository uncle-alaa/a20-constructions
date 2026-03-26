'use client'

import { Locale } from '../i18n-config'

const labels: Record<Locale, {
  title: string; subtitle: string; company: string; name: string;
  email: string; phone: string; subject: string; message: string;
  send: string; subjects: string[]
}> = {
  fr: {
    title: 'Demander un Devis Gratuit',
    subtitle: 'Remplissez le formulaire et nous vous recontacterons dans les plus brefs delais.',
    company: 'Societe', name: 'Nom & Prenom', email: 'Email', phone: 'Telephone',
    subject: 'Sujet', message: 'Votre message',
    send: 'Envoyer la demande',
    subjects: ['Location pompe a beton', 'Location malaxeur', 'Achat de materiel', 'Sourcing & Import', 'Autre'],
  },
  en: {
    title: 'Get a Free Quote',
    subtitle: 'Tell us what you need and we\'ll get back to you within hours.',
    company: 'Company', name: 'Your name', email: 'Email', phone: 'Phone number',
    subject: 'What do you need?', message: 'Any details (dates, location, etc.)',
    send: 'Send my request',
    subjects: ['Rent a concrete pump', 'Rent a mixer truck', 'Buy equipment', 'Source & import equipment', 'Something else'],
  },
  ar: {
    title: 'احصل على عرض سعر مجاني',
    subtitle: 'قل لنا شنو محتاج ونجاوبك في أقرب وقت.',
    company: 'الشركة', name: 'الاسم', email: 'الإيميل', phone: 'رقم الهاتف',
    subject: 'شنو محتاج؟', message: 'تفاصيل إضافية (التواريخ، الموقع...)',
    send: 'أرسل طلبي',
    subjects: ['تأجير مضخة خرسانة', 'تأجير شاحنة خلط', 'شراء معدات', 'توريد واستيراد معدات', 'شي حاجة أخرى'],
  },
}

export default function ContactForm({ lang }: { lang: Locale }) {
  const l = labels[lang]

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <h3 className="text-2xl font-bold text-secondary mb-2">{l.title}</h3>
      <p className="text-gray-500 text-sm mb-6">{l.subtitle}</p>

      <form
        action={`https://wa.me/212661040355`}
        onSubmit={(e) => {
          e.preventDefault()
          const form = e.target as HTMLFormElement
          const data = new FormData(form)
          const text = `${l.title}\n\n${l.company}: ${data.get('company')}\n${l.name}: ${data.get('name')}\n${l.email}: ${data.get('email')}\n${l.phone}: ${data.get('phone')}\n${l.subject}: ${data.get('subject')}\n\n${data.get('message')}`
          window.open(`https://wa.me/212661040355?text=${encodeURIComponent(text)}`, '_blank')
        }}
        className="space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="company"
            placeholder={l.company}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors"
          />
          <input
            name="name"
            required
            placeholder={l.name}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="email"
            type="email"
            placeholder={l.email}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors"
          />
          <input
            name="phone"
            required
            placeholder={l.phone}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors"
          />
        </div>
        <select
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors text-gray-500"
        >
          <option value="">{l.subject}</option>
          {l.subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <textarea
          name="message"
          rows={4}
          placeholder={l.message}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors resize-none"
        />
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
        >
          {l.send}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </form>
    </div>
  )
}
