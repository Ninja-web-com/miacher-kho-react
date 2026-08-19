import { useState } from 'react'
import { openWhatsApp, DEFAULT_WA_MESSAGES } from '../lib/config'
import Hero from '../components/Hero'
import CTA from '../components/CTA'

const SERVICES = [
  {
    id: 'standard',
    title: 'Standard Camping',
    category: 'Stay',
    desc: 'Simple and authentic outdoor experience with sleeping mats, blankets and shared facilities.',
    details: 'Capacity 2–3 guests. Ideal for travelers who want a classic mountain camping feel.',
    img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    icon: 'fa-campground',
    msg: 'Hi, I am interested in Standard Camping at Miacher Kho. Please share availability and details.',
  },
  {
    id: 'premium',
    title: 'Premium Camping',
    category: 'Stay',
    desc: 'Extra comfort under the peaks with better bedding and preferred views where available.',
    details: 'Capacity 2–4 guests. Perfect for couples or small families seeking a touch more comfort.',
    img: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80',
    icon: 'fa-tent',
    msg: 'Hi, I am interested in Premium Camping at Miacher Kho. Please share availability and details.',
  },
  {
    id: 'group',
    title: 'Group Camping',
    category: 'Stay',
    desc: 'Flexible arrangements for friends, university groups, corporate teams and photographers.',
    details: 'Custom group size. Activities and meals can be arranged on request.',
    img: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80',
    icon: 'fa-users',
    msg: 'Hi, we are planning a group stay at Miacher Kho. Please share options and rates.',
  },
  {
    id: 'hiking',
    title: 'Hiking & Viewpoint Walks',
    category: 'Experience',
    desc: 'Short walks and longer explorations around the campsite opening new angles on the valley and peaks.',
    details: 'Suitable for most fitness levels. Local guidance available on request.',
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
    icon: 'fa-person-hiking',
    msg: 'Hi, I would like to know about hiking and viewpoint walks at Miacher Kho.',
  },
  {
    id: 'stargazing',
    title: 'Stargazing',
    category: 'Experience',
    desc: 'Away from city lights the sky is remarkably clear. One of the strongest memories for many guests.',
    details: 'Best on clear nights. No equipment required — just look up.',
    img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800&q=80',
    icon: 'fa-star',
    msg: 'Hi, I am interested in the stargazing experience at Miacher Kho.',
  },
  {
    id: 'bonfire',
    title: 'Bonfire Evenings',
    category: 'Experience',
    desc: 'Gather around the fire after sunset. Food, conversation, and the mountains as a backdrop.',
    details: 'Available when conditions allow. A natural part of many stays.',
    img: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80',
    icon: 'fa-fire',
    msg: 'Hi, I would like to experience bonfire evenings at Miacher Kho.',
  },
  {
    id: 'photo',
    title: 'Mountain Photography',
    category: 'Experience',
    desc: 'Sunrise and sunset light on Rakaposhi and surrounding peaks make for powerful images.',
    details: 'Photographers often plan extra time around golden hour.',
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    icon: 'fa-camera',
    msg: 'Hi, I am a photographer interested in shooting at Miacher Kho. Please share tips and availability.',
  },
  {
    id: 'guides',
    title: 'Local Guide & Transport Support',
    category: 'Support',
    desc: 'Connections to experienced local guides and help arranging 4×4 transport for the approach.',
    details: 'Arranged according to season and your plans. Practical local knowledge.',
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    icon: 'fa-compass',
    msg: 'Hi, I need local guide or transport support for Miacher Kho. Can you help?',
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

const BOOKING_STEPS = [
  { num: '1', title: 'Enquire on WhatsApp', desc: 'Tell us your dates, group size and preferred services.' },
  { num: '2', title: 'Confirm Details', desc: 'We share availability, current rates and practical advice.' },
  { num: '3', title: 'Arrive & Enjoy', desc: 'Reach the high meadow and let the mountains take centre stage.' },
]

const SERVICE_FAQS = [
  { q: 'Do you have fixed prices online?', a: 'No. We prefer transparent conversations. Rates depend on season, group size and exact services. Enquire on WhatsApp for current rates.' },
  { q: 'Is electricity available?', a: 'Solar power is limited. Do not expect continuous electricity or strong internet. The focus is the outdoor setting.' },
  { q: 'Can you arrange meals?', a: 'Yes. Local meals can be arranged on request or as part of certain stays. We confirm details when you enquire.' },
  { q: 'Is the approach difficult?', a: 'The final stretch is a rough, steep jeep track best suited to 4×4 vehicles. We can help arrange local transport support.' },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
        eyebrow="What We Offer"
        title="Services"
        subtitle="Honest camping options, mountain experiences and practical local support — all focused on the landscape of Nagar Valley."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sand tracking-widest text-xs uppercase mb-3">Everything You Need</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-stone">From simple tents to guided walks and bonfire nights — clear, honest options for different kinds of travelers.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <article key={s.id} className="bg-white border border-stone/10 overflow-hidden flex flex-col hover:shadow-lg transition group">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-forest/90 text-white text-xs px-3 py-1 rounded-full">{s.category}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <i className={`fa-solid ${s.icon} text-sand`} />
                    <h3 className="font-display text-lg">{s.title}</h3>
                  </div>
                  <p className="text-stone text-sm mb-3 flex-1">{s.desc}</p>
                  <p className="text-xs text-stone/80 mb-4">{s.details}</p>
                  <button
                    onClick={() => openWhatsApp(s.msg)}
                    className="w-full text-center bg-forest text-white py-2.5 rounded-full text-sm font-medium hover:bg-mountain transition"
                  >
                    Enquire via WhatsApp
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sand tracking-widest text-xs uppercase mb-3">Practical Details</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">Facilities</h2>
            <p className="text-stone mb-8">We are honest about what is available. The landscape is the main reason people stay.</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-stone">
              {FACILITIES.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-sand shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-stone text-sm mt-6">Please do not expect continuous electricity or strong internet.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-snow">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sand tracking-widest text-xs uppercase mb-3">Simple Steps</p>
            <h2 className="font-display text-3xl md:text-4xl">How to Book</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BOOKING_STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-forest text-white flex items-center justify-center font-display text-xl">
                  {step.num}
                </div>
                <h3 className="font-display text-xl mb-2">{step.title}</h3>
                <p className="text-stone text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-10 text-center">Services FAQ</h2>
          <div className="space-y-3">
            {SERVICE_FAQS.map((faq, i) => (
              <div key={i} className="border border-stone/15 rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium hover:bg-snow/50 transition"
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid fa-chevron-down text-sm text-stone transition ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-stone text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to plan your stay?"
        subtitle="Message us on WhatsApp with your dates and the services you are interested in."
        message={DEFAULT_WA_MESSAGES.services}
        buttonText="Enquire on WhatsApp"
      />
    </>
  )
}
