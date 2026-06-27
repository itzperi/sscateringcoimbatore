import Link from "next/link"

export function AreasServed() {
  const areas = [
    "Ganapathy", "Saravanampatti", "RS Puram", "Peelamedu", "Singanallur",
    "Vadavalli", "Perur", "Thondamuthur", "Kuniyamuthur", "Pooluvapatti",
    "Mettupalayam Road", "Avinashi Road", "Tirupur", "Erode", "Pollachi",
    "Ooty", "Palakkad", "Namakkal"
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Available across Coimbatore and surrounding cities in Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {areas.map((area, index) => (
            <Link
              key={index}
              href={`/services/catering-${area.toLowerCase().replace(/\s+/g, '-')}/`}
              className="p-4 bg-cream border border-gold/20 rounded-lg text-center text-charcoal hover:bg-gold/10 hover:border-gold/50 transition-all hover:shadow-md"
            >
              <span className="font-semibold text-sm md:text-base">{area}</span>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-cream border-2 border-gold/30 rounded-lg text-center">
          <p className="text-lg text-charcoal mb-4">
            <span className="font-bold text-gold">Need catering in a location not listed?</span>
          </p>
          <p className="text-charcoal/70 mb-6">
            We deliver across Tamil Nadu and nearby regions. Contact us for custom delivery options.
          </p>
          <a
            href="tel:+918667566318"
            className="inline-block px-8 py-3 bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-lg transition-colors"
          >
            Call Us Now: 086675 66318
          </a>
        </div>
      </div>
    </section>
  )
}
