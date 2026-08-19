import { openWhatsApp } from '../lib/config'
import Hero from '../components/Hero'
import CTA from '../components/CTA'

const OPTIONS = [
  {
    title: 'Standard Camping',
    desc: 'For travelers who want a classic outdoor experience.',
    capacity: '2–3 guests',
    details: ['Sleeping mats & blankets', 'Shared facilities'],
    img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    msg: 'Hi, I am interested in Standard Camping at Miacher Kho. Please share availability and details.',
  },
  {
    title: 'Premium Camping',
    desc: 'Extra comfort while still sleeping under the peaks.',
    capacity: '2–4 guests',
    details: ['Better bedding', 'Preferred views where available'],
    img: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80',
    msg: 'Hi, I am interested in Premium Camping at Miacher Kho. Please share availability and details.',
  },
  {
    title: 'Group Camping',
    desc: 'Friends, university groups, corporate teams and photographers.',
    capacity: 'Flexible group size',
    details: ['Custom arrangements', 'Activities on request'],
    img: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80',
    msg: 'Hi, we are planning a group stay at Miacher Kho. Please share options and rates.',
  },
]

const FACILITIES = [
  'Basic washrooms',
  'Drinking water',
  'Limited solar power',
  'Bonfire area',
  'Limited mobile network',
  'Food available on request',
]

export default function Stay() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1600&q=80"
        eyebrow="Accommodation"
        title="Stay at Miacher Kho"
        subtitle="We offer simple, honest camping options. Facilities are practical. The mountains are the main feature."
      />
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {OPTIONS.map((opt) => (
              <article key={opt.title} className="bg-white border border-stone/10 overflow-hidden">
                <img src={opt.img} alt={opt.title} className="w-full h-56 object-cover" />
                <div className="p-7">
                  <h2 className="font-display text-2xl mb-2">{opt.title}</h2>
                  <p className="text-stone text-sm mb-4">{opt.desc}</p>
                  <ul className="text-sm text-stone space-y-1.5 mb-6">
                    <li>• Capacity: {opt.capacity}</li>
                    {opt.details.map((d) => (
                      <li key={d}>• {d}</li>
                    ))}
                  </ul>
                  <p className="text-forest font-semibold mb-5">Enquire for current rates</p>
                  <button
                    onClick={() => openWhatsApp(opt.msg)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest border-b border-forest"
                  >
                    Enquire on WhatsApp <i className="fa-solid fa-arrow-right text-xs" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 bg-white border border-stone/10 p-8 max-w-3xl">
            <h3 className="font-display text-2xl mb-4">Facilities</h3>
            <p className="text-stone text-sm mb-4">We are honest about what is available:</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-stone">
              {FACILITIES.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <p className="text-stone text-sm mt-4">Please do not expect continuous electricity or strong internet. The focus is the outdoor setting.</p>
          </div>
        </div>
      </section>
      <CTA title="Ready to book your stay?" subtitle="Tell us your dates and group size on WhatsApp." />
    </>
  )
}
