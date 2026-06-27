import Link from "next/link"
import { BananaLeafDivider } from "@/components/banana-leaf-divider"
import { NAPBlock } from "@/components/nap-block"
import { Award, Heart, Users, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About SS Catering & Events | Our Story | Coimbatore",
  description: "Learn about SS Catering & Events, Coimbatore's leading Brahmin catering service since 2012.",
  keywords: "about SS catering, company history, brahmin catering coimbatore"
}

export default function AboutPage() {
  const milestones = [
    { year: "2012", title: "Founded", description: "SS Catering & Events was established with a vision to bring authentic Brahmin catering to Coimbatore" },
    { year: "2015", title: "Expanded", description: "Extended services to Tirupur, Pollachi, and surrounding areas" },
    { year: "2018", title: "Recognition", description: "Achieved 4.9★ Google rating with 10,000+ satisfied clients" },
    { year: "2024", title: "Today", description: "Serving Tamil Nadu with 100+ specialized catering services" }
  ]

  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "We honor traditional Brahmin recipes and cooking methods"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Every meal is prepared with utmost care and hygiene standards"
    },
    {
      icon: Users,
      title: "Service Excellence",
      description: "Professional, courteous staff dedicated to your satisfaction"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Blending tradition with modern catering solutions"
    }
  ]

  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-gold/5 py-4 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-charcoal/70">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal font-semibold">About</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gold/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            About SS Catering & Events
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80">
            Coimbatore&apos;s Most Trusted Brahmin Caterers Since 2012
          </p>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Our Story */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
              <p>
                SS Catering & Events was born in February 2012 with a simple yet profound mission: to bring the authentic taste of traditional Brahmin cooking to Coimbatore&apos;s celebration tables. What started as a small catering operation has grown into one of the city&apos;s most trusted names in vegetarian catering.
              </p>
              <p>
                Over the past 12+ years, we have catered to more than 10,000 events—from intimate family celebrations to grand wedding feasts. Each event has been an opportunity for us to refine our craft and deepen our understanding of our clients&apos; needs.
              </p>
              <p>
                We believe that food is more than just sustenance; it&apos;s a vessel of tradition, culture, and emotion. Every sambar, every rasam, and every carefully prepared dish carries with it the essence of generations of Brahmin culinary wisdom.
              </p>
              <p>
                Today, we proudly serve Coimbatore, Tirupur, Pollachi, Erode, and across Tamil Nadu with 100+ specialized catering services, maintaining the same dedication to quality and authenticity that defined us from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="p-6 bg-white rounded-lg border border-gold/20 text-center">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-gold" size={24} />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-maroon mb-2">
                    {value.title}
                  </h3>
                  <p className="text-charcoal/80 text-sm">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Timeline/Milestones */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pb-12 last:pb-0">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-1 h-16 bg-gold/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <p className="text-gold font-bold text-lg">{milestone.year}</p>
                    <h3 className="text-xl font-playfair font-bold text-maroon">
                      {milestone.title}
                    </h3>
                    <p className="text-charcoal/80 mt-2">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8">
            Why Families Trust SS Catering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">12+</div>
              <p className="font-semibold text-charcoal mb-2">Years of Excellence</p>
              <p className="text-charcoal/70 text-sm">Serving Coimbatore with dedication and quality</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">10,000+</div>
              <p className="font-semibold text-charcoal mb-2">Events Catered</p>
              <p className="text-charcoal/70 text-sm">Trusted by thousands of families</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">4.9★</div>
              <p className="font-semibold text-charcoal mb-2">Google Rating</p>
              <p className="text-charcoal/70 text-sm">Consistently rated by our clients</p>
            </div>
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Let Us Cater Your Next Celebration
          </h2>
          <p className="text-lg text-charcoal/80 mb-8">
            Experience the authentic taste of Brahmin cuisine and professional service
          </p>
          <a href="tel:+918667566318" className="inline-block px-8 py-3 bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-lg transition-colors">
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
