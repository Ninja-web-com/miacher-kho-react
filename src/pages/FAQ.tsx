import { useState } from 'react'
import Hero from '../components/Hero'
import CTA from '../components/CTA'

const FAQS = [
  { q: 'What facilities are available?', a: 'Basic washrooms, drinking water, limited solar power, a bonfire area, and food available on request. Mobile network is limited or absent. Facilities are intentionally basic.' },
  { q: 'How do I book?', a: 'The fastest way is WhatsApp. Tell us your dates, group size and preferred options. We confirm availability and current rates directly.' },
  { q: 'Are there fixed prices?', a: 'No. We prefer transparent conversations over fixed online rates that may not match current conditions. Enquire for current rates.' },
  { q: 'Is the road accessible year-round?', a: 'No. The approach is a rough jeep track. Conditions change with season and weather. Always confirm access before travel.' },
  { q: 'Can you arrange transport or guides?', a: 'Yes. We can help arrange local 4×4 support and connect you with experienced local guides. Arrangements are made according to season and availability.' },
  { q: 'Is food included?', a: 'Meals can be arranged on request or as part of certain stays. Exact menus depend on season, supplies and group size.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80"
        eyebrow="Questions"
        title="FAQ"
        subtitle="Straightforward answers about staying at Miacher Kho."
      />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-stone/15 rounded-sm overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-medium hover:bg-snow/50 transition"
              >
                <span>{faq.q}</span>
                <i className={`fa-solid fa-chevron-down text-sm text-stone transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-stone text-sm leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <CTA title="Still have questions?" subtitle="Message us on WhatsApp — we are happy to help." />
    </>
  )
}
