import Link from "next/link"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, MessageSquare } from "lucide-react"
import { BananaLeafDivider } from "./banana-leaf-divider"
import { NAPBlock } from "./nap-block"
import { Button } from "@/components/ui/button"
import type { Service } from "@/lib/services-data"

interface ServicePageTemplateProps {
  service: Service
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-gold/5 py-4 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-charcoal/70">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-gold transition-colors">Services</Link>
            <span>/</span>
            <span className="text-charcoal font-semibold">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-gold/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 md:gap-6 mb-6">
            <span className="text-5xl md:text-6xl">{service.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-3">
                {service.name} in Coimbatore
              </h1>
              <p className="text-lg md:text-xl text-gold font-tamil mb-2">{service.tamil}</p>
              <p className="text-lg text-charcoal/80">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - What We Do */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
            What is {service.name}?
          </h2>
          <div className="space-y-4">
            {service.longDescription.map((paragraph, index) => (
              <p key={index} className="text-lg text-charcoal/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Section 2 - Why Choose Us */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
            Why Choose SS Catering for {service.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whyChoose.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gold/20">
                <span className="text-gold text-xl flex-shrink-0">✓</span>
                <p className="text-charcoal/80">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Section 3 - Sample Menu */}
      {Object.keys(service.sampleMenuItems).length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
              Sample {service.name} Menu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.sampleMenuItems.breakfast && (
                <Card className="p-6 border-gold/20">
                  <h3 className="text-xl font-playfair font-bold text-maroon mb-4">Breakfast</h3>
                  <ul className="space-y-2">
                    {service.sampleMenuItems.breakfast.map((item, i) => (
                      <li key={i} className="text-charcoal/80 flex items-center gap-2">
                        <span className="text-gold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
              {service.sampleMenuItems.lunch && (
                <Card className="p-6 border-gold/20">
                  <h3 className="text-xl font-playfair font-bold text-maroon mb-4">Lunch</h3>
                  <ul className="space-y-2">
                    {service.sampleMenuItems.lunch.map((item, i) => (
                      <li key={i} className="text-charcoal/80 flex items-center gap-2">
                        <span className="text-gold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
              {service.sampleMenuItems.dinner && (
                <Card className="p-6 border-gold/20">
                  <h3 className="text-xl font-playfair font-bold text-maroon mb-4">Dinner</h3>
                  <ul className="space-y-2">
                    {service.sampleMenuItems.dinner.map((item, i) => (
                      <li key={i} className="text-charcoal/80 flex items-center gap-2">
                        <span className="text-gold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
            <p className="text-center text-charcoal/70 mt-8 text-sm">
              Note: Menu is customizable as per your requirements
            </p>
          </div>
        </section>
      )}

      <BananaLeafDivider />

      {/* Section 4 - Pricing */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
            {service.name} Price List in Coimbatore
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gold/30">
                  <th className="text-left py-4 px-4 font-playfair font-bold text-maroon">Package</th>
                  <th className="text-left py-4 px-4 font-playfair font-bold text-maroon">Per Plate Cost</th>
                  <th className="text-left py-4 px-4 font-playfair font-bold text-maroon">Includes</th>
                </tr>
              </thead>
              <tbody>
                {service.pricing.map((pkg, index) => (
                  <tr key={index} className="border-b border-gold/10 hover:bg-white transition-colors">
                    <td className="py-4 px-4 font-semibold text-charcoal">{pkg.tier}</td>
                    <td className="py-4 px-4 text-gold font-bold">{pkg.perPlate}</td>
                    <td className="py-4 px-4 text-charcoal/80">
                      {pkg.includes.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-charcoal/70 mt-8 text-sm">
            Final pricing based on menu, headcount & location. Contact us for exact quote.
          </p>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Section 5 - Service Areas */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
            {service.name} Available In:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {service.serviceAreas.map((area, index) => (
              <div key={index} className="p-4 bg-cream border border-gold/20 rounded-lg text-center text-charcoal font-semibold">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Section 6 - Map */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
            Find Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gold/20">
              <h3 className="font-playfair font-bold text-lg text-maroon mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                  <p className="text-charcoal/80">7, Selvanayaki Garden, Siruvani Main Road, Coimbatore, Tamil Nadu 641101</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-gold flex-shrink-0" size={20} />
                  <a href="tel:+918667566318" className="text-gold hover:text-maroon font-semibold">086675 66318</a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-gold flex-shrink-0" size={20} />
                  <a href="https://wa.me/918667566318" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-maroon font-semibold">
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5976687266627!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4f5d9d9d9d9d9%3A0x1234567890abcdef!2sSS%20Catering%20%26%20Events!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Section 7 - FAQs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <details key={index} className="p-4 bg-cream border border-gold/20 rounded-lg group cursor-pointer">
                <summary className="font-semibold text-charcoal text-lg group-open:text-gold transition-colors">
                  {faq.question}
                </summary>
                <p className="mt-4 text-charcoal/80 text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Section 8 - CTA */}
      <section className="py-12 md:py-16 bg-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">
            Book {service.name} in Coimbatore
          </h2>
          <p className="text-lg text-charcoal/80 mb-8">
            Available 24×7 — We&apos;ll respond within 1 hour
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-charcoal flex items-center gap-2 justify-center"
              onClick={() => window.open("tel:+918667566318")}
            >
              <Phone size={20} />
              Call 086675 66318
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10 flex items-center gap-2 justify-center"
              onClick={() => window.open("https://wa.me/918667566318", "_blank")}
            >
              <MessageSquare size={20} />
              WhatsApp Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10"
              onClick={() => window.location.href = "mailto:info@sscateringcoimbatore.com"}
            >
              Email Us
            </Button>
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Section 9 - Related Services */}
      {service.relatedServices.length > 0 && (
        <section className="py-12 md:py-16 bg-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
              You May Also Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for related services - would be populated with actual related service cards */}
              <Card className="p-6 border-gold/20 hover:shadow-lg transition-shadow">
                <p className="text-charcoal/70">Related services would be displayed here</p>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* NAP Block Footer */}
      <div className="py-12 md:py-16 bg-white border-t border-gold/20">
        <div className="container mx-auto px-4">
          <NAPBlock />
        </div>
      </div>
    </main>
  )
}
