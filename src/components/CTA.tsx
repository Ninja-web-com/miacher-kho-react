import { openWhatsApp, DEFAULT_WA_MESSAGES } from '../lib/config'

interface CTAProps {
  title: string
  subtitle?: string
  message?: string
  buttonText?: string
  dark?: boolean
}

export default function CTA({
  title,
  subtitle,
  message = DEFAULT_WA_MESSAGES.availability,
  buttonText = 'Chat on WhatsApp',
  dark = true,
}: CTAProps) {
  return (
    <section className={`py-20 md:py-28 text-center ${dark ? 'bg-forest text-white' : 'bg-snow text-charcoal'}`}>
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-display text-4xl md:text-5xl mb-4">{title}</h2>
        {subtitle && (
          <p className={`mb-10 ${dark ? 'text-white/75' : 'text-stone'}`}>{subtitle}</p>
        )}
        <button
          onClick={() => openWhatsApp(message)}
          className="inline-flex items-center gap-3 bg-sand text-forest px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition"
        >
          <i className="fa-brands fa-whatsapp text-xl" />
          {buttonText}
        </button>
      </div>
    </section>
  )
}
