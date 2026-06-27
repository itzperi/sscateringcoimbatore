import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      title: "Wedding Catering",
      tamil: "திருமண சமையல்",
      description: "Grand wedding feasts with authentic Brahmin recipes and professional serving staff",
      href: "/services/wedding-catering-coimbatore/",
      icon: "💒"
    },
    {
      title: "Brahmin Catering",
      tamil: "பிராமண சமையல்",
      description: "Pure vegetarian sattvic food, onion & garlic-free for rituals and ceremonies",
      href: "/services/brahmin-catering-coimbatore/",
      icon: "🙏"
    },
    {
      title: "Corporate Events",
      tamil: "நிறுவன விழாவு",
      description: "Professional catering for conferences, office events, and business gatherings",
      href: "/services/corporate-catering-coimbatore/",
      icon: "💼"
    },
    {
      title: "Birthday Functions",
      tamil: "பிறந்தநாள் விழா",
      description: "Customized menus and serving for birthday celebrations of all sizes",
      href: "/services/birthday-catering-coimbatore/",
      icon: "🎂"
    },
    {
      title: "Housewarming",
      tamil: "வீட்டுவிழா",
      description: "Traditional vegetarian catering for griha pravesam and house blessings",
      href: "/services/housewarming-catering-coimbatore/",
      icon: "🏠"
    },
    {
      title: "Home Catering",
      tamil: "வீட்டு சமையல்",
      description: "Regular meal delivery and catering services for homes and families",
      href: "/services/home-catering-coimbatore/",
      icon: "🍽️"
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Our Catering Services
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Comprehensive catering solutions for every occasion with authentic South Indian Brahmin cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className="h-full p-6 border-gold/20 hover:shadow-lg hover:border-gold/50 transition-all cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold text-maroon mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gold mb-3 font-tamil">
                  {service.tamil}
                </p>
                <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center text-gold font-semibold group-hover:translate-x-2 transition-transform">
                  Know More
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services/"
            className="inline-block px-8 py-3 bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-lg transition-colors"
          >
            View All 100+ Services
          </Link>
        </div>
      </div>
    </section>
  )
}
