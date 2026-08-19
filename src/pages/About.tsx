import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CTA from '../components/CTA'

const WHY_US = [
  { emoji: '🏕️', title: 'Quality Camping', desc: 'Organised tents and a practical base in a high meadow setting.' },
  { emoji: '🍲', title: 'Fresh Local Meals', desc: 'Food prepared with care, available on request or in selected options.' },
  { emoji: '🧼', title: 'Clean Basics', desc: 'Washrooms, drinking water and a tidy working kitchen area.' },
  { emoji: '🏍️', title: 'Transport Help', desc: 'Support arranging local jeeps for the approach and nearby routes.' },
  { emoji: '🧭', title: 'Local Guides', desc: 'Connections to people who know the trails and viewpoints.' },
  { emoji: '🤝', title: 'Local Hospitality', desc: 'Straightforward, welcoming service from people connected to the area.' },
  { emoji: '🌄', title: 'Scenic Setting', desc: 'Views toward Rakaposhi, Diran and the valleys of Nagar and Hunza.' },
  { emoji: '📞', title: 'Easy Contact', desc: 'WhatsApp and phone for questions, availability and booking.' },
]

export default function About() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
        eyebrow="Nagar Valley · Gilgit-Baltistan"
        title="About Miacher Kho"
        subtitle="A high mountain meadow and viewpoint in the Miacher area of Nagar District — known for panoramic views of Rakaposhi and Diran Peak."
      />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-6">A Quiet Place Above the Valley</h2>
          <div className="space-y-5 text-stone leading-relaxed text-[17px]">
            <p>Miacher Kho (also written as Kho Viewpoint or Mia Char Kho) sits high above the Nagar Valley floor in Gilgit-Baltistan. From this elevated meadow you can look out toward Rakaposhi (7,788 m) and Diran Peak (7,266 m), with the green valleys and glaciers of Nagar and Hunza spread below.</p>
            <p>The approach is typically from Minapin via a rough, steep jeep track. The road itself is part of the experience — narrow, scenic, and far from the more crowded viewpoints of Hunza. Many visitors come for the open views, the night sky, and the feeling of being away from the noise of towns and main roads.</p>
            <p>We operate a simple camping and nature retreat here. Our aim is practical comfort in a real mountain setting: a place to sleep under the stars, share meals, and use as a base for the surrounding scenery. Facilities are basic by design. The landscape is the main reason people stay.</p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sand text-sm tracking-widest uppercase mb-3">Stay</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">Our Camping Experience</h2>
            <div className="space-y-4 text-stone leading-relaxed">
              <p>We provide organised camping on the high ground near the viewpoint. Tents and basic facilities are arranged so you can focus on the surroundings rather than logistics.</p>
              <p>Expect a practical mountain stay: space to rest, a place for a fire when conditions allow, drinking water, and simple washrooms. Solar power is limited. Mobile network can be weak or absent. This is intentional — the setting is quiet and open.</p>
            </div>
            <Link to="/stay" className="inline-flex items-center gap-2 mt-8 text-forest font-semibold border-b border-forest hover:text-mountain">
              View accommodation options <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </div>
          <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80" alt="Camping tent" className="w-full h-80 md:h-[420px] object-cover rounded-sm shadow-lg" />
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sand text-sm tracking-widest uppercase mb-3">What we offer</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Why Stay With Us</h2>
            <p className="text-stone">Honest facilities, a genuine mountain location, and straightforward local support.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {WHY_US.map((item) => (
              <div key={item.title} className="bg-white p-6 md:p-8 border border-stone/10 rounded-sm text-center hover:shadow-md transition">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-forest/10 flex items-center justify-center text-2xl">{item.emoji}</div>
                <h3 className="font-display text-lg mb-2">{item.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Ready to experience Miacher Kho?" subtitle="Come for the mountains, the fresh air, local hospitality and a straightforward outdoor stay." message="Hi, I would like to book a camping experience at Miacher Kho. Please share availability and options." buttonText="Book Your Camping Experience" />
    </>
  )
}
