import { useState, FormEvent } from 'react'
import { CONFIG, openWhatsApp, DEFAULT_WA_MESSAGES } from '../lib/config'
import Hero from '../components/Hero'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      openWhatsApp('Hi, I just submitted an enquiry on the Miacher Kho website. Looking forward to hearing from you.')
    }, 800)
  }

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
        eyebrow="Get in Touch"
        title="Contact & Book Your Stay"
        subtitle="The fastest way to check availability is WhatsApp."
      />
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button
              onClick={() => openWhatsApp(DEFAULT_WA_MESSAGES.book)}
              className="inline-flex items-center justify-center gap-3 bg-sand text-forest px-8 py-4 rounded-full font-semibold text-lg hover:bg-white border border-sand transition"
            >
              <i className="fa-brands fa-whatsapp text-xl" /> Chat on WhatsApp
            </button>
            <a
              href={`tel:${CONFIG.phoneTel}`}
              className="inline-flex items-center justify-center gap-3 border border-forest text-forest px-8 py-4 rounded-full font-medium hover:bg-forest hover:text-white transition"
            >
              <i className="fa-solid fa-phone" /> Call Us
            </a>
          </div>

          <div className="bg-white border border-stone/10 p-8 md:p-10">
            <h2 className="font-display text-2xl mb-6">Send an Enquiry</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-stone mb-1.5">Name</label>
                  <input type="text" required className="w-full border border-stone/20 rounded-lg px-4 py-3 focus:outline-none focus:border-forest" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-stone mb-1.5">Phone or Email</label>
                  <input type="text" required className="w-full border border-stone/20 rounded-lg px-4 py-3 focus:outline-none focus:border-forest" placeholder="Contact detail" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-stone mb-1.5">Preferred Dates</label>
                  <input type="text" className="w-full border border-stone/20 rounded-lg px-4 py-3 focus:outline-none focus:border-forest" placeholder="e.g. 15–18 Aug" />
                </div>
                <div>
                  <label className="block text-sm text-stone mb-1.5">Number of Guests</label>
                  <input type="number" min={1} className="w-full border border-stone/20 rounded-lg px-4 py-3 focus:outline-none focus:border-forest" placeholder="2" />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm text-stone mb-1.5">Interested Service (optional)</label>
                <select className="w-full border border-stone/20 rounded-lg px-4 py-3 focus:outline-none focus:border-forest">
                  <option value="">Select if known</option>
                  <option>Standard Camping</option>
                  <option>Premium Camping</option>
                  <option>Group Camping</option>
                  <option>Hiking / Experiences</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm text-stone mb-1.5">Message</label>
                <textarea rows={3} className="w-full border border-stone/20 rounded-lg px-4 py-3 focus:outline-none focus:border-forest" placeholder="Tell us a little about your plans..." />
              </div>
              <button type="submit" className="w-full bg-forest text-white py-3.5 rounded-full font-semibold hover:bg-mountain transition">
                Send Enquiry
              </button>
              {submitted && (
                <p className="mt-4 text-center text-forest text-sm">
                  Thank you. We will respond soon. You can also message us directly on WhatsApp.
                </p>
              )}
            </form>
          </div>

          <div className="mt-10 text-center text-sm text-stone">
            <p>Email: <a href={`mailto:${CONFIG.email}`} className="text-forest hover:underline">{CONFIG.email}</a></p>
            <p className="mt-2">
              <a href={CONFIG.maps} target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">
                Get Directions on Maps
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
