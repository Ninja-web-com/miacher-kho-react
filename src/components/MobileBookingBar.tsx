import { Link } from 'react-router-dom'
import { CONFIG, openWhatsApp, DEFAULT_WA_MESSAGES } from '../lib/config'

export default function MobileBookingBar() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-forest text-white sticky-bar border-t border-white/10">
        <div className="grid grid-cols-3 divide-x divide-white/15">
          <a
            href={`tel:${CONFIG.phoneTel}`}
            className="flex flex-col items-center py-3.5 text-xs gap-1"
          >
            <i className="fa-solid fa-phone text-lg" />
            Call
          </a>
          <button
            onClick={() => openWhatsApp(DEFAULT_WA_MESSAGES.enquire)}
            className="flex flex-col items-center py-3.5 text-xs gap-1 bg-sand text-forest font-semibold"
          >
            <i className="fa-brands fa-whatsapp text-lg" />
            WhatsApp
          </button>
          <Link
            to="/contact"
            className="flex flex-col items-center py-3.5 text-xs gap-1"
          >
            <i className="fa-solid fa-calendar-check text-lg" />
            Book
          </Link>
        </div>
      </div>
      <div className="h-16 md:hidden" />
    </>
  )
}
