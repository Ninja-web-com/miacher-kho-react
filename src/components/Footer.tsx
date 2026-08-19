import { Link } from 'react-router-dom'
import { CONFIG, openWhatsApp, DEFAULT_WA_MESSAGES } from '../lib/config'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 py-14">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl text-white mb-2">{CONFIG.siteName}</p>
          <p className="text-sm">
            Camping & Nature Retreat<br />
            {CONFIG.location}
          </p>
        </div>
        <div className="text-sm space-y-2">
          <Link to="/about" className="block hover:text-sand">About</Link>
          <Link to="/stay" className="block hover:text-sand">Stay</Link>
          <Link to="/services" className="block hover:text-sand">Services</Link>
          <Link to="/gallery" className="block hover:text-sand">Gallery</Link>
          <Link to="/location" className="block hover:text-sand">Location</Link>
          <Link to="/contact" className="block hover:text-sand">Contact</Link>
        </div>
        <div className="text-sm space-y-2">
          <p>
            <a href={`tel:${CONFIG.phoneTel}`} className="hover:text-sand">{CONFIG.phone}</a>
          </p>
          <p>
            <a href={`mailto:${CONFIG.email}`} className="hover:text-sand">{CONFIG.email}</a>
          </p>
          <div className="flex gap-4 pt-2">
            <button
              onClick={() => openWhatsApp(DEFAULT_WA_MESSAGES.contact)}
              className="hover:text-sand"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-xl" />
            </button>
            <a href="#" className="hover:text-sand" aria-label="Instagram">
              <i className="fa-brands fa-instagram text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-10 pt-8 border-t border-white/10 text-xs text-white/40">
        © {new Date().getFullYear()} {CONFIG.fullName}
      </div>
    </footer>
  )
}
