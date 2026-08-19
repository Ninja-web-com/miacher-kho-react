import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { openWhatsApp, DEFAULT_WA_MESSAGES } from '../lib/config'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/stay', label: 'Stay' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/location', label: 'Location' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navBg = scrolled || !isHome
    ? 'bg-forest/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 nav-transition ${navBg}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl md:text-3xl text-white tracking-wide">
            Miacher Kho
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/90">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-sand transition ${
                  location.pathname === link.to ? 'text-sand' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openWhatsApp(DEFAULT_WA_MESSAGES.book)}
              className="hidden md:inline-flex bg-sand text-forest px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition"
            >
              Book Your Stay
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white text-2xl p-2"
              aria-label="Open menu"
            >
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-forest text-white transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="font-display text-2xl">Miacher Kho</span>
          <button onClick={() => setMenuOpen(false)} className="text-3xl" aria-label="Close menu">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <nav className="flex flex-col px-8 pt-8 space-y-5 text-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={location.pathname === link.to ? 'text-sand' : ''}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/best-time" className="text-white/80">Best Time</Link>
          <Link to="/faq" className="text-white/80">FAQ</Link>
          <button
            onClick={() => openWhatsApp(DEFAULT_WA_MESSAGES.book)}
            className="mt-6 inline-flex items-center justify-center gap-3 bg-sand text-forest py-4 rounded-full font-semibold"
          >
            <i className="fa-brands fa-whatsapp" /> Book via WhatsApp
          </button>
        </nav>
      </div>
    </>
  )
}
