import { CONFIG, openWhatsApp } from '../lib/config'
import Hero from '../components/Hero'
import CTA from '../components/CTA'

const STEPS = [
  { num: '1', title: 'Reach Gilgit-Baltistan', desc: 'Fly into Gilgit or travel by road along the Karakoram Highway.' },
  { num: '2', title: 'Continue toward Nagar Valley', desc: 'Follow the route into Nagar. The scenery becomes more dramatic as you go.' },
  { num: '3', title: 'Final approach to Miacher Kho', desc: 'The last section may require a suitable vehicle. We share exact pickup and access details after you enquire.' },
]

export default function Location() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80"
        eyebrow="How to Get Here"
        title="Location & Travel Guide"
        subtitle="Practical information to help you plan the journey to Miacher Kho in Nagar Valley."
      />
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {STEPS.map((s) => (
                <div key={s.num} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center shrink-0 font-semibold">{s.num}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="text-stone text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
              <div className="bg-white border border-stone/10 p-6 text-sm space-y-2">
                <p><strong>Road conditions:</strong> Mountain roads — status changes with season</p>
                <p><strong>Vehicle:</strong> 4x4 often recommended</p>
                <p><strong>Mobile network:</strong> Limited on site</p>
                <p className="text-stone pt-2">Always confirm current access conditions with us before travel.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={CONFIG.maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-forest text-white px-6 py-3 rounded-full font-medium hover:bg-mountain transition">
                  <i className="fa-solid fa-location-arrow" /> Get Directions
                </a>
                <button onClick={() => openWhatsApp('Hi, I need help planning travel to Miacher Kho. Can you guide me?')} className="inline-flex items-center justify-center gap-2 border border-forest text-forest px-6 py-3 rounded-full font-medium hover:bg-forest hover:text-white transition">
                  <i className="fa-brands fa-whatsapp" /> Ask for Travel Help
                </button>
              </div>
            </div>
            <div className="h-80 lg:h-auto min-h-[320px] bg-stone/10 border border-stone/10 flex items-center justify-center rounded-sm">
              <div className="text-center text-stone p-6">
                <i className="fa-solid fa-map-location-dot text-4xl mb-3 text-forest" />
                <p className="font-medium">Map Placeholder</p>
                <p className="text-sm mt-1">Replace with Google Maps embed of the exact campsite</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Need help with the journey?" subtitle="Message us with your travel plans and we will share practical advice." />
    </>
  )
}
