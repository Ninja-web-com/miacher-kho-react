import { Link } from 'react-router-dom'
import { openWhatsApp, DEFAULT_WA_MESSAGES } from '../lib/config'
import CTA from '../components/CTA'

const HIGHLIGHTS = [
  { icon: 'fa-mountain', title: 'Rakaposhi Views', desc: 'Wake up to iconic peaks' },
  { icon: 'fa-campground', title: 'Mountain Camping', desc: 'Authentic outdoor stay' },
  { icon: 'fa-star', title: 'Stargazing', desc: 'Clear mountain skies' },
  { icon: 'fa-fire', title: 'Bonfire Nights', desc: 'Stories under the stars' },
  { icon: 'fa-hand-holding-heart', title: 'Local Hospitality', desc: 'Warm Nagar culture' },
]

const STAY_PREVIEWS = [
  {
    title: 'Standard Camping',
    desc: 'Simple and authentic',
    img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Premium Camping',
    desc: 'Extra comfort under the peaks',
    img: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Group Camping',
    desc: 'Friends, universities & teams',
    img: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=700&q=80',
  },
]

const EXPERIENCES = [
  { icon: 'fa-person-hiking', title: 'Hiking', desc: 'Viewpoint walks around the camp' },
  { icon: 'fa-star', title: 'Stargazing', desc: 'Clear skies away from city lights' },
  { icon: 'fa-fire', title: 'Bonfire', desc: 'Evenings around the fire' },
  { icon: 'fa-camera', title: 'Photography', desc: 'Sunrise, sunset & peaks' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[620px] flex items-end md:items-center">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
          alt="Karakoram mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-24 md:pb-0 w-full">
          <p className="text-sand tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
            Nagar Valley • Gilgit-Baltistan
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-3xl mb-6">
            Camp in the Heart of the Karakoram
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-xl mb-10">
            Peaceful mountain camping, Rakaposhi views, star-filled nights and the quiet beauty of Nagar Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-sand text-forest px-8 py-4 rounded-full font-semibold hover:bg-white transition"
            >
              Explore Services
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-white/50 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition"
            >
              Explore Miacher Kho
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-forest text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title}>
                <i className={`fa-solid ${h.icon} text-sand text-2xl mb-3`} />
                <h3 className="font-display text-lg mb-1">{h.title}</h3>
                <p className="text-white/60 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-snow">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sand tracking-widest text-xs uppercase mb-3">The Place</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">A quiet corner of Nagar Valley</h2>
            <p className="text-stone leading-relaxed mb-6">
              Miacher Kho is a carefully chosen campsite high above the valley, looking out toward Rakaposhi and the surrounding Karakoram. It is a place for silence, mountain light, and simple outdoor living.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-forest font-semibold border-b border-forest pb-0.5 hover:text-mountain"
            >
              Read our story <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80"
            alt="Mountain landscape"
            className="w-full h-80 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* Stay Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sand tracking-widest text-xs uppercase mb-3">Accommodation</p>
            <h2 className="font-display text-4xl md:text-5xl">Stay Your Way</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STAY_PREVIEWS.map((s) => (
              <Link
                key={s.title}
                to="/stay"
                className="group block border border-stone/10 overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl mb-2">{s.title}</h3>
                  <p className="text-stone text-sm">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/stay"
              className="inline-flex items-center gap-2 text-forest font-semibold border-b border-forest"
            >
              View all accommodation <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Preview */}
      <section className="py-20 md:py-28 bg-snow">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sand tracking-widest text-xs uppercase mb-3">What You Can Do</p>
            <h2 className="font-display text-4xl md:text-5xl">Experiences</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCES.map((e) => (
              <div key={e.title} className="bg-white p-6 border border-stone/10">
                <i className={`fa-solid ${e.icon} text-sand text-2xl mb-3`} />
                <h3 className="font-display text-lg mb-1">{e.title}</h3>
                <p className="text-stone text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-forest font-semibold border-b border-forest"
            >
              Explore all services <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        title="Ready for the mountains?"
        subtitle="Check availability and plan your stay with us on WhatsApp."
        message={DEFAULT_WA_MESSAGES.availability}
      />
    </>
  )
}
