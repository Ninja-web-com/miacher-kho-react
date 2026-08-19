import Hero from '../components/Hero'
import CTA from '../components/CTA'

const REVIEWS = [
  { name: 'Ayesha K.', text: 'The silence and the views of Rakaposhi at sunrise were unforgettable. Simple facilities, but that is exactly what we wanted.', stars: 5 },
  { name: 'Omar R.', text: 'Bonfire nights under a sky full of stars. Local hospitality made us feel welcome from the moment we arrived.', stars: 5 },
  { name: 'Sara & Ali', text: 'We came for photography and left with memories of the quietest place we have stayed in the north. Highly recommend.', stars: 5 },
]

export default function Reviews() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80"
        eyebrow="Guest Voices"
        title="Reviews"
        subtitle="Real experiences from people who have stayed at Miacher Kho."
      />
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} className="bg-white border border-stone/10 p-8">
              <div className="flex gap-1 text-sand mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star" />
                ))}
              </div>
              <p className="text-stone leading-relaxed mb-4">“{r.text}”</p>
              <cite className="font-medium text-charcoal not-italic">— {r.name}</cite>
            </blockquote>
          ))}
          <p className="text-center text-stone text-sm mt-10">Placeholder reviews. Replace with verified guest feedback only.</p>
        </div>
      </section>
      <CTA title="Want to leave your own story?" subtitle="After your stay, we would love to hear from you." />
    </>
  )
}
