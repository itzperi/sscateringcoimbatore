import Link from "next/link"
import { Card } from "@/components/ui/card"
import { servicesData } from "@/lib/services-data"
import { BananaLeafDivider } from "@/components/banana-leaf-divider"
import { NAPBlock } from "@/components/nap-block"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Catering Services | SS Catering & Events | 100+ Services",
  description: "Browse all 100+ catering services offered by SS Catering & Events in Coimbatore. Wedding catering, Brahmin catering, corporate events, and more.",
  keywords: "catering services coimbatore, all services, wedding catering, brahmin catering, corporate events"
}

export default function ServicesPage() {
  const services = Object.values(servicesData)
  const categories = [...new Set(services.map(s => s.category))]

  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-gold/5 py-4 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-charcoal/70">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal font-semibold">Services</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gold/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            All Catering Services
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto">
            Explore our comprehensive range of 100+ catering services across Coimbatore and Tamil Nadu
          </p>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Services by Category */}
      {categories.map((category) => {
        const categoryServices = services.filter(s => s.category === category)
        return (
          <section key={category} className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service) => (
                  <Link key={service.id} href={`/services/${service.slug}/`}>
                    <Card className="h-full p-6 border-gold/20 hover:shadow-lg hover:border-gold/50 transition-all cursor-pointer group">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-maroon mb-2">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gold mb-3 font-tamil">
                        {service.tamil}
                      </p>
                      <p className="text-charcoal/70 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="text-gold font-semibold group-hover:translate-x-2 transition-transform">
                        Know More →
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-b border-gold/10 mt-12" />
          </section>
        )
      })}

      <BananaLeafDivider />

      {/* Contact CTA */}
      <section className="py-12 md:py-16 bg-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-lg text-charcoal/80 mb-8">
            Contact us directly and we&apos;ll customize a service for your unique needs
          </p>
          <a
            href="tel:+918667566318"
            className="inline-block px-8 py-3 bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-lg transition-colors"
          >
            Call Us Now: 086675 66318
          </a>
        </div>
      </section>

      {/* NAP Block */}
      <div className="py-12 md:py-16 bg-white border-t border-gold/20">
        <div className="container mx-auto px-4">
          <NAPBlock />
        </div>
      </div>
    </main>
  )
}
