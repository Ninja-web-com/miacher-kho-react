interface HeroProps {
  image: string
  alt?: string
  eyebrow?: string
  title: string
  subtitle?: string
  height?: string
  children?: React.ReactNode
}

export default function Hero({
  image,
  alt = 'Mountain landscape',
  eyebrow,
  title,
  subtitle,
  height = 'h-[55vh] min-h-[380px] md:h-[65vh]',
  children,
}: HeroProps) {
  return (
    <section className={`relative ${height} overflow-hidden flex items-end`}>
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/50 to-charcoal/75" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-12 md:pb-16 w-full">
        {eyebrow && (
          <p className="text-sand tracking-[0.2em] text-xs md:text-sm uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/85 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
