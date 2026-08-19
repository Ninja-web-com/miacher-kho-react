import Hero from '../components/Hero'
import CTA from '../components/CTA'

export default function BestTime() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80"
        eyebrow="Seasonal Guide"
        title="Best Time to Visit"
        subtitle="Weather, access and experiences change with the seasons in Nagar Valley."
      />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 space-y-10 text-stone leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-3">Spring (April – June)</h2>
            <p>Snow begins to melt, meadows green up, and the approach road becomes more reliable. Mild days and cool nights. Excellent for hiking and early-season photography.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-3">Summer (July – August)</h2>
            <p>Peak season. Warm days, long daylight, and the highest chance of clear views of Rakaposhi. Book ahead. Nights remain cool at altitude.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-3">Autumn (September – October)</h2>
            <p>Crisp air, golden light, and fewer visitors. One of the most beautiful times for photography and quiet stays. Temperatures drop noticeably at night.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-3">Winter (November – March)</h2>
            <p>Harsh conditions. Access can be difficult or closed due to snow. Only recommended for experienced winter travelers with prior arrangement.</p>
          </div>
          <p className="text-sm">Always confirm current road and weather conditions with us before travel. Mountain weather changes quickly.</p>
        </div>
      </section>
      <CTA title="Planning your dates?" subtitle="Tell us when you want to come and we will advise on the best window." />
    </>
  )
}
