import Hero from '../components/Hero'
import CTA from '../components/CTA'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80', alt: 'Snow-capped peaks' },
  { src: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80', alt: 'Rugged mountain landscape' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80', alt: 'Wide mountain valley' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80', alt: 'Starry night sky' },
  { src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=900&q=80', alt: 'Camping under open sky' },
  { src: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=900&q=80', alt: 'Alpine meadow' },
  { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80', alt: 'Tent at dusk' },
  { src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=80', alt: 'Hikers on trail' },
]

export default function Gallery() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
        eyebrow="Visuals"
        title="Gallery"
        subtitle="High meadows, Karakoram peaks, and the open character of Nagar Valley."
      />
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {IMAGES.map((img, i) => (
              <figure key={i} className="overflow-hidden rounded-sm aspect-[4/3]">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </figure>
            ))}
          </div>
          <p className="text-center text-stone text-sm mt-10">
            Placeholder images from Unsplash. Replace with real Miacher Kho photography before launch.
          </p>
        </div>
      </section>
      <CTA title="See it for yourself" subtitle="Book a stay and experience the views in person." />
    </>
  )
}
